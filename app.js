//Constante du port
const port = 5000;
var cors = require('cors');
//Appel du fichier route avec toutes les requêtes
const { app } = require('./routes');

app.use(cors());
// lancement du serveur
app.listen(process.env.PORT || port);
console.log('API was launched on port ' + port);