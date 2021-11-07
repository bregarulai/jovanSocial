import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "618477b8d38196b06d28b13d",
    username: "john",
    email: "john@gmail.com",
    profilePicture: "person/2.jpeg",
    coverPicture: "post/8.jpeg",
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: "2021 - 11 - 05",
    desc: "welcome to my page",
    relationship: 1,
    from: "New York",
    city: "Madrid",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
