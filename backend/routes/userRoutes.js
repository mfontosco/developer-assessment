import express from 'express'
import { registerUser,loginUser,getSingleUser } from '../controller/userController.js'
const router = express.Router()


// router.route.get("/",getAllUsers)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/:id').get(getSingleUser)



export default router