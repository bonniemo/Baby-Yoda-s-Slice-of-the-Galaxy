import map from "../..//Images/map-big.png";
import "./Location.scss";
import { RiMapPin2Fill } from "react-icons/ri";

const Location = () => {
  return (
    <article id="location">
      <section className="location-text">
        <h1>Find us</h1>
        <p>
          Welcome to our Galactic Star Wars Pizzeria, nestled in the enchanting
          outskirts of wild space, just a hyperspace jump southeast of Eslandia!
          Prepare to embark on an epic culinary adventure across the cosmos. As
          you navigate the vast expanse of the galaxy, be sure to keep your
          sensors finely tuned for any unexpected encounters with roaming
          asteroids, curious Jawas, or perhaps even the occasional passing
          starfighter. But fear not, intrepid traveler, for with a steadfast
          resolve and a trusty astromech droid by your side, you're destined to
          reach our celestial eatery in no time. Simply set your coordinates and
          maintain a straight course through the twinkling stars, guided by the
          Force and the tantalizing aroma of freshly baked pizzas from a galaxy
          far, far away. Whether you're a Jedi Knight seeking sustenance after a
          daring mission or a humble moisture farmer craving a slice of home,
          our pizzeria awaits with open airlocks and a warm, welcoming
          atmosphere. So buckle up, punch it into hyperdrive, and prepare to
          experience flavors that are truly out of this world. May the pizza be
          with you on your journey to our Galactic Star Wars Pizzeria!
        </p>
      </section>
      <section className="map-big-wrap">
        <img src={map} alt="" />
        <RiMapPin2Fill className="icon" />
      </section>
    </article>
  );
};

export default Location;
