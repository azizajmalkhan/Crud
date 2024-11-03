const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
dotEnv.config();
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.error("MongoDB Connection Error:", error);
});

// Use employee routes
app.use('/employee', employeeRoutes);

const PORT = 6000;
app.listen(PORT, () => {
    console.log("Server Started and running on port " + PORT);
});


/*const express = require("express")
const dotEnv = require("dotenv")
const { MongoClient } =require("mongodb")
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')

const app = express()
dotEnv.config()
app.use(bodyParser.json())
MongoClient.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Mongo Db Connected Successfulllly ")
})
.catch((error)=>{
    console.log("Error",error)
})
app.use('/employee',employeeRoutes)
const PORT = 6000

app.listen(PORT, ()=>{
    console.log("Server Started and runingn ")
})*/