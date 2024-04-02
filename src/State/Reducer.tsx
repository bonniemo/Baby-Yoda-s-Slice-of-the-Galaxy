import { PizzaState, Action } from "../Types/Types";
import menu from "../Data/Menu.json";

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
          const newSizePrice =
            menu.bottoms.find(
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

export default reducer;
