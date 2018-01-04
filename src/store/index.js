import {createStore,combineReducers} from "redux"
import * as reducers from "./reducers"

const myReducer = combineReducers(reducers)
const store = createStore(myReducer)
export default store