//Ajout de la connexion à Mongo DB
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connexion à MongoDB réussi !'))
.catch(error => console.log('Connexion à MongoDB échouée : ', error));

const express = require('express');
const app = express();

//Parssage du JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Mon Vieux Grimoire - OK ✔️');
});

module.exports = app;