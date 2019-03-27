//Constante du port
const port = 3000;

//Appel du fichier route avec toutes les requêtes
const { app } = require('./routes');

// lancement du serveur
app.listen(port);
console.log('API was launched on port ' + port);