import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/routhuser.js";
import userCommmentsRoutes from "./routes/routhComments.js";
import userVideoRoutes from "./routes/routhvideo.js";
import userAuth from "./routes/authRouth.js";
dotenv.config()
const app = express()
app.use(express.json())

const port = 9000;
const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        throw err
    })
}
app.use(cookieParser())
app.use("/api/users",userRoutes)
app.use("/api/comments",userCommmentsRoutes)
app.use("/api/videos",userVideoRoutes)
app.use("/api/auth",userAuth)
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Some one want wrong!";
    return res.status(status).json({
        success : false,
        status : status,
        message : message
    })

})
app.listen(port, () => {
    connect()
    console.log("connected!");
})
