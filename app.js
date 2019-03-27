//Constante du port
const port = 5000;

//Appel du fichier route avec toutes les requêtes
const { app } = require('./routes');

// lancement du serveur
app.listen(process.env.PORT || port);
console.log('API was launched on port ' + port);