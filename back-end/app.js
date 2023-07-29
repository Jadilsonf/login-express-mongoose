const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')
require("dotenv").config();

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  })

app.use(cors())

//O middleware abaixo está para  './user/login' ou './user/register
app.use('/user', express.json(), userRouter)

app.listen(process.env.PORT, () => {
    console.log("Servidor Online!")
})