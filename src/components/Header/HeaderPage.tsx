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
        <img src={"/logos/vacalogo.svg"} alt={"on"} style={{ height: 40 }} />
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
        <Link className="col text-center" to="/hotel">
        <img src="/logos/hotelesicon.svg" style={{height:12}}/>  Hoteles
        </Link>
        <Link className="col text-center" to="/ferrie">
        <img src="/logos/cruseroicon.svg" style={{height:12}}/>  Cruceros
        </Link>
        <Link className="col text-center" to="/">
        <img src="/logos/disneyicon.svg" style={{height:12}}/>   Disney
        </Link>
        <Link className="col text-center" to="/">
        <img src="/logos/excursionesicon.svg" style={{height:12}}/>   Excursiones
        </Link>
        <Link className="col text-center" to="/">
        <img src="/logos/vuelosicon.svg" style={{height:12}}/>    Vuelos
        </Link>
        <Link className="col text-center" to="/">
        <img src="/logos/ofertasicon.svg" style={{height:12}}/>   Ofertas
        </Link>
        <Link className="col text-center" to="/">
        <img src="/logos/ferrieicon.svg" style={{height:12}}/>    Ferrie
        </Link>
      </nav>
    </header>
  );
};

export default HeaderPage;
