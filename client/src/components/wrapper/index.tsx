import { FC } from 'react';

import AppProvider from '../../store/provider/app';
import GameProvider from '../../store/provider/game';
import StatsProvider from '../../store/provider/stats';
import SummaryProvider from '../../store/provider/summary';

const Wrapper: FC = ({ children }) => (
  <AppProvider>
    <StatsProvider>
      <GameProvider>
        <SummaryProvider>
          {children}
        </SummaryProvider>
      </GameProvider>
    </StatsProvider>
  </AppProvider>
);

export default Wrapper;