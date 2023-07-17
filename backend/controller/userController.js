import User from '../model/userModel.js'
import generateToken from '../utils/generateToken.js'

const registerUser =async(req,res)=>{
    const {name,email,password} = req.body
   
   try{
    const userExist = await User.find({email:email})
if(userExist.length > 0){
    throw Error("User already exist,pls login")
}
    const user = await User.create({
        name,
        email,
        password
    })
    res.json({
        status:"success",
        user:{
            id:user._id,
            email,
            name
        }
    })
   }catch(err){
console.log(err)
res.json({
    status:"failed",
    error:err.message
})
   }
}






const loginUser = async(req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({email:email})
  console.log(user)
        if(!user){
            throw new Error("User does not exist,please register")
        }
        if(user && (await user.passwordMatched(password))){
            console.log(user._id)
            res.status(200).json({
                status:"success",
                user:{
                    id:user._id,
                    fullName:user.fullName,
                    email:user.email,
                    role:user.role,
                    author:user.fullName,
                    token:await generateToken(user._id)
                }
            })
        }else{
            res.status(402)
            throw new Error("Incorrect password")
        }
    }catch(err){
        console.log(err)
        res.status(400).json({
            status:"failed",
            error:err.message,
        })
    }

}
const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById({ _id: id });
      res.status(200).json({
        status: "success",
        user,
      });
    } catch (err) {
      console.log(err);
      res.status(401).json({
        status: "failed",
        error: err.message,
      });
    }
  };
export {registerUser,loginUser,getSingleUser}