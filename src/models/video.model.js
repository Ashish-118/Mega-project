import mongoose, { Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoSchema = new Schema(
    {

        videoFile: {
            type: String, //cloudinary url 
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, // will get from cloudinary itself 
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",

        }

    }, { timestamps: true })



videoSchema.plugin(mongooseAggregatePaginate)




export const Video = mongoose.model("Video", videoSchema)