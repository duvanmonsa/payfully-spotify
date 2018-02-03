import * as types from  "../actions/actionsTypes";
import inistialState from "./initialState";

export  default function courseReducer(state = inistialState.searches , action) {
  switch(action.type) {
    case types.LOAD_SEARCH_SUCCESS :
      return action.searches;
    case types.SEARCH_TERM_SUCCESS :
      const searches  = action.searches.tracks.items;
      return Object.assign({},state,[{artist: 'asda', track: 'asd', album}]);

    default:
      return state;
  }
}
