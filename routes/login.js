const express=require('express')
const router=express.Router();
const path=require('path')
const bodyParser=require('body-parser')

router.use(express.static(path.join(__dirname,'../public')))

router.use(bodyParser.urlencoded({extended:false}))
router.get('/',(request,response)=>{
    
    response.sendFile(path.join(__dirname,"../views/index.html"))
})
router.post('/',(req,res)=>{
    console.log(req.body);
    res.redirect('/user')
})

router.get('/user',(req,res)=>{
    res.send('<h1>this is user inerface</h1>')
})

module.exports=router;