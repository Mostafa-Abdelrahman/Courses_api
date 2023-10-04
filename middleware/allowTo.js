module.exports=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.currentUser.role)){
            console.log("done");
            return next(new Error('something happened'));
            //there is erroe here with next message 
        }
        next(); 
    }
}