const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.use(cors())
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send("Server is up and running")
});

module.exports = server;