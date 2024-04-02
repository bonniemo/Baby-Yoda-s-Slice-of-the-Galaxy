import React, { useContext } from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { TbPizzaOff, TbPizza } from 'react-icons/tb'
import { GlobalContext } from '../GlobalContextProvider'
import './Nav.scss'
import { SetCartVisibleTypes } from '../../Types/Types'

const Nav: React.FC<SetCartVisibleTypes> = ({ setCartVisible, cartVisible }) => {
    const { state } = useContext(GlobalContext);

  const toggleCartVisibility = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCartVisible(!cartVisible);
  };
  return (
    <>
    <nav>
    <ul>     
      <li>
        <a href="#order">Deploy the Pizza Droids</a>
      </li>
      <li>
        <a href="#location">Locate our Galactic Outpost</a>
      </li>
      <li>
        <a href="#">Summon Pizza Support</a>
      </li>      
      {state.pizzas.length === 0 ? (
        <li className="cart-icon">
          <a href="#" onClick={toggleCartVisibility}>
            <TbPizzaOff className="cart-icon__pizza" />
            <LuShoppingCart />
          </a>
        </li>
      ) : (
        <li className="cart-icon">
          <a href="#" onClick={toggleCartVisibility}>
            <TbPizza className="cart-icon__pizza" />
            <LuShoppingCart />
          </a>
        </li>
      )}
    </ul>
  </nav>
        </>
  )
}

export default Nav