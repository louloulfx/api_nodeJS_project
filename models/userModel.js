// Appel de la connection à la base de donnée
const { mongoose } = require('../db/database.js');

//Création d'un modèle dans la base de donnée
const User = mongoose.model('User', {
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

// Exportation d'un modèle
module.exports = { User };