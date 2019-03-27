// Appel du module mongoose pour permettre la connexion à la bdd
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://louloulfx:louloulou@cluster0-y6q3e.gcp.mongodb.net/Api_ViaBrico?retryWrites=true', { useNewUrlParser: true });
// Export du module mongoose
module.exports = { mongoose }