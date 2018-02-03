import {combineReducers} from "redux";
import searches from "./searchReducer";
import track from "./trackReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import user from "./userReducer";


const rootReducer = combineReducers({
  searches,
  ajaxCallsInProgress,
  user,
  track

});


export default rootReducer;
