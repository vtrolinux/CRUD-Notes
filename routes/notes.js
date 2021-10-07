const Router = require('express').Router;
const router = Router()

router.get('/',(req,res)=>{ res.render('../views/notes/create')    })

module.exports = router