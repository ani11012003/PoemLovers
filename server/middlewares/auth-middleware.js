const jwt=require('jsonwebtoken');
const User=require("../models/user-model")
const authMiddleware=async (req,res,next)=>{
   const token=req.header("Authorization");
   try {
      // token form bearer <token> we need to remove the prefix as it is not needed
   const jwtToken=token.replace("Bearer",'').trim();
   console.log("token from auth middleware",jwtToken);
    const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
    // sharing user data except the password
    const userData=await User.findOne({email:isVerified.email}).select({password:0}); 
    console.log(userData);
    req.user=userData;
    req.token=token;
    req.UserID=userData._id;
    next();
   } catch (error) {
    return res.status(401).json({msg:"unauthorized HTTP"});
   }
   
}
module.exports=authMiddleware;