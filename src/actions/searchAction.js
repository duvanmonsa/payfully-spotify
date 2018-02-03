import * as types from  "./actionsTypes";
import {beginAjaxCall} from "./ajaxStatusAction";
import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

export  function loadCoursesSuccess(results) {
 return {type: types.LOAD_SEARCH_SUCCESS,results};
}

export  function searchTermSuccess(results) {
 return {type: types.SEARCH_TERM_SUCCESS,results};
}

export  function updateCourseSuccess(course) {
 return {type: types.UPDATE_COURSE_SUCCESS,course};
}

export  function loadCourses() {
 return function (dispatch) {
   dispatch(beginAjaxCall());
   return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
   }).catch(error => {
      throw(error);
   });
 };
}

export  function searchTerm(term) {
  return function (dispatch,getState) {

    dispatch(beginAjaxCall());
    //query the songs
    spotifyApi.searchTracks(term, {limit: 10}).then(data => {
      debugger;
      dispatch({ type: types.SEARCH_TERM_SUCCESS, searches: data });
    }).catch(e => {
      dispatch({ type: types.SPOTIFY_ME_FAILURE, error: e });
    });

    // return courseApi.saveCourse(course).then(savedCourse => {
    //   course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(course));
    // }).catch(error => {
    //   throw(error);
    // });
  };
}
