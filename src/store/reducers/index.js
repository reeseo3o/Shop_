import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

export default combineReducers({ cartReducer });

/* import cartdelReducer from "./cartdelReducer"; */

/* const rootReducer = combineReducers({
    addCart:cartReducer,
    delCart:cartdelReducer,
})

export default rootReducer; */
