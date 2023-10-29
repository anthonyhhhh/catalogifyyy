require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

(async() => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI_TEST)
        console.log('conectado a mongoose')
    } catch (error) {
        console.log()
    }
})();

app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/catalogify', express.static(path.resolve('views', 'principal')));

module.exports = app;