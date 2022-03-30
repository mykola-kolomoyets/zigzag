import { useCallback, useEffect, FC, useMemo } from "react";
import StatsService from "../../api/services/stats";

import Row from "../../components/row";
import AppContext from "../../store/context/app";

import GameContext from "../../store/context/game";
import StatsContext from "../../store/context/stats";
import SummaryContext from "../../store/context/summary";
import { Try } from "../../utils";

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

const getTotalAvaliableMoves = (field: string[][], row: number, column: number): number => {
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
      (newColumn >= 0 && newColumn < field[0].length)
    ) {
      if (field[newRow][newColumn] === '0') totalMoves++;
    }
  });

  return totalMoves;
}

const checkWin = (field: string[][]): boolean => {
  const isWin = field
    .reduce((acc, curr) => [...acc, curr.some(el => el === '0')], [] as boolean[])
    .every(el => !el);

  return isWin;
}

type GameProps = {
  onFinish: () => void
}
const Game: FC<GameProps> = ({ onFinish }) => {
  const { data: {
    fieldSize,
    field,
    time
  }, setData: setGameData } = GameContext.useContext();
  const { data: { user: { _id: id } }, setData: setAppData } = AppContext.useContext();
  const { setData: setStatsData } = StatsContext.useContext();
  const { setData: setSummaryData } = SummaryContext.useContext();

  // const defaultField = useMemo(() => Array(fieldSize.width).fill('0').map(() => Array(fieldSize.height).fill('0')), [field, fieldSize]);

  const onCellClick = async (row: number, column: number, field: string[][], lastTry: Try) => {
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

    const availableMoves = getTotalAvaliableMoves(fieldCopy, row, column);

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

  const rows = field.map((row, index) => (
    <Row key={`row${index}`} content={row} number={index} />));

  return (
    <section>
      {rows}
    </section>
  )
};

export default Game;