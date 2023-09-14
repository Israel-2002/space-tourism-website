import React from "react";
import { Outlet } from "react-router-dom";

const Technology = () => {
  return (
    <section className="technology">
      <div className="technology__container">
        <h3 className="technology__title">
          <span className="mini-title-num">03</span>
          <span className="mini-title">Space launch 101</span>
        </h3>

        <Outlet />
      </div>
    </section>
  );
};

export default Technology;
