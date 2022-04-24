const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn').run
const Employee = require('./models/employee')
const employeeRouters = require('./routes/employeeRouters')

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static(__dirname + '/public'))
app.use("/", employeeRouters)
app.listen(3000)