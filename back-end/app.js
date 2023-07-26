const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors())

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("Servidor Online!")
})


// jadilsonfilho171292
// p0VblzhpNI9q2Bsj
// TESTANDO