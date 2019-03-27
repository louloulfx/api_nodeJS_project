//Constante du port
const port = 5000;
//Appel du fichier route avec toutes les requêtes
const { app } = require('./routes');
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// lancement du serveur
app.listen(process.env.PORT || port);
console.log('API was launched on port ' + port);