import { FC, useEffect, useState } from "react";
import { formatSeconds } from "../../utils";

import './times.scss';

type TimerProps = {
  isTicking: boolean;
}
const Timer: FC<TimerProps> = ({ isTicking }) => {
  const [time, setTime] = useState(0);

  // const { data: { bestGame }, setData } = StatsContext.useContext();

  let timer: NodeJS.Timer;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);


    return () => {
      // setData({
      //   bestGame: {
      //     ...bestGame,
      //     time
      //   }
      // });
      clearInterval(timer);
    }
  }, [isTicking]);


  return (
    <section className='timer'>
      <p className='timer__text'>{ formatSeconds(time) }</p>
    </section>
  )
}

export default Timer;