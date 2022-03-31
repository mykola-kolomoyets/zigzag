import { GameStore } from "../../utils";

import Context from "./context";

export const initialGameState: GameStore = {
  currentNumber: 1,
  lastTry: {
    row: null,
    column: null,
    number: 0,
    moves: 0,
  },
  previousTry: {
    row: null,
    column: null,
    number: 0,
    moves: 0,
  },
  isCancelAvailable: false,
  avaliableCells: 0,
  time: 0,
  fieldSize: {
    width: 0,
    height: 0
  },
  disabledCells: [],
  field: [],
  lastTryField: [],
  onCellClick: (row, column, field, lastTry) => {}
};

const GameContext = new Context(initialGameState);

export default GameContext;