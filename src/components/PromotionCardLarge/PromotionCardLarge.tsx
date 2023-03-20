import React from "react";
import { Link } from "react-router-dom";
import "./PromotionCardLarge.css";
const promotionCardLarge = ({ type, title, coin }: any) => {
  return (
    <Link to="/">
      <div className="promotionCardContainerLarge">
        <div className="promotionCardBodyLarge">
          <h4>{type}</h4>
          <h2>{title}</h2>
          <h3>DESDE</h3>
          <h2>{coin}:$2,950</h2>
          <a className="primaryButton"> RESERVA YA</a>
        </div>
      </div>
    </Link>
  );
};

export default promotionCardLarge;
