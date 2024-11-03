const Employee = require('../models/Employee');

const createEmployee = async (req, res) => {
    try {
        const { name, email, phone, city } = req.body;

        if (!name || !email || !city) {
            return res.status(400).json({ message: 'Name, email, and city are required.' });
        }

        const employee = new Emq1ployee({ name, email, phone, city });
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        console.error("There is an error:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { createEmployee };



/*const Employee =require('../models/Employee')
const createEmployee = async(req,res)=>{
    try{
        const{name,email,phone,city}=req.body
        const employee = new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save()
        res.status(201).json(employee)
    }catch(error){
        console.log("there is an error : ", error)
        res.status(500).json({message: 'Server error'})
    }
}
module.exports={createEmployee}*/