import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js"
import conversationRoute from "./routes/conversation.js"
import hallRoute from "./routes/hall.js"
import messageRoute from "./routes/message.js"
import reservationRoute from './routes/reservation.js'
import reviewRoute from "./routes/review.js"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());////////////

const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Conncted To MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors());
//app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/Conversations", conversationRoute);
app.use("/api/Halls", hallRoute);
app.use("/api/Messages", messageRoute);
app.use("/api/Reservation", reservationRoute);
app.use("/api/Reviews", reviewRoute);

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || " Something went wrong! ";

  return res.status(errorStatus).send(errorMessage);
})

app.listen(5500, () =>{
    connect();
    console.log("Backend Server Is Running!");
})