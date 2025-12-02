//Import express
const http = require('http');
const app = require('./app');

//Définition du port sur lequel le serveur ecoute
const PORT = 4000;

//Création du serveur avec Express
const server = http.createServer(app);

app.listen(PORT, () => {
    console.log(`Serveur lancé sur https://localhost:${PORT}`)
})

