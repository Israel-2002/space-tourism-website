import React from "react";
import Destinations from "../Destinations";
import data from "../../../../src/assets/data.json"

const Moon = () => {
  const { destinations } = data;
  const moon = destinations[0];

  const { name, images, description, travel, distance } = moon;

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

export default Moon;
