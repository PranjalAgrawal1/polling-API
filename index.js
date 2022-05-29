require('dotenv').config();

// express
const express = require('express');
const app = express();
// port
const port = process.env.PORT;

// db
const db = require('./config/mongoose');

app.use(express.json());

// router 
app.use('/', require('./routers/index.js'));

// listen
app.listen(port, function (err) {
    if (err) {
        console.log("error surver is not running on port : ", port);
    }
    console.log("surver is runing on port :: ", port);
})

