import { FC } from "react";
import GameContext, { initialGameState } from "../context/game";
import Provider from "./provider";

const GameProvider: FC = ({ children }) => (
  <Provider
    initialState={initialGameState}
    ContextComponent={GameContext}
  >
    {children}
  </Provider>
);

export default GameProvider;