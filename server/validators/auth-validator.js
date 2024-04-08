const {z}=require('zod')
const signinSchema=z.object({
    email:z
    .string({required_error: "Email is Required"})
    .trim()
    .email({message: "Invalid Email Address"})
    .min(5,{message:"Email must be at least 5 characters"})
    .max(255,{message:"Email must be at most 255 characters"}),
    password:z
    .string({required_error: "Password is Required"})
    .trim()
    .min(6,{message:"Password must be at least 6 characters"})
    .max(1024,{message:"Password must be at most 1024 characters"}),
    
    });
const signupSchema=signinSchema.extend({
username:z
.string({required_error: "Name is Required"})
.trim()
.min(3,{message:"Name must be at least 3 characters"})
.max(255,{message:"Name must be at most 255 characters"}),

phone:z
.string({required_error: "Phone is Required"})
.trim()
.min(10,{message:"Phone must be at least 10 characters"})
.max(20,{message:"Phone must be at most 20 characters"}),

});
module.exports={signupSchema,signinSchema};