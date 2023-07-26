const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require('./routes/userRouter')
require("dotenv").config();

app.use(cors())

//O middleware abaixo está para  './user/login' ou './user/register
app.use('/user', userRouter)

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("Servidor Online!")
})


// jadilsonfilho171292
// p0VblzhpNI9q2Bsj
// TESTANDO