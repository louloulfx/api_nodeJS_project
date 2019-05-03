// Appel du module mongoose pour permettre la connexion à la bdd
const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString, { useNewUrlParser: true });
// Export du module mongoose
module.exports = { mongoose, User: require('../users/user.model') }