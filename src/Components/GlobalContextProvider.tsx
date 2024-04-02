import React, { createContext, useReducer } from "react";
import menu from "..//Data/Menu.json"
import { PizzaState, Pizza, PizzaContextProp } from "../Types/Types";

const InitialPizzaState: PizzaState = {
    pizzas: []
}

export const GlobalContext = createContext<{
  state: PizzaState;
  dispatch: React.Dispatch<Action>;
}>({
  state: InitialPizzaState,
  dispatch: () => null,
});

type Action =
  | { type: "ADD"; payload: Pizza }
  | { type: "REMOVE"; payload: string }
  | { type: "UPDATE_SIZE"; payload: { id: string; newSize: string } }
  | { type: "REMOVE_TOPPING"; payload: { id: string; toppingName: string; toppingPrice: number } };

const reducer = (state: PizzaState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return { pizzas: [...state.pizzas, action.payload] };

    case "REMOVE":
      return {
        pizzas: state.pizzas.filter((p) => p.id !== action.payload),
      };

    case "UPDATE_SIZE":
      const updatedPizzas = state.pizzas.map((pizza) => {
        if (pizza.id === action.payload.id) {
          const newSizePrice = menu.bottoms.find(
            (bottom) => bottom.name === action.payload.newSize
          )?.price || 0;
          const totalToppingPrice = pizza.toppings.reduce(
            (total, topping) => total + topping.price,
            0
          );
          const newTotalPrice = newSizePrice + totalToppingPrice;
          return {
            ...pizza,
            bottom: action.payload.newSize,
            totalPrice: newTotalPrice,
          };
        }
        return pizza;
      });

      return {
        pizzas: updatedPizzas,
      };

    case "REMOVE_TOPPING":
      const updatedPizzasTopping = state.pizzas.map((pizza) => {
        if (pizza.id === action.payload.id) {
          const newToppings = pizza.toppings.filter(
            (topping) => topping.name !== action.payload.toppingName
          );
          
          const newTotalPrice = pizza.totalPrice - action.payload.toppingPrice;
          return {
            ...pizza,
            toppings: newToppings,
            totalPrice: newTotalPrice,
          };
        }
        return pizza;
      });
      return {
        pizzas: updatedPizzasTopping,
      };

    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }: PizzaContextProp) => {
  const [state, dispatch] = useReducer(reducer, InitialPizzaState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;