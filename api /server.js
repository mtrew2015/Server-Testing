const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes.js');
const server = express();

server.use(helmet(),cors(),express.json());

routes(server);

module.exports = {server}
