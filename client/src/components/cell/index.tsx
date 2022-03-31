import { FC, useCallback, useEffect, useState } from "react";
import classnames from 'classnames';
import { CSSTransition, Transition } from 'react-transition-group';

import GameContext from "../../store/context/game";

import './cell.scss';
import { checkRow } from "../../views/game";
import AppContext from "../../store/context/app";
import { Difficulty } from "../../utils";

type CellProps = {
  content: string;
  column: number;
  row: number;
};

const Cell: FC<CellProps> = ({ content, row, column }) => {
  const { data: { onCellClick, field, lastTry, disabledCells } } = GameContext.useContext();
  const { data: { difficulty } } = AppContext.useContext();

  const isDisabledCell = disabledCells.map(cell => {
    return cell[0] === row && cell[1] === column
  }).some(condition => condition);

  const isAllowedToGo = !isDisabledCell && checkRow(content, row, column, field, lastTry);

  return (
    <div
      className={classnames('cell__container', {
        'cell__disabled': isDisabledCell && content === 'X',
        'cell__available': !isDisabledCell && difficulty === Difficulty.easy && isAllowedToGo,
        'cell__filled': !isDisabledCell && Number(content) !== 0,
        'cell__last-try': row === lastTry.row && column === lastTry.column
      })}
      onClick={() => isAllowedToGo ? onCellClick(row, column, field, lastTry) : {}}
    >
      {isDisabledCell ? 'X' : content}
    </div>
  )
};

export default Cell;