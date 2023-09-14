import React from "react";
import { Outlet } from "react-router-dom";

const Destination = () => {
  return (
    <section className="destination">
      <div className="destination__container container">
        <h3 className="destination__title">
          <span className="mini-title-num">01</span>
          <span className="mini-title">Pick your destination</span>
        </h3>

        <Outlet />
      </div>
    </section>
  );
};

export default Destination;
