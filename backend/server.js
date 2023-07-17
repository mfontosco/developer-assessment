import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UserRoute from './routes/userRoutes.js'
import { connectDB } from './configs/db.js'


const app = express()

app.use(express.json({limit:"50mb"}))
app.use(
    express.urlencoded({ extended: true })
);
// app.use(urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cors())

app.use("/api/v1/users",UserRoute)






const start = async(port)=>{
    try{
        const conn = await connectDB()
        app.listen(port,(err)=>{
            if(err){
                throw err
            }
            console.log(`server is running on port ${port}`)
        })
        console.log(`database is connected to ${conn.connection.host}`)
    }catch(err){
        console.log(err)
    }
   
}

const port = 4000;
start(port)

