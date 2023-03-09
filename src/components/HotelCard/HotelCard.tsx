import React from "react";
import "./HotelCard.css";
const HotelCard = () => {
  return (
    <div className="hotelCardBody">
      <h4>Puerto Plata</h4>
      <h3>Oferta hotel XYZ</h3>
      <p>Desde</p>
      <h3 className="HotelCardPrice">RD:$1,234</h3>
    </div>
  );
};

export default HotelCard;
