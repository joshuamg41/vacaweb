import React from "react";
import "./Suscribe.css";
const Suscribe = () => {
  return (
    <div className="suscribeContainer">

    <div className="suscribe">
      <h2 className="subtitle">
        Suscríbete y descubre más sobre nuestras nuevas ofertas.
      </h2>
      <p className="bodyText">
        Suscríbete para recibir información sobre nuestras ofertas y ofertas
        especiales. Puede darse de baja en cualquier momento.
      </p>
      <form className="suscribeForm">
        <input className="suscribeinput" placeholder="Nombre" />
        <input className="suscribeinput" placeholder="Apellido" />
        <input className="suscribeinput" placeholder="Correo" type="email" />
        <select className="suscribeinput">
          <option value="1">Republica Dominicana</option>
          <option value="2">Mujer</option>
        </select>
        <button className="primaryButton">Suscribirse</button>
      </form>
    </div>
    </div>
  );
};

export default Suscribe;
