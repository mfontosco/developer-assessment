import React from "react";
import { Route,Routes } from "react-router-dom";
import {LoginScreen,WelcomeScreen} from './index'



const Router = ()=>{
return <Routes>
    <Route path="/" element={<LoginScreen/>}/>
    <Route path="/welcome/:id" element={<WelcomeScreen/>}/>
</Routes>
}

export default Router;