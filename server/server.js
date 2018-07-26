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
        res.send({ todos });
    } catch (e) {
        res.status(400).send(e);
    }
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

// app.use('/static', express.static(`${__dirname}/../static`));
// app.use('/manifest.json', express.static(`${__dirname}/../manifest.json`));

// app.get('/*', function(req, res) {
//     //res.sendFile(path.join(__dirname, './build', 'index.html'));
//     res.sendFile(path.resolve('dist/index.html'));
// });

// app.post('/todos', (req, res) => {
//     console.log(req.body);

//     const todo = new Todo({
//         text: req.body.text
//     });

//     todo.save().then(
//         doc => {
//             res.send(doc);
//         },
//         e => {
//             res.status(400).send(e);
//         }
//     );
// });
