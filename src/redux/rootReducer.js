import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { icecreamReducer } from "./icecream/icecreamReducer";
import { userReducer } from "./users/userReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
})