const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//Schéma user
const userSchema = new mongoose.Schema({
    email:{ type: String, required: true, unique: true},
    password: {type: String, required: true}
})

userSchema.plugin(uniqueValidator);

//Export du modèle User
module.exports = mongoose.model('User', userSchema);