const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    register: async function (req,res) {

        const selectedUser = await User.findOne({email:req.body.email})
        if (selectedUser) return res.status(400).send('Email Already exists!')

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })
        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch(error){
            res.status(400).send(error)
        }
    },

    
    login: async function (req, res) {
        const selectedUser = await User.findOne({email:req.body.email})
        if (!selectedUser) return res.status(400).send('Email or Password incorrect')

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
        if(!passwordAndUserMatch) return res.status(400).send('Email or Password incorrect')

        const token = jwt.sign({_id: selectedUser._id}, process.env.TOKEN_SECRET)

        // no header envia primeira uma chave depois um valor, no caso o token
        res.header('authorization-token', token)
        res.send("User Logged")
    }
}

//Eram duas funções separadas, ficaram juntas como um objeto

module.exports = userController