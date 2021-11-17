import React from 'react'
import {combineReducers} from "redux"
import Cart from './cartReducer';
import Products from "./productReducers"
import Users from "./userReducer"
import Nav from "./navbarReducer"
const rootReducer = combineReducers({
	Products,
	Cart,
	Users,
	Nav
})

export default rootReducer;
