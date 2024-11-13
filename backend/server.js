const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 3000

const mongoose = require('mongoose');

const productrouter = require('./routes/productRoute')
const authrouter = require('./routes/authRoute')

mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        console.log("Db connected")

    }).catch((err) => {
        console.log(err)
    });
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/product', productrouter)
app.use('/auth', authrouter)

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`)
})