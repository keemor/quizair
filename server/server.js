const express = require('express');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');
const compression = require('compression');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const app = express();

//Disable http on heroku
if (env === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(compression());
app.use(bodyParser.json());
app.use('/', express.static(`${__dirname}/../dist`));

app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({}).exec();
        todos.reverse();
        res.send({ todos });
    } catch (e) {
        res.status(400).send(e);
    }
});

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then(
        doc => {
            res.send(doc);
        },
        e => {
            res.status(400).send(e);
        }
    );
});

app.get('/todo/:id', async (req, res) => {
    const id = req.params.id;

    return await Todo.findById(id, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);

        return res.status(200).send({ todo });
    });
});

app.delete('/todo/:id', async (req, res) => {
    const id = req.params.id;

    return await Todo.findByIdAndRemove(id, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: 'Todo successfully deleted',
            id: todo._id,
            text: todo.text
        };
        return res.status(200).send(response);
    });
});

app.put('/todo/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    return await Todo.findByIdAndUpdate(id, body, { new: true }, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: 'Todo successfully updated',
            id: todo._id,
            text: todo.text
        };
        return res.status(200).send(response);
    });
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

module.exports = { app };
