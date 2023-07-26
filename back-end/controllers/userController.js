const userController = {
    register: function (req,res) {
        console.log('register')
        res.send('<h1>Register</h1>')
    },
    login: function (req, res) {
        console.log('login')
        res.send('<h1>Login</h1>')
    }
}

//Eram duas funções separadas, ficaram juntas como um objeto

module.exports = userController