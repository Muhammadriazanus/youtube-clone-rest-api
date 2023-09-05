import { createError } from "../error.js"
import User from "../models/User.js"

export const upDate = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const upDateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                }, { new: true })
            res.status(200).json(upDateUser)
        } catch (err) {
            next(err)
        }

    } else {
        return next(createError(403, "you can update only your account!"))
    }
}



// delete
export const delteUser = async(req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
             await User.findByIdAndDelete(
                req.params.id,)
            res.status(200).json("user has been delete")
        } catch (err) {
            next(err)
        }

    } else {
        return next(createError(403, "you can delete only your account!"))
    }
}
// getUser

export const getUser = async(req, res, next) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}
// subscribe
export const subscribe = async(req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $push:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1},
        })
        res.status(200).json("subscription successfully")
    }catch(err){
        next(err)
    }
}
export const unsubscribe =async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1},
        })
        res.status(200).json("unsubscription successfully")
    }catch(err){
        next(err)
    }
}
export const like = (req, res, next) => {
    try{
    }catch(err){
        next(err)
    }
}
export const dislike = (req, res, next) => {
    try{
    }catch(err){
        next(err)
    }
}


