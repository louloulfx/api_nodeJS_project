// Appel de la connection à la base de donnée
const { mongoose } = require('../db/database.js');

//Appel du module objectId de mongoose
const ObjectID = mongoose.Types.ObjectId;

//Appel du modèle user
const { User } = require('../models/userModel');

// Méthode post pour le modèle user
const userPost = (req, res) => {
    const newUser =
        new User({
            name: req.body.name,
            password: req.body.password
        });
    newUser.save().then(user => res.json(user)).catch(err => res.status(500).send(err));
}

// Méthode get pour le modèle user
const userGet = (req, res) => User.find().then(listUser => { res.json(listUser) }, err => res.status(500).send(err))

// Méthode delete pour le modèle user
const userDelete = (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        User.findByIdAndDelete(id).then(user => {
            if (!user) {
                res.status(404).send();
            } else {
                res.send(user);
            }
        }).catch(err => res.status(500).send(err));
    }
}

// Méthode getbyid pour le modèle user
const userGetbyId = (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        User.findById(id).then(user => {
            if (!user) {
                res.status(404).send();
            } else {
                res.send(user);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    }
}

// Méthode put pour le modèle user
const userPut = (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        User.findByIdAndUpdate(id, { $set: req.body }).then(user => {
            if (!user) {
                res.status(404).send();
            } else {
                res.json(user).send();
            }
        }).catch(err => res.status(500).send(err));
    }
}

//Exportations des constantes
module.exports = { userPost, userGet, userDelete, userGetbyId, userPut };