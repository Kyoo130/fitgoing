import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { createBrowserHistory } from "history";
import {connectRouter} from "connected-react-router";

export const history = createBrowserHistory();

export default combineReducers({
  auth: authReducer,
  router: connectRouter(history),
});
