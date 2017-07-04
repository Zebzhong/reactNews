const config = require('./config');

const ConnClient = {
  Client:require('mysql').createConnection(config)
}

module.exports = ConnClient;