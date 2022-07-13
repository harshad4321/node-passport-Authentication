const express = require('express')
const router = express.Router()


//login page

router.get('/login',(req,res)=>{
    
    res.send('hello')
})
module.exports=router;
