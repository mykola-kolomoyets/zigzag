import { ReactNode } from "react";

import Context from "../store/context/context";

import { AlertType, Difficulty, Locales } from "./enums";

export interface IContext<T extends {}> {
  data: T;
  setData: (newData: UpdateData<T>) => void;
}

export interface IProvider<T extends {}> {
  initialState: T;
  ContextComponent: Context<T>;
  children: ReactNode;
}

export type UpdateData<T> = {
  [key in keyof Partial<T>]: T[keyof T];
};

export type AppStore = {
  isLoading: boolean;
  showAlert: boolean;
  difficulty: Difficulty;
  alertType: AlertType;
  alertText: string;
  user: {
    _id?: string;
    id?: string;
    name: string;
    email: string;
  };
  token: string;
  language: Locales
};


export type Size = {
  width: number
  height: number;
}

export type Try = {
  row: number | null;
  column: number | null;
  number: number;
  moves: number;
}

export type GameStore = {
  currentNumber: number;
  lastTry: Try,
  previousTry: Try,
  time: number;
  avaliableCells: number;
  isCancelAvailable: boolean;
  fieldSize: Size;
  field: string[][];
  lastTryField: string[][],
  disabledCells: number[][],
  onCellClick: (row: number, column: number, field: string[][], lastTry: Try) => void;
};

export type StatsStore = {
  id: string;
  totalGames: number;
  moves: number;
  bestGame: {
    time: number;
    field: {
      width: number;
      height: number;
    }
  }
};

export type SummaryStore = {
  isShow: boolean;
  isSuccess: boolean;
  title: string;
  subtitle: string;
}