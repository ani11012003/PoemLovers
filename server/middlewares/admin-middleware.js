 const adminMiddleware=async (req,res,next) => {
    try{
          const admin=req.user.isAdmin;
          if(!admin){
            return res.status(403).json({message:"Access Denied. User is not a admin"});
          }
          
          next();
    }
    catch(error){
        next(error);
    }
}
module.exports=adminMiddleware;