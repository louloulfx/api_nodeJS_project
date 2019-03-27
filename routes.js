//Appel du module express
const express = require('express');

//Appel du module bodyParser
const bodyParser = require('body-parser');

//Appel des constantes afin de créer les requêtes get, put, getbyid, delete et put
const { providerPost, providerGet, providerDelete, providerGetbyId, providerPut } = require('./routes/providerRoutes')
const { userPost, userGet, userDelete, userGetbyId, userPut } = require('./routes/userRoutes')

const app = express();
app.use(bodyParser.json());

app.get('/', res.redirect('/user'));
//Création des requêtes pour tout les modules avec express
app.post('/provider', providerPost);
app.get('/provider', providerGet);
app.delete('/provider/:id', providerDelete);
app.get('/provider/:id', providerGetbyId);
app.put('/provider/:id', providerPut);

app.post('/user', userPost);
app.get('/user', userGet);
app.delete('/user/:id', userDelete);
app.get('/user/:id', userGetbyId);
app.put('/user/:id', userPut);

//Export de express et de toutes les routes
module.exports = { app };
