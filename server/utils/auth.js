if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const session = require('express-session')

app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}))

app.get('/', (req, res) => {
    res.json(username)
});

app.post('/', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const securepassword = await bcrypt.hash(req.body.password, salt)
        const user = { username: req.body.username, password: securepassword }
        username.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
});
