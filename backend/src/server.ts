import express,{Application,Request,Response} from "express"
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import userRouter from "./routes/UserRoutes"

const app:Application= express()

mongoose.connect('mongodb://localhost:27017/UMS')
app.use(bodyParser.json())
app.get("/",(req:Request,res:Response)=>{
  res.send("Hello World")
})

app.use('/users',userRouter)


const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`)
})
