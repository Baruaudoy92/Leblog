const mongoose = require('mongoose')
//Importer Mongoose//

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
//Le schema de la BD// 


const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
//Exporter UserModel//