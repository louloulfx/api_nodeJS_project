require('rootpath')();
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error_handler');
//Appel du module express
const express = require("express");
const Cors = require("cors");
//Appel du module bodyParser
const bodyParser = require("body-parser");

//Appel des constantes afin de créer les requêtes get, put, getbyid, delete et put
const {
  providerPost,
  providerGet,
  providerDelete,
  providerGetbyId,
  providerPut
} = require("./routes/providerRoutes");

const app = express();
app.use(Cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send({
        status : "online",
        version: "1.0.0"
    })
});
//Création des requêtes pour tout les modules avec express
app.post("/provider", providerPost);
app.get("/provider", providerGet);
app.delete("/provider/:id", providerDelete);
app.get("/provider/:id", providerGetbyId);
app.put("/provider/:id", providerPut);


app.use(bodyParser.urlencoded({ extended: false }));

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

//Export de express et de toutes les routes
module.exports = { app };
