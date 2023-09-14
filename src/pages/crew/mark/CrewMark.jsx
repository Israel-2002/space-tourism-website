import React from "react";
import data from "../../../assets/data.json";
import Crews from "../Crews";

const CrewMark = () => {
  const { crew } = data;

  const mark = crew.find((member) => member.name === "Mark Shuttleworth");

  return (
    <Crews
      name={mark.name}
      images={mark.images}
      role={mark.role}
      bio={mark.bio}
    />
  );
};

export default CrewMark;
