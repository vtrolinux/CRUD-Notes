const Router = require('express').Router;
const router = Router()
const db = require('../db/connection')
const {ObjectId} = require('mongodb') // ver depois

router.get('/',(req,res)=>{ res.render('../views/notes/create') })
// create
router.post('/',(req,res)=> { 
    //console.log(req)

    const data = req.body
    const title =  data.title
    const description = data.description

    db.getDB()
        .db()
        .collection('notes')
        .insertOne({title:title, description:description})
    res.redirect(301,'/') 
} )
//read
router.get('/:id',async function(req,res){
    console.log('params id: '+ req.params.id)
    const idFind = new ObjectId(req.params.id)
    const note = await db.getDB().db().collection('notes').findOne({_id: idFind})

    res.render('notes/detail', {note}) //exibição da note a ser editada
})
//update
router.get('/edit/:id', async function(req,res){
    const idUpdate = new ObjectId(req.params.id)
    console.log(idUpdate)
    const noteUpdate = await db.getDB().db().collection('notes').findOne({_id: idUpdate})
    res.render('notes/edit', {noteUpdate})
})
router.post('/update',async function(req,res){
    const dataID = new ObjectId(req.body.id)
  //console.log('update: '+req.body.description)
    db.getDB().db().collection('notes').updateOne({_id: dataID},{$set: {title:req.body.title, description: req.body.description}})
    res.redirect(301,'/')
})
//delete
router.post('/delete',(req,res)=>{
    const data = req.body
        console.log(data.id)
    const deleteID = new ObjectId(data.id) // torna o dado compativel com o banco
        console.log(deleteID)
        db.getDB().db().collection('notes').deleteOne({_id: deleteID})
        res.redirect(301,'/')
})

module.exports = router