import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <header className="home">
      <div className="home__container container">
        <div className="home__content">
          <div className="home__content-left">
            <h1 className="home__title">
              <span className="mini-title">So you want to travel to</span>
              Space
            </h1>
            <p className="home__description">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="home__content-right">
            <Link to="destination" className="home__cta">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
