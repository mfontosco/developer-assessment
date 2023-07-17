import {combineReducers} from 'redux'
import {createUserReducer,loginUserReducer,getUserReducer} from './userReducer'

const rootReducer = combineReducers({
    createUser:createUserReducer,
    loginUser:loginUserReducer,
    getUser:getUserReducer,
})

export default rootReducer;