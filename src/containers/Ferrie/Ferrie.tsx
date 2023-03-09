import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import SearchCard from "../../components/SearchCard/SearchCard";

const Ferrie = () => {
  return (
    <div>
      <HeaderPage />
      {/* <img
        className="AppBanner"
        src={"/FerrieBanner.png"}
        alt={"pool vacation"}
      /> */}
      <div className="bannerText">
        <h1>
          Viaja en el <br />
          Feries del Caribe
        </h1>
        <h2>Reserva desde: US$ 249.00 p/p</h2>
        {/* <Link to="/" className="tertiaryButton">
            !Reserva ya!
          </Link> */}
      </div>
          <SearchCard title="VIAJA EN EL FERIES DEL CARIBE CON VACA.DO" />
      <Footer />
    </div>
  );
};

export default Ferrie;
