import express from "express";


import { addVideo,upDateVideo,deleteVideo,getVideo, } from "../controllers/controllervideo.js"
import { verifytoken } from "../verifytoken.js";

const userVideoRoutes = express.Router()

userVideoRoutes.post("/",verifytoken,addVideo)
userVideoRoutes.put("/:id",verifytoken,upDateVideo)
userVideoRoutes.delete("/:id",verifytoken,deleteVideo)
userVideoRoutes.get("/find/:id",verifytoken,getVideo)
// userVideoRoutes.get("/view/:id",verifytoken,addview)
// userVideoRoutes.get("/",verifytoken,trend)
// userVideoRoutes.get("/random",verifytoken,random)
// userVideoRoutes.get("/sub",verifytoken,sub)

export default userVideoRoutes
