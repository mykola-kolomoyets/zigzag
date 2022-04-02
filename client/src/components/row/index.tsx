import { FC } from "react";

import Cell from "../cell";

import './row.scss';

type RowProps = {
  content: string[];
  number: number;
};

const Row: FC<RowProps> = ({ content, number }) => {
  const cells = content.map((item, index) => (
    <Cell key={item + index} row={number} column={index} content={item} />
  ));

  return (
    <section className='row__container'>
      {cells}
    </section>
  )
}

export default Row;