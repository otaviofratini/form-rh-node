const conn = require('../db/conn')
const { ObjectId } = require('mongodb')
class Employee {
    constructor (name, email, birth, salary, role) {
        this.name = name
        this.email = email
        this.birth = birth
        this.salary = salary
        this.role = role
    }
    save() {
        const employee = conn.db().collection('employee').insertOne({
            name : this.name,
            email: this.email,
            birth : this.birth,
            salary : this.salary,
            role : this.role
        })
        return employee
    }
    static getEmployees() {
        const employees = conn.db().collection('employee').find().toArray()

        return employees
    }
    static async removeEmployee(id) {
        await conn
        .db().collection('employee')
        .deleteOne({_id : ObjectId(id.toString())})

        return
    } 
    updateEmployee(id){
        conn.db().collection('employee')
        .updateOne({_id : ObjectId(id)}, {$set: this})

        return
    }
    static async getEmployeeById(id) {
        const employee = await conn
        .db().collection('employee')
        .findOne({_id : ObjectId(id.toString())})
        
        return employee
    }
}

module.exports = Employee