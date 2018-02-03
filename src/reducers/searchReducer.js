import * as types from "../actions/actionsTypes";
import inistialState from "./initialState";

export default function searchReducer(state = inistialState.searches, action) {
  switch (action.type) {

    case types.SEARCH_TERM_SUCCESS :
      if (action.total <= 0) return state;
      return Object.assign([], action.searches);

    default:
      return state;
  }
}
