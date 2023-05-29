const express=require('express')
const router=express.Router()

const EmployeeController=require('../controllers/EmployeeController')

router.get('/', EmployeeController.index)
router.post('./show', EmployeeController.show)
router.post('./show', EmployeeController.store)
router.post('./show', EmployeeController.update)
router.post('./show', EmployeeController.destroy)

module.exports=router