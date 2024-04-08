require('dotenv').config()
const mongoose = require('mongoose');
// const URI="mongodb://127.0.0.1:27017/mern_admin";
const URI=process.env.MONGODB_URI;   //it is used to add security to private data
const connectDb=async () => {
    try{
await mongoose.connect(URI);
console.log("Connected to MongoDB");
    }
    catch (err) {
console.error("database connection failed");
process.exit(0);
    }
}
module.exports = connectDb;




