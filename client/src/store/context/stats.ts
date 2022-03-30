import { StatsStore } from "../../utils";

import Context from "./context";

export const initialStatsState: StatsStore = {
  id: '',
  totalGames: 0,
  moves: 0,
  bestGame: {
    time: 0,
    field: {
      width: 0,
      height: 0,
    }
  }
};

const StatsContext = new Context(initialStatsState);

export default StatsContext;