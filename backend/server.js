const express=require('express')
const app=express()
const PORT= process.env.PORT || 3000
const mongoose = require('mongoose');
require('dotenv').config()
const userrouter =require('./routes/userRoute')

mongoose.connect(process.env.MONGO_URI);

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user',userrouter)

app.listen(PORT,()=>{
    console.log(`Server on http://localhost:${PORT}`)
})