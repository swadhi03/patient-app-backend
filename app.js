const express = require("express")
const cors= require("cors")
const mongoose = require("mongoose")
const json = require("jsonwebtoken")
const bcrypt= require("bcrypt")
const LoginModel = require("./models/Admin")

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/patientdb?retryWrites=true&w=majority&appName=Cluster0")

const app = express()
app.use(cors())
app.use(express.json())


//api for Admin Sign up
app.post("/adminsignin", (req,res)=>{
    let input=req.body
    let hashedPassword= bcrypt.hashSync(input.password,10)
    //console.log(hashedPassword)
    input.password=hashedPassword
    console.log(input)
    let result = new LoginModel(input)
    result.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
})