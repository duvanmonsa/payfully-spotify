import {combineReducers} from "redux";
import searches from "./searchReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import user from "./userReducer";


const rootReducer = combineReducers({
  searches,
  ajaxCallsInProgress,
  user

});


export default rootReducer;
