import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPage.css";

const HeaderPage = () => {
  return (
    <header className="headerContainer">
      <div className="headerTopContainer">
        <div className="headerContactIcons">
          <i className="fa-regular fa-envelope"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <img src={"/logos/vacalogo.svg"} alt={"on"} style={{ height: 65 }} />
        <div className="headerButtons">
          <Link className="secundaryButton" to="/">
            Acceder
          </Link>
          <Link className="primaryButton" to="/">
            Crear cuenta
          </Link>
        </div>
      </div>
      <nav className="headerNav">
        <Link className="col text-center" to="/">
          Servicios
        </Link>
        <Link className="col text-center" to="/excursiones">
          Excursiones
        </Link>
        <Link className="col text-center" to="/trasports">
          Trasporte
        </Link>
        <Link className="col text-center" to="/ofertas">
          Ofertas
        </Link>
        <Link className="col text-center" to="/contacto">
          Contáctanos
        </Link>
        {/* <Link className="col text-center" to="/">
        <img src="/logos/ofertasicon.svg"  alt="icon"style={{height:12}}/>   Ofertas
        </Link>
        <Link className="col text-center" to="/">
        <img src="/logos/ferrieicon.svg" alt="icon"style={{height:12}}/>    Ferrie
        </Link> */}
      </nav>
    </header>
  );
};

export default HeaderPage;
