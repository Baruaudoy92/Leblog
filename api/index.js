const cors = require("cors");
const express = require("express")
const mongoose = require("mongoose")
const UserModel = require('./models/User')

//impoter les package //

const app = express()
app.use(cors())
app.use(express.json())

//initialiser//

//connecter a BD// 
mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get('/', (req, res) => {
    UserModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
//trouver un utilisateur//

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
//trouver un user par son ID dans la BD//

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, 
        {name: req.body.name, 
        email: req.body.email, 
        password: req.body.password})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
//Trouver le user par son ID et Update information recu du FN dans le BN//

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})
//Trouver le user par son ID et supprimer les information par ID dans le BN//

app.post("/register", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
//Utiliser le Sechma *UserModel* pour crée un nouvelle utlisateur dans notre BD//

app.listen(3000, () => {
    console.log("server is runing")
} )

// Ecouter le port 3000//
