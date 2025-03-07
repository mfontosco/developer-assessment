import React,{useState,useEffect} from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import {LOGIN_USER_RESET} from '../../redux/constant/userConstants'
import {loginUserActions} from '../../redux/actions/userActions'
import { LockClosedIcon } from '@heroicons/react/solid'
import {AiOutlineEye} from 'react-icons/ai'
import  './loginForm.css'



const LoginForm = ()=>{
  const navigate =useNavigate()
    const dispatch =useDispatch()
    const [state,setState] =useState({
        email:"",
        password:""
    })
    const {success,userInfo} = useSelector((state)=>state.loginUser)
    console.log(userInfo);
    useEffect(()=>{
      if(success){
        dispatch({type:LOGIN_USER_RESET})
      }  
      
    },[dispatch,success])
    const changeHandler =(e)=>{
        const {name,value} = e.target
       
        setState({...state,[name]:value})
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        const {email,password} = state
        if(!email || !password){
            alert("all input fields must be field")
            return
        }
       
        dispatch(loginUserActions(email,password))
        setState({
            email:"",
            password:""
        })
        
        navigate(`/welcome/${userInfo.user.id}`)
        

    }
   
    return (
        <div className="bg-white round-md ">
<div className="bg-white round-md flex min-h-full items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
      
          <form className="w-80  space-y-6" action="#" method="POST" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className='mb-5 border-gray-300 border py-2 px-1 rounded'>
                <div className="">
                <label htmlFor="email-address" className="text-black">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={state.email}
                  onChange={changeHandler}
                  className="relative block w-full  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              
                /></div>
              </div>
              <div className="flex  justify-center py-2 px-1 rounded-sm items-center w-full border-gray-3 border-2">
               <div className="w-full p-0 ">
               <label htmlFor="password" className=" text-black">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                 value={state.password}
                 onChange={changeHandler}
                  className="relative block  w-72  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              
                />
               </div>
                <AiOutlineEye size={36} className="text-black mr-1 ml-auto"/>
              </div>
            </div>

            <div className="w-full flex-end">
              <div className="text-sm w-full">
                <a href="#" className="password font-medium password text-right  text-indigo-300 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-700 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
          <p className='login-with flex items-center justify-center font-bold text-xs'>Need to create an account?<Link to='/register'><span className="text-indigo-300 text-xs">Signup</span></Link></p>
        </div>
      </div>
        </div>
    )
}

export default LoginForm