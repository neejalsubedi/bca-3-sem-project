const { application } = require('express')
const express =require('express')
const mongoose= require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bcacrud')

let Students =mongoose.model('Students',{
    name: String,
    email:String,
    address:String,
})

const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    const sData=await Students.find({})
    return res.status(200).send(sData);
})

app.post('/',async(req,res)=>{
   const sR=new Students(req.body);
   await sR.save();
   return res.status(201).send(sR);
})



app.listen(3000,()=>{
    console.log("server is running on port 3000");
})