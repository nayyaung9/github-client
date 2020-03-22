import { FETCH_USER_LIST_FAILURE, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_REQUEST } from '../constants/actionTypes';
import axios from 'axios';

function fetchUserList() {
  function request(payload) {
    return { type: FETCH_USER_LIST_REQUEST, payload }
  }
  function success(payload) {
    return { type: FETCH_USER_LIST_SUCCESS, payload }
  }
  function failure(payload) {
    return { type: FETCH_USER_LIST_FAILURE, payload }
  }
  return dispatch => {
    dispatch(request(true));
    axios.get('https://api.github.com/users?since=10')
    .then(response => {
      dispatch(success(response.data))
      dispatch(request(false));
    }).catch(err => dispatch(failure(err.message)));
  }
}

export const userActions = {
  fetchUserList,
};