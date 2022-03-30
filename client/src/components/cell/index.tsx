import { FC, useCallback, useEffect, useState } from "react";
import classnames from 'classnames';

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
  const { data: { onCellClick, field, lastTry } } = GameContext.useContext();
  const { data: { difficulty } } = AppContext.useContext();

  const isAllowedToGo = checkRow(content, row, column, field, lastTry);


  return (
    <div
      className={classnames('cell__container', {
        'cell__available': difficulty === Difficulty.easy && isAllowedToGo,
        'cell__filled': Number(content) !== 0
      })}
      onClick={() => isAllowedToGo ? onCellClick(row, column, field, lastTry) : {}}
    >
      {content}
    </div>
  )
};

export default Cell;