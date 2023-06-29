import React, { useReducer } from "react";
import AppContext from "./appContext";
import reducer from "./reducer";

import { LOGOUT, LOGIN } from "./actions";

const AppState = (props) => {
  const intialState = {
    isAuth: false,
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  // Logout
  const logout = (todo) => {
    dispatch({
      type: LOGOUT,
    });
  };

  // Login
  const login = (todoID) => {
    dispatch({
      type: LOGIN,
    });
  };

  return (
    <AppContext.Provider
      value={{
        isAuth: state.isAuth,
        logout,
        login,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
