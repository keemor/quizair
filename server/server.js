//const wwwhisper = require('connect-wwwhisper');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const port = process.env.PORT || 3000;

const app = express();

// app.use(wwwhisper(false));

app.use(bodyParser.json());
app.use('/', express.static(`${__dirname}/../dist`));
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
