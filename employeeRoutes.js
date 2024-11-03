const express = require('express');
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// POST request to add an employee
router.post('/addemp', employeeController.createEmployee);

module.exports = router;


/*const express = require('express')
const router = express.Router()
const employeeController = require("../controllers/employeeController")
const Employee = require("../models/Employee")

//get, post...
router.post('/addemp',employeeController.createEmployee)
module.exports=router // routers exporting becaaause evtng present in router line 2*/