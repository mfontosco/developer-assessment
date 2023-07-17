import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    CREATE_USER_RESET,
    LOGIN_USER_RESET,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_RESET,
    GET_USER_SUCCESS
  } from "../constant/userConstants";
  
  const defaultValue = {
    name:"",
    email: "",
    password: ""
  }
  const createUserReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_USER_REQUEST:
        return { loading: true };
      case CREATE_USER_SUCCESS:
        return { loading: false,success:true, user: action.payload };
      case CREATE_USER_FAIL:
        return { loading: false, error: action.payload };
      case CREATE_USER_RESET:
        return {};
      default:
        return state;
    }
  };
   const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : defaultValue
  const loginUserReducer = (state = {userInfo: userInfoFromLocalStorage}, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return { loading: true };
      case LOGIN_USER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case LOGIN_USER_FAIL:
        return { loading: false, error: action.payload };
      case LOGIN_USER_RESET:
        return {};
      default:
        return state;
    }
  };
  const getUserReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
        return { loading: true };
      case GET_USER_SUCCESS:
        return { loading: false, success: true, user: action.payload };
      case GET_USER_FAIL:
        return { loading: false, error: action.payload };
      case GET_USER_RESET:
        return {};
      default:
        return state;
    }
  };
  export {loginUserReducer,createUserReducer, getUserReducer}