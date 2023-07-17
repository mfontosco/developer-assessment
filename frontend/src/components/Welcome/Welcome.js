import React,{useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import { useSelector ,useDispatch} from "react-redux";
import {getUserAction} from '../../redux/actions/userActions'
const Welcome  = ()=>{
    const {id} = useParams()
    
    const dispatch =useDispatch()
    const {loading,success,user} = useSelector((state)=>state.getUser)
  
    useEffect(()=>{
        dispatch(getUserAction(id))
    },[dispatch,id])
   
    return (
<div className="min-h-screen">
{
    loading?<h1>loading..</h1>:success&&<h1 className="flex justify-center items-center text-white text-3xl">Welcome {user.name}</h1>
}
    
   
</div>
    )
}


export default Welcome