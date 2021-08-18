import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

let middleware = [thunk]
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
))

export {store}