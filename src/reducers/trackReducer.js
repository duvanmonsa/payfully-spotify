import * as types from "../actions/actionsTypes";
import inistialState from "./initialState";

export default function courseReducer(state = inistialState.track, action) {
  switch (action.type) {
    case types.LOAD_CURRENT_SUCCESS :
      if(!action.track.item) return false;
      return Object.assign({}, action.track.item);

    default:
      return state;
  }
}
