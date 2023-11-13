'use strict';

const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use('/public', express.static('public'));
server.use(bodyParser.json({ limit: '10mb' }));

server.use('/trends',      require('./routes/trends'));

server.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    res.status(404).send('not');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});