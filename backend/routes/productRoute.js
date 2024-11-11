const express = require('express');
const router=express.Router()
const {getAll,getOne,updateOne,deleteOne,createProduct} =require('../controller/productController')
const validateToken =require('../middleware/authMiddleware')

router.route('/').get(getAll).post(validateToken,createProduct)
router.route('/:id').patch(validateToken,updateOne).delete(validateToken,deleteOne)


module.exports= router