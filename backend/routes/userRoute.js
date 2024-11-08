const express = require('express');
const router=express.Router()
const {getAll,getOne,updateOne,deleteOne,createUser} =require('../controller/userController')


router.route('/').get(getAll).post(createUser)
router.route('/:id').patch(updateOne).delete(deleteOne)


module.exports= router