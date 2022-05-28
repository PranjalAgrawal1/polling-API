require('dotenv').config();

const express = require('express');
const app = express();

// const port = process.env.PORT;
const port = 8000;

const db = require('./config/mongoose');

app.use(express.json());

app.use('/', require('./routers/index.js'));


app.listen(port, function (err) {
    if (err) {
        console.log("error surver is not running on port : ", port);
    }
    console.log("surver is runing on port :: ", port);
})

