import {Router,Request,Response} from 'express'
import {addUser,getUser} from '../controllers/UserController'


const router:Router=Router();

router.get('/',getUser)
router.post('/',addUser)


export default router
