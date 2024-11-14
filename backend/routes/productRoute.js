const express = require('express');
const router=express.Router()
const {getAllProducts,getOneProduct,updateProduct,deleteProduct,createProduct} =require('../controller/productController')
const validateToken =require('../middleware/authMiddleware')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getOneProduct).patch(updateProduct).delete(deleteProduct)


module.exports= router