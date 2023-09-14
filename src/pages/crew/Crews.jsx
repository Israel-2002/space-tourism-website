import React from "react";

const Crews = ({ name, images, role, bio }) => {
  return (
    <article className="crews">
      <div className="crews__content">
        <div className="crews__content-left">
          <h3 className="crews__role">{role}</h3>
          <h2 className="crews__name">{name}</h2>
          <p className="crews__bio">{bio}</p>
        </div>
        <div className="crews__content-image">
          <img src={images.png} alt="" />
        </div>
      </div>
    </article>
  );
};

export default Crews;
