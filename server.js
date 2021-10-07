const express = require('express')
const expressHandlebars = require('express-Handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 8000


//configura o view engine handlebars
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
// importacao routeNotes
const routeNotes = require('./routes/notes.js');

app.get('/',(req,res)=> { res.render('home')
 console.log('passe')
})
app.use('/notes', routeNotes)

app.listen(port, ()=> console.log(`applicacao rodando na porta: ${port}`))
