import { createContext, useContext } from "react";

import { IContext, UpdateData } from "../../utils";


class Context<T extends {}> {
  constructor(
    private _initialState: T
  ) {}

  public context = createContext<IContext<T>>({
    data: this._initialState,
    setData: (newData: UpdateData<T>) => {}
  });

  public useContext = () => useContext(this.context);
}

export default Context;