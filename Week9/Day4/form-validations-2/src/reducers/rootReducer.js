import { combineReducers } from "redux";

import LoginInfo from "./loginInfo";
import GraphData from "./graphData";
import UserData from "./userData";


  export const rootReducer = combineReducers({
	UserData,
	LoginInfo,
	GraphData,
  });