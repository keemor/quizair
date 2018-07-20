const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    
    next();
});

app.get('/', (req, res) => {
    res.send('Hello express');
});

app.listen(3000, () => {
    console.log('Server running');
});

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
