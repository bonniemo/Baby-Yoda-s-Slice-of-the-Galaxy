import { useReducer } from "react";
import { PizzaContextProp } from "../Types/Types";
import reducer from "../State/Reducer";
import { InitialPizzaState, GlobalContext } from "../State/GlobalStateContext";

const GlobalContextProvider = ({ children }: PizzaContextProp) => {
  const [state, dispatch] = useReducer(reducer, InitialPizzaState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
