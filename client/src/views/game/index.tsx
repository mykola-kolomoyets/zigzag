import { useCallback, useEffect, FC, useMemo } from "react";
import StatsService from "../../api/services/stats";
import Button from "../../components/button";

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
  return JSON.stringify(a1)==JSON.stringify(a2);
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
      if (field[newRow][newColumn] === '0') totalMoves++;
    }
  });

  return totalMoves;
}

const checkWin = (field: string[][]): boolean => {
  // const isWin = field
  //   .reduce((acc, curr) => [...acc, curr.some(el => el === '0')], [] as boolean[])
  //   .every(el => !el);

  const LeftZeroes = field.reduce((acc, curr) => acc + curr.filter(el => el === '0').length , 0);

  return LeftZeroes === 2;
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

  const cancelMove = () => {
    const newField = field.slice();
    let maxNumber = 0;
    let maxNumberRow = 0;
    let maxNumberColumn = 0;

    field.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (Number(cell) > maxNumber) {
          maxNumber = Number(cell);
          maxNumberRow = rowIndex;
          maxNumberColumn = columnIndex;
        }
      });
    });

    newField[maxNumberRow][maxNumberColumn] = '0';

    setGameData({
      lastTry: previousTry,
      field: newField,
      isCancelAvailable: false
    });

    console.log(field, lastTryField);

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
      await setSummaryData(({
        isShow: true,
        isSuccess: true,
        title: 'Game Over',
        subtitle: checkWin(field) ? 'YOU WIN!' : 'YOU LOSE!'
      }));

      onFinish();

      setGameData({
        lastTry: {
          row: null,
          column: null,
          number: 0,
          moves: 0,
        },
      });

      // === TODO:
      // === PUSH results of lastGame on the server
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
    const field = Array(fieldSize.width).fill('0').map(() => Array(fieldSize.height).fill('0'));

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
  }, [fieldSize]);

  const rows = useMemo(() => field.map((row, index) => (
    <Row key={`row${index}`} content={row} number={index} />)), [field, lastTryField, lastTry]);

  return (
    <section>
      <div className='game__cancel-move'>
        <Button onClick={cancelMove} disabled={!isCancelAvailable}>
          Cancel Move
        </Button>
      </div>
      {rows}
    </section>
  )
};

export default Game;