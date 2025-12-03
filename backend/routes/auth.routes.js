const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

//Route pour l'inscription
router.post('/signup', authController.signup);

//Route pour la connexion
router.post('/login', authController.login);

module.exports = router;