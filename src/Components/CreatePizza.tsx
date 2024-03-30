import { useContext, useState } from "react";
import {
  CartVisibleType,
  GlobalContext,
  HandleToppingChange,
  Topping,
} from "./GlobalContextProvider";
import menu from "./Menu.json";
import uuid from "react-uuid";
import jabba from "../Images/jabba.png";
import Cart from "./Cart";

const CreatePizza = ({ cartVisible }: CartVisibleType) => {
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
      <article className="create-pizza" id="order">
        <section className="create-pizza__img">
          <img src={jabba} alt="" />
        </section>
        <section className="ingredients-card">
          <h1>Summon your Ingredients</h1>
          <section className="choose">
            <h3>Size</h3>
            {menu.bottoms.map((bottom) => (
              <section className="choose__radio" key={bottom.name}>
                <input
                  type="radio"
                  name={"bottom"}
                  id={bottom.name}
                  onChange={() =>
                    setChosenBottom({ name: bottom.name, price: bottom.price })
                  }
                />
                <label htmlFor={bottom.name}>
                  {bottom.name}, {bottom.price} kr
                </label>
              </section>
            ))}
          </section>
          <h3>Toppings</h3>
          <section className="choose__topping">
            {menu.toppings.map((topping) => (
              <section key={topping.name}>
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
                <label htmlFor={topping.name}>
                  {topping.name}, {topping.price} kr
                </label>
              </section>
            ))}
            <button onClick={handleOrder}>Buy</button>
          </section>
        </section>
        {cartVisible && <Cart />}
      </article>
    </>
  );
};

export default CreatePizza;
