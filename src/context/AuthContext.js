import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducers";

const INITIAL_STATE = {
  user: {
    _id: "62c1868eaa94bb9a86064324",
    username: "Dan Mekonnen",
    email: "dan@gmail.com",
    roles: "User",
    profilePicture: "",
    coverPicture: "",
    followers: ["62be29c4e1e71e7610ddbf22"],
    following: ["62be29c4e1e71e7610ddbf22"],
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
