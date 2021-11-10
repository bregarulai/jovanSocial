import { ActionTypes } from "./constants";

export const LoginStart = (userCredentials) => ({
  type: ActionTypes.LOGIN_START,
});
export const LoginSuccess = (user) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: user,
});
export const LoginFailure = (error) => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: error,
});
export const follow = (userId) => ({
  type: ActionTypes.FOLLOW,
  payload: userId,
});
export const unfollow = (userId) => ({
  type: ActionTypes.UNFOLLOW,
  payload: userId,
});
