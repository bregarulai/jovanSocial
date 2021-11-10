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
    case ActionTypes.FOLLOW:
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case ActionTypes.UNFOLLOW:
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
