import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
}
from '../constant/userConstants'
import axios from 'axios'

const baseUrl = "http://localhost:4000/api/v1/users";
const createUserActions = (name, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_USER_REQUEST,
      });
      const config = {
        headers:{"content-type": "application/json"}
      };
      const { data } =await axios.post(
        `${baseUrl}/`,
        { name, email, password },
        config
      );
     
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: data.user,
      });
    } catch (err) {
      console.log(err.message)
      let message =err.response && err.response.data.message ? err.response.data.message :err.message
      dispatch({
     type:CREATE_USER_FAIL,
     payload:message
      })
    }
  };
  
  const loginUserActions = (email,password)=>async(dispatch)=>{
      try{
       dispatch({type:LOGIN_USER_REQUEST})
       const config ={
    headers:{"content-type":"application/json"}
       }
       const {data} = await axios.post(`${baseUrl}/login`,{email,password},config)
      
       dispatch({
          type:LOGIN_USER_SUCCESS,
          payload:data.user
       })
       localStorage.setItem("userInfo",JSON.stringify(data))
      }catch(err){

    let message = err.response && err.response.data.message ? err.response.data.message :err.message
    console.log(message)
    dispatch({
  type:LOGIN_USER_FAIL,
  payload:message
    })
      }
  }
  
const getUserAction =(id)=>async(dispatch)=>{
  try{
    dispatch({
      type:GET_USER_REQUEST
    })
    const config ={
      headers:{
          "content-type":"application/json"
      }
    }

    const {data} = await axios.get(`${baseUrl}/${id}`,config)
   
    dispatch({
      type:GET_USER_SUCCESS,
      payload:data.user
    })
  }catch(err){
     console.log(err)
     let message =err.response && err.response.data.message ?err.response.data.message : err.message
     dispatch({
      type:GET_USER_FAIL,
      payload:message

     })
  }
}

  export {createUserActions,
      loginUserActions,
      getUserAction
    }