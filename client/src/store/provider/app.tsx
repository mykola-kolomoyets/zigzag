import { FC } from "react";
import AppContext, { initialAppState } from "../context/app";
import Provider from "./provider";

const AppProvider: FC = ({ children }) => (
  <Provider
    initialState={initialAppState}
    ContextComponent={AppContext}
  >
    {children}
  </Provider>
);

export default AppProvider;