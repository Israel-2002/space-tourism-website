import React from "react";
import data from "../../../assets/data.json";
import Crews from "../Crews";

const CrewDouglas = () => {
  const { crew } = data;

  const douglas = crew.find((member) => member.name === "Douglas Hurley");

  return (
    <Crews
      name={douglas.name}
      images={douglas.images}
      role={douglas.role}
      bio={douglas.bio}
    />
  );
};

export default CrewDouglas;
