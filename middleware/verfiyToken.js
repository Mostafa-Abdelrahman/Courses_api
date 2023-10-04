const jwt=require("jsonwebtoken");
const { CurrencyCodes } = require("validator/lib/isiso4217");
const verfiyToken=(req,res,next)=>{
    const authHeader=req.headers['Authorization']||req.headers['authorization'];
    if(!authHeader){
        return res.status(401).json({status:'ERROR',mesage:"Token is required",code:"401"})
    }
    const token=authHeader.split(' ')[1];
    try{
       const current = jwt.verify(token,process.env.jwt_secret_key);
        req.currentUser=current;
        next();
    }catch(err){
        return res.status(401).json({status:'ERROR',mesage:"invalid Token",code:"401"})
    }
    
}

module.exports=verfiyToken;