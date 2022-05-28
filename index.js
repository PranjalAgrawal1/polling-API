require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;

const db = require('./config/mongoose');

const questions = require('./routers/questions');

const options = require('./routers/options')

app.use(express.json());


