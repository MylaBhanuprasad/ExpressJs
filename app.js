const express=require('express')
const app=express()
const path=require('path')

const loginRouter=require('./routes/login')
const usersRouter=require('./routes/users')
app.use(express.static(path.join(__dirname,'../public')))
app.use('/',loginRouter)
app.use('/user',usersRouter)

app.listen(3000,()=>{
    console.log("application is runnng")
})