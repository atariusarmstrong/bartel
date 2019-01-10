const express = require('express')
const app = express()
const router = require('./routes/index')
const methodOverride = require('method-override')
const passportlocal = require('passport-local')
const session = require('express-session')


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.use('/', router)


// app.set('trust proxy', 1)
// app.use(session({
//     secret: 'There are drinks to be had.',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }))

// if (app.get('env') === 'production') {
//     app.set('tr')
// }

// passportlocal.use(new LocalStrategy)(
//     function(username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) {return done(err)}
//             if (!user) { return done(null, false)}
//             if (!user.verifyPassword(password)) { return done(null, false)}
//             return done(null, user)
//         })
//     }
// )


app.set('view engine', 'hbs')

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log('Server is on. Ready for Bars.')
})