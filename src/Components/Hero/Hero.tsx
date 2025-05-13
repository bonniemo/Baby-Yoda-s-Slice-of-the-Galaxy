import yoda from "../../Images/pizzayoda.png";
import "./Hero.scss";

const Hero = () => {
    return (
        <>
            <article className="hero" id="hero">
                {/* <img src={starBg} alt="" className="star-bg" /> */}
                <section className="heading">
                    <h2>
                        <span>
                            Embark on a Galactic Culinary Adventure with
                        </span>
                    </h2>
                    <h1>
                        Baby Yoda's Slice <span>of the Galaxy</span>
                    </h1>
                    <p>
                        Experience the warp-speed delivery of our{" "}
                        <span>
                            out-of-this-world pizzas, guided by the spirit of
                            the Force.
                        </span>
                    </p>
                    {/*
          
          As Master Yoda once said,
          <span>"'Deliver. Or deliver not. There is no delay."</span>
            From the crusts of distant planets to the toppings of far-off galaxies, May the slice be with you!  
          <p>
            Let your taste buds journey through the cosmos with every savory
            bite. 
          </p>
            */}
                </section>
                <section className="yoda-wrap">
                    <img src={yoda} alt="" />
                </section>
            </article>
        </>
    );
};

export default Hero;
