const Router = require('express').Router;
const router = Router()
const db = require('../db/connection')
const {ObjectId} = require('mongodb') // ver depois

router.get('/',(req,res)=>{ res.render('../views/notes/create') })
// api insert nota
router.post('/',(req,res)=> { 
    console.log(req)

    const data = req.body
    const title =  data.title
    const description = data.description

    db.getDB()
        .db()
        .collection('notes')
        .insertOne({title:title, description:description})
    res.redirect(301,'/') //mudar
} )

module.exports = router