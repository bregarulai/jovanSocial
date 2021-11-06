import { ActionTypes } from "./constants";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case ActionTypes.LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
