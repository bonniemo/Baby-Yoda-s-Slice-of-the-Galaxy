import React from "react";
import { GlobalContext } from "./GlobalContextProvider";
import { useContext } from "react";
import menu from "./Menu.json";

const Cart = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const totalCartPrice = state.pizzas.reduce(
    (total, pizza) => total + pizza.totalPrice,
    0
  );

  const handleRemove = (id: string) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const handleSizeChange = (
    id: string,
    currentSize: string,
    decrement: boolean
  ) => {
    const currentIndex = menu.bottoms.findIndex(
      (bottom) => bottom.name === currentSize
    );
    if (currentIndex === -1 || (decrement && currentIndex === 0)) {
      return;
    }
    const newIndex = decrement ? currentIndex - 1 : currentIndex + 1;
    const newSizeName = menu.bottoms[newIndex].name;

    dispatch({
      type: "UPDATE_SIZE",
      payload: { id, newSize: newSizeName },
    });
  };

  const handleToppingRemove = (id: string, toppingName: string, toppingPrice: number) => {
    dispatch({
      type: "REMOVE_TOPPING",
      payload: { id, toppingName, toppingPrice },
    });
  };
  return (
    <>
      <section className="cart">
        <h1>Cart</h1>
        <h2>Your Pizza</h2>
        {state.pizzas.length === 0 ? (
          <p>No pizza yet</p>
        ) : (
          <>
            {state.pizzas.map((item, index) => (
              <React.Fragment key={index}>
                <section className="cart__bottom">
                  <button
                    onClick={() => handleSizeChange(item.id, item.bottom, true)}
                  >
                    -
                  </button>
                  <strong>Botten:</strong> {item.bottom}
                  <button
                    onClick={() =>
                      handleSizeChange(item.id, item.bottom, false)
                    }
                  >
                    +
                  </button>
                </section>
                <ul>
                  <p>
                    <strong>Topping:</strong>
                  </p>
                  {item.toppings.map((topping, toppingIndex) => (
                    <li key={toppingIndex}>
                      {topping.name} - {topping.price} kr
                      <button onClick={() => handleToppingRemove(item.id, topping.name, topping.price)}>
                        -
                      </button>
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Price:</strong> {item.totalPrice} kr
                </p>
                <button onClick={() => handleRemove(item.id)}>
                  Remove Pizza
                </button>
              </React.Fragment>
            ))}
          </>
        )}
        <p>
          <strong>Total Cart Price:</strong> {totalCartPrice} kr
        </p>
      </section>
    </>
  );
};

export default Cart;