import React from "react";
import Destinations from "../Destinations";
import data from "../../../../src/assets/data.json";

const Titan = () => {
  const { destinations } = data;
  const titan = destinations[3];

  const { name, images, description, travel, distance } = titan;

  return (
    <Destinations
      name={name}
      images={images}
      description={description}
      travel={travel}
      distance={distance}
    />
  );
};

export default Titan;
