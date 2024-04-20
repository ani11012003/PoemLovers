const express = require('express');
const app=express();
const cors=require('cors');
const authRoute=require("./router/auth-router")
const contactRoute=require("./router/contact-router")
const serviceRoute=require("./router/service-router")
const adminRoute=require("./router/admin-router");
const connectDb=require("./utils/db.js")
const errorMiddleware=require("./middlewares/error-middleware.js");
const poemRoute=require("./router/poem-router");
const corsOptions={
origin:"http://127.0.0.1:5173",
methods:"GET,POST,PUT,DELETE,PATCH",
credentials:true
};
app.use(cors(corsOptions));
app.use(express.json());// json middleware
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
//admin route
app.use("/api/admin",adminRoute);
app.use("/api/poems",poemRoute);
app.use(errorMiddleware);
const PORT=5000;
connectDb().then(()=>{
    app.listen(PORT,() => {
        console.log(`The server is running at ${PORT}`);
        });
});




