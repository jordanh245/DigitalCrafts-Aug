import React from 'react'
import {combineReducers} from "redux"
import Cart from './cartReducer';
import Products from "./productReducers"

const rootReducer = combineReducers({
	Products,
	Cart
})

export default rootReducer;
