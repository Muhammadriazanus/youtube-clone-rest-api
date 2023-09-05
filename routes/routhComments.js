import express from "express";

import { comments } from "../controllers/controllercomments.js";

const userCommmentsRoutes = express.Router()

userCommmentsRoutes.get("/comments",comments)

export default userCommmentsRoutes
