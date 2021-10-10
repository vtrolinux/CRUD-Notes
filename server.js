const express = require('express')
const expressHandlebars = require('express-Handlebars')
const bodyParser = require('body-parser')

const db = require('./db/connection')

const app = express()
const port = 8000


//configura o view engine handlebars
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
// importacao routeNotes
const routeNotes = require('./routes/notes.js');
//body parser, necessario para se trabalhar com forms
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=> { 
    
 //console.log('passe')

 // exibir notas
    (async()=>{
        const notes = (await db.getDB().db().collection('notes').find({}).toArray());
        res.render('home',{notes})
        console.log(notes)
    })().catch(err => console.log(err))
    

})
app.use('/notes', routeNotes)

// app.listen(port, ()=> console.log(`applicacao rodando na porta: ${port}`))
db.initDB((err, _DB) => {
    if(err){
        console.log(err) 
    } else {
        console.log('conectado')
    app.listen(port, ()=> console.log(`applicacao rodando na porta: ${port}`))
    }
})
