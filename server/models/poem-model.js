const {Schema,model,Mongoose}=require("mongoose");
const poemSchema=new Schema({
title:{type:String,required:true},
author:{type:String,required:true},
content:{type:String,required:true},
});
const Poem=new model("Poem",poemSchema);
module.exports=Poem;