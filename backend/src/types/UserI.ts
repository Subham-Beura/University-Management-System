import {Document} from 'mongoose'
export interface UserI extends Document{
  name:String
  password:String
  yearOfAdm:Number
  branch:"CSE"|"IT"|'CE'
  isAdmin:Boolean
}
