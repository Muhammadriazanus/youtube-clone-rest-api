import express from "express";
import {delteUser, dislike, getUser, like, subscribe, unsubscribe, upDate  } from "../controllers/controlleruser.js";
import {verifytoken} from "../verifytoken.js"
const userRoutes = express.Router()
// update
userRoutes.put("/:id", verifytoken ,upDate)
// delete
userRoutes.delete("/:id",verifytoken, delteUser)

// get a user

userRoutes.get("/find/:id",verifytoken,getUser)
// subscribe a user
userRoutes.put("/sub/:id",verifytoken,subscribe)
// unsubscribe
userRoutes.put("/sub/:id",verifytoken,unsubscribe)
// like a video
userRoutes.put("/likes/:videId",verifytoken,like)
// dislike a video,verifytoken
userRoutes.put("/dislikes/:videId",verifytoken,dislike)





export default userRoutes
