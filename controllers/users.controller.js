const User=require('../models/user');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const getAllUsers= async (req,res)=>{
    try{
        const users= await User.find({},{"__v":false,"password":false});
        if(!users){
            res.status(404).json({status:'FAIL',data:null,code:'404'});
            console.log("done")
        }else{
            res.status(200).json({status:'SUCCESS',data:{users}})
        }
    }catch(err){
        res.status(400).json({status:'ERROR',message:err,code:'400'});
    }
    
}

const reqister=async (req,res)=>{
    try{
        const {firstName,lastName,email,password}=req.body;
        const user= await User.findOne({email:email});
        if(!user){
            //hashing the password
            req.body.password=await bcrypt.hash(req.body.password,10);

            const newUser= new User(req.body);
            //genrate token
            const token= await jwt.sign({email: newUser.email, id:newUser._id},"d49becfb8eb4464da54598dee86e8543ae54f71cfb4da6c16e02f47fd3103019",{expiresIn:'1m'});
            newUser.token=token;
            await newUser.save();
            res.status(201).json({status:'SUCCESS',data:newUser});
        }else{
            res.status(400).json({status:'FAILD',message:'User Already Exists',code:'400',data:null})
        }
        
    }catch(err){
        res.status(400).json({status:'ERROR',message:err.message,code:'400'});
    }
}

const login= async(req,res)=>{
    const {password,email}=req.body;
    try{
        if(!password&&!email){
            res.status(400).json({status:'FAILD',message:'password and email are required',code:'400',data:null})
        }else{
            const user=await User.findOne({email:email});
            if(user){
                const comparePass=await bcrypt.compare(password,user.password);
                if(user && comparePass){
                    const token= await jwt.sign({email: user.email, id:user._id},"d49becfb8eb4464da54598dee86e8543ae54f71cfb4da6c16e02f47fd3103019",{expiresIn:'1m'});
                    user.token=token;
                    res.status(200).json({status:'SUCCESS',message:`welocme ${user.firstName}`,token:user.token});
                }else{
                    res.status(400).json({status:'FAILD',message:'invaild password',code:'400',data:null})
                }
    
            }else{
                res.status(404).json({status:'FAILD',message:'User not Exists please register first',code:'404',data:null})
            }
        }
        
    }catch(err){
        res.status(400).json({status:'ERROR',message:err.message,code:'400'});
    }

}

module.exports={
    getAllUsers,
    reqister,
    login
}