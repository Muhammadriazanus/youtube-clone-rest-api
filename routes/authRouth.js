import express from "express";

import { signup,signin } from "../controllers/controllerAuth.js";

const userAuth = express.Router()

// create a user
userAuth.post("/signup", signup)
// sign  in
userAuth.post("/signin",signin)
// google Authentication
userAuth.post("/google")
export default userAuth
