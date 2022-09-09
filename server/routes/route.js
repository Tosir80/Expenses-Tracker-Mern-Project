const express =require('express')
const { createCategories, createTransaction, getTransaction, deleteTransaction, getCate, getLabels } = require('../controllers/controllers')
const router=express.Router()



router.post('/',createCategories)
router.get('/categories',getCate)
//transction
router.route('/transaction')
.post(createTransaction)
.get(getTransaction)

router.delete('/transaction/:id', deleteTransaction)
router.get('/labels', getLabels)





module.exports=router