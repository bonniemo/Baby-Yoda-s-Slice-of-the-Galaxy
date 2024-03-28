import React, { useContext, useState } from "react";
import {
  GlobalContext,
  HandleToppingChange,
  Topping,
} from "./Components/GlobalContextProvider";
import menu from "./Components/Menu.json";
import uuid from "react-uuid";

const CreatePizza = () => {
  const { dispatch } = useContext(GlobalContext);

  const [chosenBottom, setChosenBottom] = useState<{
    name: string;
    price: number;
  } | null>(null);

  const [toppingArr, setToppingArr] = useState<Topping[]>([]);

  const handleToppingChange: HandleToppingChange = (
    toppingName,
    isChecked,
    toppingPrice
  ) => {
    if (isChecked) {
      const topping: Topping = { name: toppingName, price: toppingPrice };
      setToppingArr((prevToppings) => [...prevToppings, topping]);
    }
  };

  const handleOrder = () => {
    if (!chosenBottom) {
      alert("Please select a bottom before placing the order.");
      return;
    }

    const totalPrice =
      chosenBottom.price +
      toppingArr.reduce((totalPrice, topping) => totalPrice + topping.price, 0);

    dispatch({
      type: "ADD",
      payload: {
        toppings: toppingArr,
        bottom: chosenBottom.name,
        id: uuid(),
        totalPrice: totalPrice,
      },
    });

    setToppingArr([]);
    setChosenBottom(null);

    const bottomInputs = document.getElementsByName(
      "bottom"
    ) as NodeListOf<HTMLInputElement>;
    bottomInputs.forEach((input) => {
      input.checked = false;
    });

    const toppingInputs = document.querySelectorAll('input[type="checkbox"]');
    toppingInputs.forEach((input) => {
      (input as HTMLInputElement).checked = false;
    });
  };

  return (
    <>
      <h1>Create a pizza</h1>
      <section>
        <h2>Choose size</h2>
        {menu.bottoms.map((bottom) => (
          <React.Fragment key={bottom.name}>
            <label htmlFor={bottom.name}>
              {bottom.name}, {bottom.price} kr
            </label>
            <input
              type="radio"
              name={"bottom"}
              id={bottom.name}
              onChange={() =>
                setChosenBottom({ name: bottom.name, price: bottom.price })
              }
            />
          </React.Fragment>
        ))}
      </section>
      <section>
        <h2>Choose Toppings</h2>
        {menu.toppings.map((topping) => (
          <React.Fragment key={topping.name}>
            <label htmlFor={topping.name}>
              {topping.name}, {topping.price} kr
            </label>
            <input
              type="checkbox"
              name={topping.name}
              id={topping.name}
              onChange={(e) =>
                handleToppingChange(
                  topping.name,
                  e.target.checked,
                  topping.price
                )
              }
            />
          </React.Fragment>
        ))}
        <button onClick={handleOrder}>Beställ</button>
      </section>
    </>
  );
};

export default CreatePizza;
