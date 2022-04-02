import { useCallback, useEffect, FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import AuthService from "../../api/services/auth";
import EmailService from "../../api/services/email";
import StatsService from "../../api/services/stats";
import Button from "../../components/button";
import Onboarding from "../../components/onboarding";

import Row from "../../components/row";
import AppContext from "../../store/context/app";

import GameContext from "../../store/context/game";
import StatsContext from "../../store/context/stats";
import SummaryContext from "../../store/context/summary";
import { Try } from "../../utils";

import './game.scss';

export const checkRow = (content: string, row: number, column: number, field: string[][], lastTry: Try): boolean => {
  let isAllowedToGo = true;

  if (lastTry.row != undefined && lastTry.column != undefined) {
    const deltaX = Math.abs(column - lastTry.column);
    const deltaY = Math.abs(row - lastTry.row);

    isAllowedToGo = Number(content) === 0 && (
      ((deltaX === 2) && (deltaY === 1)) ||
      ((deltaX === 1) && (deltaY === 2)));
  }

  return isAllowedToGo;
}

const arraysEqual = (a1: number[],a2: number[]) => {
  /* WARNING: arrays must not contain {objects} or behavior may be undefined */
  return JSON.stringify(a1) == JSON.stringify(a2);
}

const getTotalAvaliableMoves = (field: string[][], row: number, column: number, disabledCells: number[][]): number => {
  const avaliableMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],

    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  let totalMoves = 0;

  avaliableMoves.forEach(([moveRows, moveColumns]) => {
    const newRow = row! + moveRows;
    const newColumn = column! + moveColumns;

    if (
      (newRow >= 0 && newRow < field.length) &&
      (newColumn >= 0 && newColumn < field[0].length) &&
      disabledCells.every(cell => !arraysEqual([newRow, newColumn], cell))
    ) {
      if (field[newRow][newColumn] === '') totalMoves++;
    }
  });

  return totalMoves;
}

const checkWin = (field: string[][]): boolean => {
  const LeftZeroes = field.reduce((acc, curr) => acc + curr.filter(el => el === '').length , 0);

  return LeftZeroes === 0;
}

type GameProps = {
  onFinish: () => void
}
const Game: FC<GameProps> = ({ onFinish }) => {
  const { data: {
    fieldSize,
    field,
    time,
    disabledCells,
    lastTry,
    previousTry,
    isCancelAvailable,
    lastTryField,
  }, setData: setGameData } = GameContext.useContext();
  const { data: { user: { _id: id } }, setData: setAppData } = AppContext.useContext();
  const { setData: setStatsData } = StatsContext.useContext();
  const { setData: setSummaryData } = SummaryContext.useContext();

  const [isTutorialShow, setIsTutrialShow] = useState(false);

  const { t } = useTranslation();

  const cancelMove = () => {
    const newField = field.slice();

    newField[lastTry.row!][lastTry.column!] = '';

    setGameData({
      lastTry: previousTry,
      field: newField,
      isCancelAvailable: false
    });
  }

  const onCellClick = async (row: number, column: number, field: string[][], lastTry: Try) => {
    setGameData({
      lastTryField: field,
      previousTry: lastTry,
      isCancelAvailable: true
    });

    const fieldCopy = field.slice();

    const nextNumber = (lastTry?.number) ?
      Number(fieldCopy[lastTry.row!][lastTry.column!]) + 1 :
      1;

    fieldCopy[row][column] = nextNumber.toString();

    setGameData({
      field: fieldCopy,
      lastTry: {
        row,
        column,
        number: nextNumber,
        moves: lastTry.moves + 1
      }
    });

    const availableMoves = getTotalAvaliableMoves(fieldCopy, row, column, disabledCells);

    if (availableMoves === 0) {
      const isWin = checkWin(field);
      await setSummaryData(({
        isShow: true,
        isSuccess: isWin,
        title: isWin ?
          t('popup.success.title') as string :
          t('popup.fail.title') as string,
        subtitle: isWin ?
          t('popup.succes.subtitle') as string :
          t('popup.fail.subtitle') as string
      }));

      if (isWin) EmailService.sendEmail({ text: 'user field: ', field });

      onFinish();

      setGameData({
        lastTry: {
          row: null,
          column: null,
          number: 0,
          moves: 0,
        },
      });

      setAppData({ isLoading: true });

      await StatsService.update(id!, {
        moves: lastTry.moves + 1,
        bestGame: {
          time,
          field: {
            width: field[0].length,
            height: field.length
          }
        }
      })
        .then(res => {
          const { data } = res;
          console.log(data);
          setStatsData(data);
        })
        .finally(() => setAppData({ isLoading: false }));
    }
  };

  useEffect(() => {
    const field = Array(fieldSize.height).fill('').map(() => Array(fieldSize.width).fill(''));

    if (disabledCells) {
      disabledCells.forEach(([row, column]) => {
        field[row][column] = 'X';
      });

    }

    setGameData({
      field,
      onCellClick,
      lastTry: {
        row: null,
        column: null,
        number: 0,
        moves: 0,
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setGameData({ onCellClick });
  }, [fieldSize, disabledCells]);

  const rows = useMemo(() => field.map((row, index) => (
    <Row key={`row${index}`} content={row} number={index} />)), [field, lastTryField, lastTry]);

  return (
    <section>
      <div className='game__cancel-move'>
        <Button view='secondary' fullWidth onClick={cancelMove} disabled={!isCancelAvailable}>
          {t('game.cancelMove')}
        </Button>
        <Button view='secondary' fullWidth onClick={() => setIsTutrialShow(true)}>
          {t('game.tutorial')}
        </Button>
      </div>
      {rows}
        <Onboarding isShow={isTutorialShow} onClose={() => setIsTutrialShow(false)} />
    </section>
  )
};

export default Game;