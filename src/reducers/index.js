import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import informationGet from "./informationGet";


const reducers = combineReducers({
    amount: amountReducer,
    info: informationGet
})

export default reducers