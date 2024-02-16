const express=require('express')
const router=express.Router();

router.get('/bhanu',(req,res)=>{
    res.send('<h1>this is bhanu page</h1>')
})

router.get('/prasad',(req,res)=>{
    res.send({
        id:1,
        name:"bhanuprasad"
    })
})

module.exports=router;