import React from "react";
import data from "../../../assets/data.json";
import Crews from "../Crews";

const CrewVictor = () => {
  const { crew } = data;

  const victor = crew.find((member) => member.name === "Victor Glover");

  return (
    <Crews
      name={victor.name}
      images={victor.images}
      role={victor.role}
      bio={victor.bio}
    />
  );
};

export default CrewVictor;
