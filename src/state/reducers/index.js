import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import ageReducer from "./ageReducer";

const reducers = combineReducers({
    amount: amountReducer,
    age: ageReducer
})

export default reducers