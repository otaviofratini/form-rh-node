const Employee = require('../models/employee')

module.exports = class EmployeeController {
    static async showEmployees(req, res){
        const employees = await Employee.getEmployees()

        res.render("employees/all", { employees })
    }

    static createEmployee(req, res){
        res.render('employees/create')
    }

    static createEmployeePost(req, res){
        const name = req.body.name
        const email = req.body.email
        const birth = req.body.birth
        const salary = req.body.salary
        const role = req.body.role
        const employee = new Employee(name, email, birth, salary, role)

        employee.save()

        res.redirect('/')
    }

    static async editEmployee(req,res) {
        const id = req.params.id
        const employee = await Employee.getEmployeeById(id)
        res.render('employees/edit', {employee})
    }

    static removeEmployee(req,res) {
        const id = req.params.id
        Employee.removeEmployee(id)

        res.redirect('/')
    }

    static async editEmployeePost(req,res){
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const birth = req.body.birth
        const salary = req.body.salary
        const role = req.body.role

        const employee = new Employee(name, email, birth, salary, role)

        await employee.updateEmployee(id)

        res.redirect('/')
    }
    static async getEmployee (req,res) {
        const id = req.params.id

        const employee = await Employee.getEmployeeById(id)

        res.render('employees/employee', {employee})
    }
}