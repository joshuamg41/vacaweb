import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({title, image}:any) => {
  return (
    <div className="cardContainer">
      <img src={image ? image : "/Playa.png"} alt={"promotion"} className="cardImg" />
      <div className="cardBody">
        <h2 className="cardTitle">
       { title ? title :  "Be Live Experience snorkeling"}
        </h2>
        
        <h4 className="cardDetails">
          Oferta Valida Hasta <br /> 31 febrero 2021
        </h4>
        <h4 className="cardDetails">Punta Cana</h4>
        <h3 className="cardFrom">Desde</h3>
        <div className="flexJustify">

        <h3 className="cardPrice">USD $80.00</h3>
        <Link to='/hoteldetail' className="bodyTextSecundary">Ver detalle</Link>
        
        </div>
      </div>
    </div>
  );
};

export default Card;
