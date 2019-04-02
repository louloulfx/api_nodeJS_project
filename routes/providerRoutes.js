// Appel de la connection à la base de donnée
const { mongoose } = require('../db/database.js');

//Appel du module objectId de mongoose
const ObjectID = mongoose.Types.ObjectId;

//Appel du modèle provider
const { Provider } = require('../models/providerModel');

// Méthode post pour le modèle provider
const providerPost = (req, res) => {
    const newProvider =
        new Provider({
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            phone: req.body.phone,
            mail: req.body.mail,
            longitude: req.body.longitude,
            latitude: req.body.latitude
        });
    newProvider.save().then(provider => res.json(provider)).catch(err => res.status(500).send(err));
}

// Méthode get pour le modèle provider
const providerGet = (req, res) => Provider.find().then(listProvider => { res.json(listProvider) }, err => res.status(500).send(err))

// Méthode delete pour le modèle provider
const providerDelete = (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Provider.findByIdAndDelete(id).then(provider => {
            if (!provider) {
                res.status(404).send();
            } else {
                res.send(provider);
            }
        }).catch(err => res.status(500).send(err));
    }
}

// Méthode getbyid pour le modèle provider
const providerGetbyId = (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Provider.findById(id).then(provider => {
            if (!provider) {
                res.status(404).send();
            } else {
                res.send(provider);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    }
}

// Méthode put pour le modèle provider
const providerPut = (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Provider.findByIdAndUpdate(id, { $set: req.body }).then(provider => {
            if (!provider) {
                res.status(404).send();
            } else {
                res.json(provider).send();
            }
        }).catch(err => res.status(500).send(err));
    }
}

//Exportations des constantes
module.exports = { providerPost, providerGet, providerDelete, providerGetbyId, providerPut };