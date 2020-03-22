import { FETCH_USER_LIST_FAILURE, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_REQUEST } from '../constants/actionTypes';

const initialState = {
  users: [],
  loading: false,
  errorMsg: '',
};

export function users(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_LIST_REQUEST:
      return {
        ...state,
        loading: action.payload
      }
    case FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload
      }
    default:
      return state;
  }
}