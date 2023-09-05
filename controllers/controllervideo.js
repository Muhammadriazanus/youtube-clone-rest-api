import Video from "../models/Video.js"
import {createError} from "../error.js"
import User from "../models/User.js"
export const addVideo = async(req,res)=>{

    const newVideo = new Video({userId : req.user.id,...req.body}) 
    try{
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    }catch(err){next(err)}
}
export const upDateVideo = async(req,res)=>{
    try{
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404,"Video not found "))
        if(req.user.id === video.userId){
            const upDateVideo = await Video.findByIdAndUpdate(req.params.id,{
                $set : req.body,
            },
            {new : true}
            )
            res.status(200).json(upDateVideo)
        }else{
            return next(createError(403,"you can only update your Video  "))
        }
        
    }catch(err){next(err)}
}

export const deleteVideo = async(req,res)=>{
    try{
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404,"Video not found "))
        if(req.user.id === video.userId){
             await Video.findByIdAndDelete(req.params.id)
            res.status(200).json("video has been deleted ")
        }else{
            return next(createError(403,"you delete can only update your Video  "))
        }
    }catch(err){next(err)}
}

export const getVideo = async(req,res)=>{
    try{
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    }catch(err){next(err)}
}
export const addview = async(req,res)=>{
        try{
            const video = await Video.findByIdAndUpdate(req.params.id,{
                $inc:{views:1}
            })
            res.status(200).json("the videos has been increased")
        }catch(err){next(err)}
    }

export const trend = async(req,res)=>{
    try{
        const videos = await Video.find().sort({views:-1})
        res.status(200).json(videos)
    }catch(err){next(err)}
}

export const sub = async(req,res,next)=>{
    try{
        const user = await User.findById(req.user. id)
        const subscribedChannels = user.subscribedUsers
        const list = await Promise.all(
            subscribedChannels.map((channelId)=>{
                return Video.find({userId : channelId})
            })
        )
        res.status(200).json(list)
    }catch(err){next(err)}
}

export const random = async(req,res)=>{
    try{
        const videos = await Video.aggregate([{$sample:{size:1}}])
        res.status(200).json(videos)
    }catch(err){next(err)}
}




