const mongoose = require('mongoose');

const mongodb = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(
    mongodb,
    { useNewUrlParser: true }
);

module.export = { mongoose };
