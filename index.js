const express=require("express");
const courseRouter=require("./routes/courses.route")
const mongoose=require('mongoose');
const uri="mongodb+srv://mustafa:helloworld@nodejs.qoxsb5e.mongodb.net/codeZone?retryWrites=true&w=majority";
mongoose.connect(uri).then(()=>{
    console.log("mongodb server started")
})
const app=express();
app.use(express.json());
app.use('/api/courses',courseRouter);

app.listen(5000,()=>{
    console.log("running...");
})