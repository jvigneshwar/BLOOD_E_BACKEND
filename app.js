const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Models/userSchema");

mongoose.connect("mongodb+srv://jv8110909191:ASas12.,@cluster0.m8dnfoi.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(4000,()=>{
       console.log("connected");
    })
})
.catch(()=>{console.log("error");})

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register',async (req,res)=>{
    try{
        const user = await User.create({
            name : req.body.name,
            bloodGroup : req.body.bloodGroup, 
            city : req.body.city,
            mobileNo : req.body.mobileNo
        })
        res.json({status:"ok"});
    }
    catch(err){
        res.json({status:"failed"})
    }
})

app.get('/showDetails',async (req,res)=>{
    try{
        const data = await User.find({bloodGroup:req.headers.bloodgroup , city:req.headers.city},{_id:0,__v:0})

            res.json(data);
    }

    catch(err){
    }
})




