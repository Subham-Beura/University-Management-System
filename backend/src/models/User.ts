import {model,Schema} from "mongoose"
import {UserI} from '../types/UserI'
const userSchema: Schema=new Schema(
  {
    name:{
      type: String,
      required: true,
    },
    password:{
      type: String,
      required:true,
    },
    yearOfAdm:{
      type: Number,
      required:true,
    },
    branch:{
      type:"CSE"||"CE"||"IT",
      required:true,
    },
    isAdmin:{
      type:Boolean,
      default:false,
    }
  },
  {timestamps:true}
)
export default model<UserI>('user',userSchema)


