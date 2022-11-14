import {Request,Response} from "express"
import { UserI } from "../types/UserI"
import User from '../models/User'
export const addUser=async(req:Request,res:Response)=>{
  const body= req.body
  console.log(body)
  const user:UserI=new User({...body})
  const newUser:UserI= await user.save()
  

  res.send(newUser)
}
export const getUser=async(req:Request,res:Response)=>{
  const allUsers:UserI[]= await User.find();
  res.status(200).json({allUsers})
}




