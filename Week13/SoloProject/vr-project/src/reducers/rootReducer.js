import React from 'react'
import {combineReducers} from "redux"
import Products from "./productReducers"

const rootReducer = combineReducers({
	Products
})

export default rootReducer;
