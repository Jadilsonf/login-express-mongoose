const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')
require("dotenv").config();

mongoose.connect(process.env.MONGO_CONNECTION_URL, console.log('Mongo Connected'))
    // {
    //     useNewURLParser: true,
    //     useUnifiedTopology: true
    // },
    // (error) => {
    //     if (error)
    //         console.log(error)
    //         else
    //         console.log('Mongo Connected')
    // })

app.use(cors())

//O middleware abaixo está para  './user/login' ou './user/register
app.use('/user', userRouter)

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("Servidor Online!")
})