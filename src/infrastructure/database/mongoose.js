// src/infrastructure/database/mongoose.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_local', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
