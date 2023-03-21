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
      Agencia de Trasporte y Excursiones en Punta Cana, República Dominicana.
      </p>
      <div className="footerBody">
        <div>
          <h3>Contactanos</h3>
          <p>
            Republica Dominicana, Veron Punta Cana
              <br />
            Calle Domingo maíz próximo a ciudad las palmas. <br />
            plaza Guillermo 1
          </p>
          <p>(809)396-2749</p>
          <p>info@jasambri.do</p>
        </div>
        <div>
          <h3>Servicios</h3>
          <p>Trasporte</p>
          <p>Excursiones</p>
         
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
          textAlign:"left",
          width:"90%"
        }}
      >
        Copyright © 2023 - JASAMBRI Travel.
      </h4>
    </footer>
  );
};

export default Footer;
