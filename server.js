const express = require('express')
const app = express()
const router = require('./routes/index')
const methodOverride = require('method-override')
const passportlocal = require('passport-local')


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.use('/', router)



app.set('view engine', 'hbs')

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log('Server is on. Ready for Bars.')
})