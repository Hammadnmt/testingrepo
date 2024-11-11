const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
require('dotenv').config()
const userrouter = require('./routes/userRoute')
const authrouter = require('./routes/authRoute')

mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        console.log("Db connected")

    }).catch((err) => {
        console.log(err)
    });

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userrouter)
app.use('/auth', authrouter)

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`)
})