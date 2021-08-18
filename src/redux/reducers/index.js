import { combineReducers } from "redux";
import { randomReducer } from "./random";
import todoReducer from "./todo";
import visibilityFilter from "./visibilityFilter";



const rootReducer = combineReducers({
    random: randomReducer,
    todos: todoReducer,
    filter: visibilityFilter

})

export default rootReducer;