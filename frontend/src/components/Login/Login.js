import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import {FcGoogle} from 'react-icons/fc'
import LoginForm from '../LoginForm/LoginForm'
import {FiArrowRight} from 'react-icons/fi'


const Login = () => {
  return (

    <div className="image-container " >
      <h1 className='text-3xl font-black py-14 px-12'>Doheney.</h1>
      <div className='flex justify-between  w-full mt-10 '>
        <div className='ml-60 h-80  text-container '>
          <h2 className='text-6xl font-bold '>Introducing Global </h2>
          <h2 className='text-6xl font-bold text-justify'>Payroll you can run in your sleep</h2>
          <p className="text-2xl text-justify font-bold mt-20">Pay team members hired through your own entities 90+ countries with global payroll</p>
          <p className="flex items-center font-bold gap-2 mt-2 text-2xl"><a>Learn more </a><FiArrowRight/></p>
        </div>
        <div className='w-96 form-text mr-60 rounded h-auto py-4 px-3 border-2 bg-white flex flex-col items-center'>
          <h3 className="text-2xl text-black font-bold mb-5 mt-5">Login</h3>
          <div>
            <button className='bg-white rounded w-80 text-indigo-300 border-2 py-2 p-4 flex justify-center items-center gap-2'><FcGoogle size={24}/><h4 className="text-sm font-bold">Sign Up using Google</h4></button>
          </div>
          <div className="mt-6 ">
            
         <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              className="text-color mx-4 mb-0 text-center font-semibold dark:text-black">
              Or
            </p>
          </div>
          <h3 className="login-with  text-center font-medium">Login using email address</h3>
            <LoginForm/>
          </div>
        </div>

      </div>
    </div>


  )
}

export default Login
