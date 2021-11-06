import axios from "axios";
import { ActionTypes } from "./context/constants";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: ActionTypes.LOGIN_START });
  try {
    const res = await axios.post("/auth/login", userCredentials);
    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: err });
  }
};
