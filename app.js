const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

    // EJS
app.set('view engine', 'ejs');
app.set('views', './views');

    // PUBLIC FILES
app.use(express.static('public'));

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
    // MONGODB
let url = require('./connection');
mongoose.connect(url)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(`Connection err: ${err}`))
    
    // ROUTER()
app.use('/router', router);

app.listen(8081, () => console.log('Server Started!'));