import { useContext } from "react";
import ToDosContext from "./ToDosContext";

const useToDosContext = () => {
  const context = useContext(ToDosContext);

  if (!context) {
    throw new Error(
      "useToDosContext must be used within a ToDosContextProvider"
    );
  }

  return context;
};

export default useToDosContext;
