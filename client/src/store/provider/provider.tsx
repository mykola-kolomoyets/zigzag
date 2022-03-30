import { useState } from "react";
import { IProvider, UpdateData } from "../../utils";

const Provider = <T extends {}, >({ children, initialState, ContextComponent }: IProvider<T>) => {
  const [data, setData] = useState<T>(initialState);

  const updateData = (newData: UpdateData<T>) => setData((prev) => ({ ...prev, ...newData }));

  const value = {
    data,
    setData: updateData
  };

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <ContextComponent.context.Provider value={value}>
      { children }
    </ContextComponent.context.Provider>
  );
};

export default Provider;