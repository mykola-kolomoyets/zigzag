import { ChangeEvent, useEffect, useRef, useState, VFC } from "react";
import { useNavigate } from "react-router";

import AuthService from "../../api/services/auth";

import { Difficulty, Size } from "../../utils";

import Button from "../../components/button";
import Input from "../../components/input";
import Navigation from "../../components/navbar";
import Radio from "../../components/radio";
import Timer from "../../components/timer";

import AppContext from "../../store/context/app";
import GameContext from "../../store/context/game";
import StatsContext from "../../store/context/stats";

import Game from "../game";

import './main.scss';
import SummaryContext from "../../store/context/summary";

const Main: VFC = () => {
  const { data: {
    user: { _id: id, name },
    token,
    difficulty
  }, setData: setAppData } = AppContext.useContext();
  const { setData: setStatsData } = StatsContext.useContext();
  const { setData: setGameData } = GameContext.useContext();
  const { setData: setSummaryData } = SummaryContext.useContext();

  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const onDifficultyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAppData({ difficulty: event.target.value });
  }

  const onFinishGame = () => {
    setIsFinished(true);
    setIsStarted(false);
  }

  const onStartGame = () => {
    const [
      width,
      height
    ] = [widthRef, heightRef].map(ref => ref.current?.value || 0);

    if ((!width || !height) ||
      (Number(width) < 4 || Number(height) < 4) ||
      (Number(width) > 10 || Number(height) > 10)
    ) {
      return setSummaryData({
        isShow: true,
        isSuccess: false,
        title: 'Field is invalid!',
        subtitle: 'Enter field width and height minimum 4 and maximum 10'
      });
    }

    const fieldSize: Size = {
      width: Number(width),
      height: Number(height)
    }

    setGameData({ fieldSize });

    setIsStarted(true);
  }

  const navigate = useNavigate();

  useEffect(() => {
    const userId = id || localStorage.getItem('userId');

    AuthService.getUser(userId!)
      .then(res => {
        const { user, stats } = res.data;

        setAppData({ user });
        setStatsData({ ...stats });
      })
      .catch((err) => {
        navigate('/login');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, token]);

  return (
    <main className='main__container container'>
      <Navigation />


      <section className='main__content'>
        {isStarted ? (
          <section className="main__game">
            <Timer isTicking={!isFinished} />
            <Game onFinish={onFinishGame} />
            <Button onClick={onFinishGame}>
              Finish Game
            </Button>
          </section>
        ) : (
          <section className='main__menu'>
            <h1 className='main__menu--title'>
              <span>Welcome back,</span>
              <br />
              {name}
            </h1>

            <h4 className='main__menu--subtitle'>Start the new game</h4>

            <section className='main__menu--field-inputs'>
              <Input placeholder='Field width' type="number" name="width" ref={widthRef} errorMessage='' />

              <Input placeholder='Field height' type="number" name="width" ref={heightRef} errorMessage='' />

              <Radio
                label={'Difficulty'}
                value={difficulty}
                items={[
                  {
                    value: Difficulty.easy,
                    label: 'Easy',
                  },
                  {
                    value: Difficulty.middle,
                    label: 'Middle',
                  },
                ]}
                inputProps={{ onChange: onDifficultyChange }}
              />
            </section>

            <Button onClick={onStartGame}>
              Start Game
            </Button>
          </section>
        )}
      </section>
    </main>
  )
};

export default Main;