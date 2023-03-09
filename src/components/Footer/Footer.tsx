import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <img
        src={"/logos/vacalogonegro.svg"}
        alt={"on"}
        style={{ height: 40, marginBottom: 10 }}
      />
      <p>
        Somos una agencia de Vacaciones Online que proporciona soluciones de
        vacaciones completas al momento de planificar y reservar tus vacaciones
        en la Republica Dominicana o en el exterior.
      </p>
      <div className="footerBody">
        <div>
          <h3>Contactanos</h3>
          <p>
            Ave. Winston Churchill #1550,
            <br />
            Plaza New Orleans, Suite 502 Urb. <br />
            Fernández, Santo Domingo
          </p>
          <p>(809)616-3000</p>
          <p>info@vaca.do</p>
        </div>
        <div>
          <h3>Servicios</h3>
          <p>Hoteles</p>
          <p>Excusiones</p>
          <p>Boletos aereos</p>
          <p>Cruceros</p>
          <p>Vuelos a Miami</p>
        </div>
        <div>
          <h3>Informaciones</h3>
          <p>Terminos de uso</p>
          <p>Sobre nosotros</p>
          <p>Politicas de Privacidad</p>
          <p>Contactanos</p>
        </div>
        <h3>Verificaciones</h3>
      </div>
      <hr />
      <h4
        style={{
          fontSize: 8,
          marginTop: 10,
          marginBottom: 10,
          borderTopColor: "gray",
          borderTopWidth: 1,
        }}
      >
        Copyright © 2023 - Una marca de Estilo Travel S.R.L.
      </h4>
    </footer>
  );
};

export default Footer;
