import { setCookie } from "../../shared/Cookie";

let initialState = {
  user: null,
  is_login: false,
};

function authReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "SET_USER":
      setCookie("is_login", "success");
      return {
        ...state,
        user: payload.user,
        is_login: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: null,
        is_login: false,
      };
    default:
      return { ...state };
  }
}

export default authReducer;
