import {createStore, applyMiddleware} from  "redux";
import rootReducer from "../reducers";
import reduxInmutableStateInvariant from "redux-immutable-state-invariant";
import  thunk from "redux-thunk";

export default function consfigureStore(initialState){

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      reduxInmutableStateInvariant()
    )
  );
}
