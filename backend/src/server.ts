import express,{Application,Request,Response,Router} from "express"
const app:Application= express()
app.get("/",(req:Request,res:Response)=>{
  res.send("Hello World")
})

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`)
})
