import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReservationSchema = new Schema (
    {
       hallId: {
        type: String,
        required: true,
       },
       img: {
        type: String,
        required: false,
       },
       location: {
        type: String,
        required: true,
       },
       isCompleted: {
        type: String,
        default:false
       },
       payment_intent: {
        type: String,
        required: true,
       },
    //    data: {
    //     type: String,
    //     required: true,
    //    },
      
    },
{
    timestamps:true
});

export default mongoose.model("Reservation", ReservationSchema)