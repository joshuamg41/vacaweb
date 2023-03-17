import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import HeaderPage from "./components/Header/HeaderPage";
import PromotionCard from "./components/PromotionCard/PromotionCard";
import PrommotionCardLarge from "./components/PromotionCardLarge/PromotionCardLarge";
import Card from "./components/Card/Card";
import PromotionBanner from "./components/PromotionBanner/PromotionBanner";
import Footer from "./components/Footer/Footer";
import PromotionImage from "./components/PromotionImage/PromotionImage";
import styled from 'styled-components';
import img from './assets/busbanner.png';

export const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  width: 2000px;
  height: 2000px;
  padding-top: 3rem;
  background-size: cover  ;
  background-repeat: no-repeat;
  width: 100%;
  height: 28rem;
  background-position-y: center;
  border: 0px solid #000;
`;



function App() {
  return (
    <div className="App">
      <HeaderPage />
      <div>
        {/* <img className="AppBanner" src={"/Clip.png"} alt={"pool vacation"} /> */}
        <Content  >
          <h1 className="bannerTexth1">
          Travel safely 
          </h1>
          <h2 className="bannerTexth2">Transporte desde ""</h2>
          <br/>
          <div className="bannerhome">
            <Link to="/trasports" className="tertiaryButton">!Reserva ahora!</Link>
          </div>
        </Content >
        <br/>
        <div className="container">
     
          <section>
          <br/>
            <div className="promotionCard">
           
              <PromotionCard
                type={"RUTAS"}
                title={"San Felipe Puerto Plata"} 
                coin={"USD"}
              />
              <PromotionCard
                type={"RUTAS"}
                title={"Higuey La Altagracia"}
                coin={"RD"}
              />
              <PromotionCard
                type={"RUTAS"}
                title={"Excursiones Isla Saona"}
                coin={"RD"}
              />
              <PromotionCard
                type={"RUTAS"}
                title={"Excursiones Isla Saona"}
                coin={"RD"}
              />
            </div>
            <br/>
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
          <br/>
        {/* <Suscribe /> */}
        <br />
        <PromotionImage />
        <br/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
