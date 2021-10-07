const express = require('express')
const expressHandlebars = require('express-Handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 8000


//configura o view engine handlebars
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.use(express.static('public'));


app.get('/',(req,res)=> { res.render('home')
 console.log('passe')
})

app.listen(port, ()=> console.log(`applicacao rodando na porta: ${port}`))
