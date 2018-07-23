// const { MongoClient, ObjectID } = require('mongodb');

// const { mongoose } = require('./db/mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect(
//     'mongodb://localhost:27017/TodoApp',
//     { useNewUrlParser: true }
// );

// const newTodo = new Todo({
//     text: '4444444444444444444'
// });

// newTodo
//     .save()
//     .then(
//         doc => {
//             console.log('Saved', doc);
//         },
//         e => {
//             console.log(e);
//         }
//     )
//     .then(() => {
//         Todo.find({})
//             .exec()
//             .then(
//                 docs => {
//                     docs.map(d => console.log(d, d._id.getTimestamp()));
//                 },
//                 err => {
//                     console.log(err);
//                 }
//             );
//     });

// MongoClient.connect(
//     'mongodb://localhost:27017',
//     { useNewUrlParser: true },
//     (err, client) => {
//         if (err) {
//             return console.log('Error to connect');
//         }
//         console.log('Conntected');
//         const db = client.db('TodoApp');

//         db.collection('Todos')
//             .find({ _id: new ObjectID('5b51e0f4098f7137b0b6e4d4') })
//             .toArray()
//             .then(
//                 docs => {
//                     docs.map(d => console.log(d, d._id.getTimestamp()));
//                 },
//                 err => {
//                     console.log(err);
//                 }
//             );

//         // db.collection('Todos').insertOne(
//         //     {
//         //         text: 'something',
//         //         completed: false
//         //     },
//         //     (err, result) => {
//         //         if (err) {
//         //             return console.log(err);
//         //         }

//         //         console.log(JSON.stringify(result.ops, undefined, 2));
//         //     }
//         // );

//         client.close();
//     }
// );

// const express = require('express');

// const app = express();

// const port = process.env.PORT || 3000;

// app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//     next();
// });

// app.listen(port, () => {
//     console.log(`Server running on ${port}`);
// });

// app.get('/', (req, res) => {
//     //res.send('Hello <h1>express!</h1>');
//     //res.render('index.html');
// });

// const axios = require('axios');

// // Make a request for a user with a given ID

// const getAddress = address => {
//     const key = 'AIzaSyB6d7ohfvYaKbD6IohdsB7t4q8SptdWslE';

//     return axios.get(`https://maps.google.com/maps/api/geocode/json`, {
//         params: {
//             address: address,
//             key: key
//         }
//     });
// };

// getAddress('80-460 Gdańsk')
//     .then(
//         response => {
//             console.info(JSON.stringify(response.data, undefined, 2));
//         },
//         error => {
//             console.log(1, error);
//         }
//     )
//     .catch(function(error) {
//         // handle error
//         console.log(2, error);
//     });

//const os = require('os');

// const yargs = require('yargs');

// const notes = require('./notes');

// const argv = yargs.command('add', 'Add new note').help().argv;

// console.log(argv);

// if (argv._.includes('add')) {
//     notes.addNote(argv.title, argv.body);
//     console.log(notes.getAllNote());
// } else if (argv._.includes('remove')) {
//     notes.removeNote(argv.title);
//     console.log(notes.getAllNote());
// } else if (argv._.includes('getall')) {
//     notes.getAllNote();
// }

//console.log(os.userInfo());
