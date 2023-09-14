import React from "react";
import Destinations from "../Destinations";
import data from "../../../../src/assets/data.json";

const Mars = () => {
  const { destinations } = data;
  const mars = destinations[1];

  const { name, images, description, travel, distance } = mars;

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

export default Mars;
