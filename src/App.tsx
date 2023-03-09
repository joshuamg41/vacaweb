import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import HeaderPage from "./components/Header/HeaderPage";
import PromotionCard from "./components/PromotionCard/PromotionCard";
import SearchCard from "./components/SearchCard/SearchCard";
import PrommotionCardLarge from "./components/PromotionCardLarge/PromotionCardLarge";
import Card from "./components/Card/Card";
import PromotionBanner from "./components/PromotionBanner/PromotionBanner";
import Footer from "./components/Footer/Footer";
import Suscribe from "./components/Suscribe/Suscribe";
import PromotionImage from "./components/PromotionImage/PromotionImage";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <div>
        {/* <img className="AppBanner" src={"/Clip.png"} alt={"pool vacation"} /> */}
        <div className="bannerText">
          <h1>
            Vive la <br />
            experiencia
          </h1>
          <h2>Todo Incluido desde US 72.00</h2>
          <br/>
          <div className="bannerhome">
            <Link to="/" className="tertiaryButton">!Reserva ya!</Link>
          </div>
        </div>
        <SearchCard />
        <div className="container">
          <section>
            <div className="promotionCard">
              <PromotionCard
                type={"EXCUSIONES"}
                title={"Day Pass todo incluido"}
                coin={"USD"}
              />
              <PromotionCard
                type={"EXCUSIONES"}
                title={"Day Pass todo incluido"}
                coin={"USD"}
              />
              <PromotionCard
                type={"EXCUSIONES"}
                title={"Excursiones Isla Saona"}
                coin={"RD"}
              />
              <PromotionCard
                type={"EXCUSIONES"}
                title={"Excursiones Isla Saona"}
                coin={"RD"}
              />
              <PromotionCard
                type={"EXCUSIONES"}
                title={"Excursiones Isla Saona"}
                coin={"RD"}
              />
            </div>
            <div className="promotionCardLarge">
              <PrommotionCardLarge
                type={"EXCUSIONES"}
                title={"Day Pass todo incluido"}
                coin={"USD"}
              />
              <PrommotionCardLarge
                type={"FERRIES"}
                title={"Day Pass todo incluido"}
                coin={"USD"}
              />
            </div>
          </section>
          <br />
          <section>
            <h2 className="subtitle">
              Aprovecha nuestras ofertas de temporada
            </h2>
            <h2 className="subtitle2">Desde USD: $72.00 no te la pierdas.</h2>
            <br />
            <div className="AppOferts">
              <Card />
              <Card />
              <Card />
              <Card /> <Card />
              <Card />
              <Card />
            </div>
          </section>
          <article className="AppSuscribe">
            <PromotionBanner />
          </article>
        </div>
        <Suscribe />
        <PromotionImage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
