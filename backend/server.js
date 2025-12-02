//Import express
const express = require('express');

//Création de l'application express
const app = express();

//Définition du port sur lequel le serveur ecoute
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('API Mon vieux Grimoire - Serveur ok')
})

app.listen(PORT, () => {
    console.log(`Serveur lancé sur https://localhost:${PORT}`)
})