const mongoose = require('mongoose');

const mongodb = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(
    mongodb,
    { useNewUrlParser: true }
);

module.export = { mongoose };
