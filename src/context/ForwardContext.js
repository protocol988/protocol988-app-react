import { createContext, useState } from "react";

const ForwardContext = createContext();

const ForwardContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ForwardContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </ForwardContext.Provider>
  );
};

export { ForwardContext, ForwardContextProvider };
