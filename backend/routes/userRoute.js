const express = require('express');
const router=express.Router()
const {getAll,getOne,updateOne,deleteOne,createUser} =require('../controller/userController')


router.route('/').get(getAll).post(createUser)


module.exports= router