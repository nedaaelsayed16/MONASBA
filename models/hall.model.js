import mongoose from 'mongoose';
const { Schema } = mongoose;

const HallSchema = new Schema (
    {
        userId:{
            type:String,
            required:true,
        },
        title:{
            type: String,
            required: true,
        },
        location:{
            type:String,
            required:true,
        },
        desc:{
            type:String,
            required:true,
        },
        totalStars:{
            type:Number,
            default:0,
        },
        starNumber:{
            type:Number,
            default:0,
        },
        cat:{      ///cat
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        cover:{
            type:String,
            required:true,
        },
        images: {
            type:[String],
            required:false,
        },
        shortTitle:{
            type:String,
            required:true,
        },
        shortDesc:{
            type:String,
            required:true,
        },
        features:{
            type:[String],
            required:false,
        },
 
    },
{
    timestamps:true
});

export default mongoose.model("Hall", HallSchema)