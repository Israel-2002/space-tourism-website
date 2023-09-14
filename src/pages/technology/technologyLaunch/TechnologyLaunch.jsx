import React from "react";
import data from "../../../../src/assets/data.json";
import Technologies from "../Technologies";

const TechnologyLaunch = () => {
  const { technology } = data;

  const launch = technology.find((item) => item.name === "Launch vehicle");

  const { name, images, description } = launch;

  return <Technologies name={name} images={images} description={description} />;
};

export default TechnologyLaunch;
