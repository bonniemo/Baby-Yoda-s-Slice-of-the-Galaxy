import "./Hero.scss";
import yoda from "../../Images/pizzayoda.png";


const Hero = () => { 

  return (
    <>
      <article className="hero" id="hero">
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
            journey through the cosmos with every savory bite. <span>May the slice be
            with you!</span>
          </p>
        </section>
        <section className="yoda-wrap">
          <img src={yoda} alt="" />
        </section>        
      </article>
    </>
  );
};

export default Hero;
