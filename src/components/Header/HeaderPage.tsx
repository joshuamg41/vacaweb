import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPage.css";

const HeaderPage = () => {
  return (
    <header className="headerContainer">
      <div className="headerTopContainer">
        <div className="headerContactIcons">
          {/* <i className="fa-regular fa-envelope"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i> */}
          {/* <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-youtube"></i> */}
        </div>
        {/* <img src={"/logos/vacalogo.svg"} alt={"on"} style={{ height: 65 }} /> */}
        <div className="headerButtons">
          <div className="headerContactIcons">
          <Link  to="/contacto">
              <i className="fa-regular fa-envelope" style={{ color: '#ff9300' }}></i>
            </Link>
            {/* <a href="https://www.instagram.com/jasambritravel/">
              <i className="fa-brands fa-facebook"></i>
            </a> */}
            <a href="https://www.instagram.com/jasambritravel/">
              <i className="fa-brands fa-instagram" style={{ color: '#ff9300' }}></i>
            </a>
            {/* <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-youtube"></i> */}
          </div>
          {/* <Link className="secundaryButton" to="/">
            Acceder
          </Link> */}
          {/* <Link className="primaryButton" to="/">
          Acceder
          </Link> */}
        </div>
      </div>
      <nav className="headerNav">
        <Link className="col text-center justify-content-center" to="/home">
          <i className="fa-solid fa-house" style={{ color: '#ff9300' }}></i>
          Inicio
        </Link>
        <Link className="col text-center justify-content-center" to="/">
          <i className="fa-solid fa-bus" style={{ color: '#ff9300' }}></i>
          Trasporte
        </Link>
        <Link className="col text-center justify-content-center" to="/excursiones">
          <i className="fa-solid fa-plane" style={{ color: '#ff9300' }}></i>
          Excursiones
        </Link>
        {/* <Link className="col text-center" to="/ofertas">
          Ofertas
        </Link> */}
        <Link className="col text-center justify-content-center" to="/contacto">
          <i className="fa-regular fa-address-book" style={{ color: '#ff9300' }}></i>
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
