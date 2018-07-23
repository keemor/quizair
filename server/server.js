const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.post('/todos', (req, res) => {
    console.log(req.body);

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

app.get('/todos', (req, res) => {
    Todo.find({})
        .exec()
        .then(
            todos => {
                //docs.map(d => console.log(d, d._id.getTimestamp()));

                res.send({ todos });
            },
            err => {
                res.status(400).send(e);
            }
        );
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
