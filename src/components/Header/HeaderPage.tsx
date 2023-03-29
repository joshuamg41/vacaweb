import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPage.css";

const HeaderPage = () => {
  return (
    <header className="headerContainer">
      <div className="headerTopContainer">
        <div className="headerContactIcons">
          <Link to={"/"} >
            <i className="fa-regular fa-envelope"></i>
          </Link>
          <a href="https://www.facebook.com/vacado" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/vacadord/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          {/* <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a> */}
          {/* <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a> */}
          <a href="https://www.tiktok.com/@vacadord" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          {/* <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a> */}
        </div>
        <Link to="/">
        <img src={"/logos/vacalogo.svg"} alt={"on"} style={{ height: 40 }} />
        </Link>
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
        <Link className="col text-center" to="/contact"  state={{page: 'hoteles', align: 'flex-end'}}>
          <img src="/logos/hotelesicon.svg" style={{ height: 12 }} /> Hoteles
        </Link>
        <Link className="col text-center" to="/contact"  state={{page: 'cruceros', align: 'flex-start'}}>
          <img src="/logos/cruseroicon.svg" style={{ height: 12 }} /> Cruceros
        </Link>
        <Link className="col text-center" to="/contact" state={{page: 'disney', align: 'flex-end'}}>
          <img src="/logos/disneyicon.svg" style={{ height: 12 }} /> Disney
        </Link>
        <Link className="col text-center" to="/contact" state={{page: 'excursiones', align: 'flex-start'}}>
          <img src="/logos/excursiones.svg" style={{ height: 12 }} />{" "}
          Excursiones
        </Link>
        <Link className="col text-center" to="/contact" state={{page: 'vuelos', align: 'flex-end'}}>
          <img src="/logos/vuelosicon.svg" style={{ height: 12 }} /> Vuelos
        </Link>
        <Link className="col text-center" to="/contact" state={{page: 'ofertas', align: 'flex-start'}}>
          <img src="/logos/ofertasicon.svg" style={{ height: 12 }} /> Ofertas
        </Link>
        <Link className="col text-center" to="/contact" state={{page: 'ferrie', align: 'flex-end'}}>
          <img src="/logos/ferrieicon.svg" style={{ height: 12 }} /> Ferrie
        </Link>
      </nav>
    </header>
  );
};

export default HeaderPage;
