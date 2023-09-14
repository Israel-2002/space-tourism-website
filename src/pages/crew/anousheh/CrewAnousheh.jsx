import React from "react";
import data from "../../../assets/data.json";
import Crews from "../Crews";

const CrewAnousheh = () => {
  const { crew } = data;

  const anousheh = crew.find((member) => member.name === "Anousheh Ansari");

  return (
    <Crews
      name={anousheh.name}
      images={anousheh.images}
      role={anousheh.role}
      bio={anousheh.bio}
    />
  );
};

export default CrewAnousheh;
