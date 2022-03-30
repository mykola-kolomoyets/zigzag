import { FC } from "react";
import StatsContext, { initialStatsState } from "../context/stats";
import Provider from "./provider";

const StatsProvider: FC = ({ children }) => (
  <Provider
    initialState={initialStatsState}
    ContextComponent={StatsContext}
  >
    {children}
  </Provider>
);

export default StatsProvider;