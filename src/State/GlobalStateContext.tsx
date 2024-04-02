import { createContext } from "react";
import { PizzaState, Action } from "../Types/Types";

export const InitialPizzaState: PizzaState = {
  pizzas: [],
};

export const GlobalContext = createContext<{
  state: PizzaState;
  dispatch: React.Dispatch<Action>;
}>({
  state: InitialPizzaState,
  dispatch: () => null,
});
