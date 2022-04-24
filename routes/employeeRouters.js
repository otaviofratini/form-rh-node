const express = require('express')
const Employee = require('../models/employee')

const router = express.Router()

const EmployeeController = require('../controllers/employeeController')

router.get("/", EmployeeController.showEmployees)
router.get("/create", EmployeeController.createEmployee)
router.post("/create", EmployeeController.createEmployeePost)
router.get('/:id', EmployeeController.getEmployee)
router.post('/remove/:id', EmployeeController.removeEmployee)
router.get('/edit/:id', EmployeeController.editEmployee)
router.post('/edit', EmployeeController.editEmployeePost)

module.exports = router