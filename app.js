//Constante du port
const port = 5000;

//Appel du fichier route avec toutes les requêtes
const { app } = require('./routes');

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'https://damp-hollows-18655.herokuapp.com');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
// lancement du serveur
app.listen(process.env.PORT || port);
console.log('API was launched on port ' + port);