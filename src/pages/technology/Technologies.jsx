import React from "react";
import Navbar from "./navbar/Navbar";

const Technologies = ({ name, images, description }) => {
  return (
    <article className="technologies">
      <div className="technologies__left">
        <Navbar />
        <div className="technologies__detail">
          <h4 className="technologies__mini-title">The Terminology</h4>
          <h2 className="technologies__name">{name}</h2>
          <p className="technologies__description">{description}</p>
        </div>
      </div>
      <div className="technologies__right">
        <img
          className="technologies__landscape"
          src={images.landscape}
          alt=""
        />
        <img className="technologies__portrait" src={images.portrait} alt="" />
      </div>
    </article>
  );
};

export default Technologies;
