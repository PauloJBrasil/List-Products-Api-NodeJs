const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World');
})

app.listen(3001);