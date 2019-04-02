// Appel de la connection à la base de donnée
const { mongoose } = require("../db/database.js");

//Création d'un modèle dans la base de donnée
const Provider = mongoose.model("Provider", {
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  mail: {
    type: String,
    require: true
  },
  longitude: {
    type: Number,
    require: true
  },
  latitude: {
    type: Number,
    require: true
  }
});

// Exportation d'un modèle
module.exports = { Provider };
