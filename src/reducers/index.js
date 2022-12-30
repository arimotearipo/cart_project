import { combineReducers } from "redux";
import navbarReducer from "./navbarReducer";
import cartReducer from "./cartReducer";

export default combineReducers({ navbar: navbarReducer, cart: cartReducer });
