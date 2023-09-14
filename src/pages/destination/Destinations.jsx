import React from "react";
import Navbar from "./navbar/Navbar";

const Destinations = ({ name, images, description, travel, distance }) => {
  return (
    <div className="destinations">
      <div className="destinations__image">
        <img src={images.png} alt="" />
      </div>
      <div className="destinations__content">
        <Navbar />
        <h2 className="destinations__name">{name}</h2>
        <p className="destinations__description">{description}</p>

        <div className="destinations__time">
          <div className="destinations__distance">
            <span>Avg. Distance</span>
            {distance}
          </div>
          <div className="destinations__travel">
            <span>Est. Travel Time</span>
            {travel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
