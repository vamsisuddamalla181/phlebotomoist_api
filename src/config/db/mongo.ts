import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const MONGO_URL=process.env.MONGO_URL
if (!MONGO_URL) {
  throw new Error("MONGO_URL is not defined in environment variables");
}
export const database=mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("server is connected to data base")
})
.catch((error)=>{
    console.log("serer is failed to connect to database")
})