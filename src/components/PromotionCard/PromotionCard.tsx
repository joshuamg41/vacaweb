import React from "react";
import { Link } from "react-router-dom";
import "./PromotionCard.css";
const PromotionCard = ({type, title, coin}:any) => {
  return (
    <Link to='/detail'>
    <div className="promotionCardContainer">
      <div className="promotionCardBody">
        <h4>{type}</h4>
        <h2>{title}</h2>
        <h3>DESDE</h3>
        <h2>{coin}:$2,950</h2>
      </div>
    </div>
    </Link>
  );
};

export default PromotionCard;
