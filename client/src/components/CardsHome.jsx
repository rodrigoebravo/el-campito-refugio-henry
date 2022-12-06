import React from "react";
import { Link } from "react-router-dom";

const CardsHome = ({descriptionBtn, classNameDiv,links }) => {
  return (
    <div>
      <Link to={`/${links}`}>
        <div className={classNameDiv}>{descriptionBtn}</div>
      </Link>
    </div>
  );
};

export default CardsHome;
