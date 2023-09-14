import React from "react";
import data from "../../../../src/assets/data.json";
import Technologies from "../Technologies";

const TechnologySpaceport = () => {
  const { technology } = data;

  const spaceport = technology.find((item) => item.name === "Spaceport");

  const { name, images, description } = spaceport;

  return <Technologies name={name} images={images} description={description} />;
};

export default TechnologySpaceport;
