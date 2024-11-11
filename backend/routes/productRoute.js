const express = require('express');
const router=express.Router()
const {getAll,getOne,updateOne,deleteOne,createProduct} =require('../controller/productController')


router.route('/').get(getAll).post(createProduct)
router.route('/:id').patch(updateOne).delete(deleteOne)


module.exports= router