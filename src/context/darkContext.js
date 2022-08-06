import { createContext, useReducer } from "react";
import DarkReducer from "./darkReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkContext = createContext(INITIAL_STATE);

export const DarkContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkReducer, INITIAL_STATE);
  return (
    <DarkContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkContext.Provider>
  );
};
