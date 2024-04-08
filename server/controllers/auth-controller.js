const User=require("../models/user-model")
const bcrypt=require("bcryptjs")
/*********************************************************************************************************/

//Home Logic
/*********************************************************************************************************/
const home=async (req, res) => {
    try{
        res.status(200).send("Welcome to the home page of app! using router");
    }
    catch(error){
        console.log(error);
    }
}
/*********************************************************************************************************/
//Registration Logic
/*********************************************************************************************************/
const register=async (req,res) =>{
    try{
        console.log(req.body);
        const {username,email,phone,password}=req.body;
        const UserExist=await User.findOne({email})
        if(UserExist){
            return res.status(400).json({message:"Email already exists"});
        }
        //hashing the passwords using bcryptjs
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password, saltRound);

        const userCreated=await User.create({username,email,phone,password});
        res.status(201).json({message: "Registration Successful",token: await userCreated.generateToken(),userId:userCreated._id.toString()});
    }
    catch(error){
        console.log(error);
    }
}
/*********************************************************************************************************/
//Login Logic
/*********************************************************************************************************/
const login = async (req,res)=>{
try {
    const {email,password} = req.body;
    const userExist= await User.findOne({email});
    if(!userExist){
        return res.status(400).json({message: "Invalid Credentials"});
    }
    const user = await bcrypt.compare(password, userExist.password);
    if(user){
        res.status(200).json({message: "Login Successful",token: await userExist.generateToken(),userId:userExist._id.toString()});
    }
    else{
        res.status(401).json({message: "Invalid Email or Password"});
    }
} catch (error) {
    res.status(500).json("internal server error");
}
}
/*
 to send data of user :user logic
*/
const user=async(req, res) => {
    try {
        const userData=req.user;
        console.log(userData);
        return await res.status(200).json({userData});
    } catch (error) {
        console.log("error from the user route"+error);
    }
}
module.exports={home,register,login,user}