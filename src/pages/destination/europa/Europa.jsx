import React from "react";
import Destinations from "../Destinations";
import data from "../../../../src/assets/data.json";

const Europa = () => {
  const { destinations } = data;
  const europa = destinations[2];

  const { name, images, description, travel, distance } = europa;

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

export default Europa;
