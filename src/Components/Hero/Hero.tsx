import "./Hero.scss";
import yoda from "../../Images/pizzayoda.png";
import { TbPizzaOff } from "react-icons/tb";
import { TbPizza } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContextProvider";

const Hero = ({ setCartVisible, cartVisible }) => {
  const { state } = useContext(GlobalContext);

  const toggleCartVisibility = (e) => {
    e.preventDefault();
    setCartVisible(!cartVisible);
  };

  return (
    <>
      <article className="hero">
        {/* <img src={starBg} alt="" className="star-bg" /> */}
        <section className="heading">
          <h1>
            <span>Embark on a Galactic Culinary Adventure</span> with Baby
            Yoda's Slice of the Galaxy!
          </h1>
          <h2>
            As Master Yoda once said,
            <span>"'Deliver. Or deliver not. There is no delay."</span>
          </h2>
          <p>
            Experience the warp-speed delivery of our out-of-this-world pizzas,
            guided by the spirit of the Force. From the crusts of distant
            planets to the toppings of far-off galaxies, let your taste buds
            journey through the cosmos with every savory bite. May the slice be
            with you!
          </p>
        </section>
        <section className="yoda-wrap">
          <img src={yoda} alt="" />
        </section>
        <nav>
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">Deploy the Pizza Droids</a>
            </li>
            <li>
              <a href="#">Locate our Galactic Outpost</a>
            </li>
            <li>
              <a href="#">Summon Pizza Support</a>
            </li>
            <section></section>
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
      </article>
    </>
  );
};

export default Hero;
