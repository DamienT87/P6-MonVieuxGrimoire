const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        //Recuperation du header Authorization
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({ message: 'Requête non authentifiée !'});
        }

        //Extraction du token
        const token = authHeader.split(' ')[1];

        //Décodage du token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        //Extraction du userID dans le token
        req.auth ={
            userId: decodedToken.userId
        };

        next();
    }catch(error){
        return res.status(401).json({message: 'Token invalide !', error})
    }
};