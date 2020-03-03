const express = require('express');

const companiesRouter = require('../companies/companies-router.js');

const server = express();

server.use('/api/companies', companiesRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;