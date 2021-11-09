import React from 'react'
import {combineReducers} from "redux"
import Cart from './cartReducer';
import Products from "./productReducers"
import Users from "./userReducer"

const rootReducer = combineReducers({
	Products,
	Cart,
	Users
})

export default rootReducer;
