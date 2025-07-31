import express from "express"
import dotenv from "dotenv"
dotenv.config()
//comment
const app=express()
app.use(express.json())
export default app