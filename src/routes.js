const express = require('express');
const Crypto = require('crypto');
const path = require('path');

const urlController = require('./controllers/urlController');

const routes = express.Router();

routes.get('/', (req, res) => res.sendFile(path.join(__dirname + 'index.html')))

routes.get('/:id', urlController.view)

routes.post('/create', urlController.create);

module.exports = routes;