const express = require("express");
const app =express();
app.use(express.json());

const cors =require("cors");
app.use(cors());
const { addUser ,selectAllUser}=require("./user");

app.get("/msg",async(req,res)=>{
    const list= await selectAllUser();
    res.json(list);
    console.log("get method");
});

app.post("/add-msg",async (req,res)=>{
    const user =req.body;
    await addUser(user);
    res.json({message:"msg added in databse"});

})

app.listen(5000,()=>console.log("server started"));