const mongoose =require("mongoose");
const express = require("express");
const app = express();
const DATABASE = "mongodb://mymongo:27017/test";
mongoose.connect(DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("DB Connected");
})
.catch(()=>{
    console.log("Error in DB Connection");
});

app.get("/",(req,res)=>{
    res.send("<h1>OM NAMAHA SHIVAYA, OM NAMO NARAYANAYA</h1>");
});

app.listen(8000,()=>{
    console.log("App is listening at 8000");
});
