import React from "react";
import "./DetailReservationCard.css";
const DetailReservationCard = () => {
  return (
    <div className="detailReservationCardContainer">
      <h3>BE LIVE COLLECTION MARIEM</h3>
      <h4>HOTEL - PUERTO PLATA</h4>
      <hr />
      <h3>
        Desde: <span>usd$72.00</span>
      </h3>
      <h5>• Precio por persona</h5>
      <h5 style={{ marginBottom: 25 }}>
        • Tarifa sujeta a cambios segun disponibilidad
      </h5>
      <hr />
      <h4>UBICACIÓN EN EL MAPA</h4>
      <div className="detailMap"></div>
      <div className="detailNavigation">
        <h5>OFERTAS</h5>
        <h5>HOTEL</h5>
        <h5>PUERTO PLATA</h5>
      </div>
      <input
        type="button"
        value="RESERVAR/COTIZAR"
        className="buttonDetailCard"
      />
      <br/>
    </div>
  );
};

export default DetailReservationCard;
