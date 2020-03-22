import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

const middleWareList = applyMiddleware(thunkMiddleware);

export const store = createStore(
  rootReducer,
  compose(
    middleWareList,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

