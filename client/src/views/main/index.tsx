import { ChangeEvent, useState, VFC } from "react";
import { useTranslation } from "react-i18next";


import { Difficulty, Size } from "../../utils";

import Button from "../../components/button";
import Navigation from "../../components/navbar";
import Radio from "../../components/radio";
import Timer from "../../components/timer";

import AppContext from "../../store/context/app";
import GameContext from "../../store/context/game";

import Game from "../game";

import './main.scss';

const startSets: Size[] = [
  { width: 6, height: 6 },
  { width: 7, height: 7 },
  { width: 8, height: 8 },
  { width: 9, height: 9 },
  { width: 10, height: 10 },
  { width: 6, height: 7 },
  { width: 7, height: 8 },
  { width: 8, height: 9 },
  { width: 9, height: 10 }
];

const createSetsButtons = (set: Size[]) => {
  return set.map((item, index) => ({
    label: `${item.width}x${item.height}`,
    value: index
  }));
}

const Main: VFC = () => {
  const { data: {
    user: { name },
    difficulty
  }, setData: setAppData } = AppContext.useContext();
  const { setData: setGameData } = GameContext.useContext();

  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [fieldSize, setFieldSize] = useState(0);

  const { t } = useTranslation();

  const onDifficultyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAppData({ difficulty: event.target.value });
  }

  const onFieldSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldSize(Number(event.target.value));
  }

  const onFinishGame = () => {
    setIsFinished(true);
    setIsStarted(false);
  }

  const onStartGame = () => {

    const createDisabledCell = (rows: number, columns: number): number[] => {
      return [
        Math.floor(Math.random() * (rows - 1)),
        Math.floor(Math.random() * (columns - 1))
      ];
    }

    const disabledCells: number[][] = difficulty === Difficulty.hard ?
      [
        createDisabledCell(startSets[fieldSize].width, startSets[fieldSize].height),
        createDisabledCell(startSets[fieldSize].width, startSets[fieldSize].height)
      ] :
      [
        [0, 0],
        [1, 0]
      ];

    setGameData({ fieldSize: startSets[fieldSize], disabledCells });

    setIsStarted(true);
  }

  return (
    <main className='main__container container'>
      <Navigation />


      <section className='main__content'>
        {isStarted ? (
          <section className="main__game">
            <Timer isTicking={!isFinished} />
            <Game onFinish={onFinishGame} />
            <Button view='primary' fullWidth onClick={onFinishGame}>
              {t('game.finishGame')}
            </Button>
          </section>
        ) : (
          <section className='main__menu'>
            <h1 className='main__menu--title'>
              <span>{t('pages.main.title')}</span>
              <br />
              {name}
            </h1>

            <h4 className='main__menu--subtitle'>{t('pages.main.start')}</h4>

            <section className='main__menu--field-inputs'>
              <Radio
                label={t('pages.main.fieldSize.title')}
                value={fieldSize}
                items={createSetsButtons(startSets)}
                inputProps={{ onChange: onFieldSizeChange }}
              />

              <Radio
                label={t('pages.main.difficulty.title')}
                value={difficulty}
                items={[
                  {
                    value: Difficulty.easy,
                    label: t('pages.main.difficulty.easy'),
                  },
                  {
                    value: Difficulty.middle,
                    label: t('pages.main.difficulty.middle'),
                  },
                  {
                    value: Difficulty.hard,
                    label: t('pages.main.difficulty.hard'),
                  },
                ]}
                inputProps={{ onChange: onDifficultyChange }}
              />
            </section>

            <Button view='primary' fullWidth onClick={onStartGame}>
              {t('pages.main.submit')}
            </Button>
          </section>
        )}
      </section>
    </main>
  )
};

export default Main;