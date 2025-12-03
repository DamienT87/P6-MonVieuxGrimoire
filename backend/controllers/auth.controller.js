const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// Contrôleur pour l'inscription
exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash =>{
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user.save() //Sauvegarde de mon user dans la bdd
    .then(() => res.status(201).json({message: 'Utilisateur créé !'}))
    .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({error}));
};

// Contrôleur pour la connexion
exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
  .then( user => {
    //Si mon user n'existe pas 
    if (!user){
      return res.status(401).json({message: 'Paire identifiant/mot de passe incorrecte' });
    }

    //Comparaison du mot de passe donné par le user et mon mot de passé hashé
    bcrypt.compare(req.body.password, user.password)
    .then(valid => {
      //Si le mot de passe est incorrect
      if(!valid){
        return res.status(401).json({message: 'Paire identifiant/mot de passe incorrecte'})
      }

      //Génération du token JWT si le mdp est correct
      const token = jwt.sign(
        { userId: user._id},
        process.env.JWT_SECRET,
        { expiresIn : '24h' }
      );

      //On renvoi le user id et le toekn au front
      res.status(200).json({
        userId: user._id,
        token: token
      });
    })
    .catch(error => res.status(500).json({error}));
  })
  .catch(error => res.status(500).json({error}))
};