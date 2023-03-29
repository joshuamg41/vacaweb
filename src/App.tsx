import React, { useEffect, useState } from "react";
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
import styled from "styled-components";
import img from "./assets/vacacion.png";
import BannerPromotion from "./components/BannerPromotion/BannerPromotion";
import hotelBannerImg from "./assets/hoteles.png";
import hotelIcon from "./assets/hotelIcon.svg";
import hotelIcon2 from "./assets/hotelIcon2.svg";
import CruceroBanner from "./assets/crucerosbanner.png";
import DisneyBanner from "./assets/disney.png";
import PlaneBanner from "./assets/plane.png";
import ExcursionesBanner from "./assets/excursiones.png";
import OfertasBanner from "./assets/ofertas.png";
import FerrieBanner from "./assets/ferrie.png";
import OfertasBanner2 from "./assets/ofertas2.png";
import PlaneIcon from "./assets/iconPlane.svg";
import CruceroIcon from "./assets/cruceroIcon.svg";
import CruceroIcon2 from "./assets/cruceroIcon2.svg";
import DisneyIcon2 from "./assets/disneyIcon2.svg";
import ExcusionesIcon2 from "./assets/excursionIcon2.svg";
import OfertasIcon2 from "./assets/ofertasIcon2.svg";
import FerriIcon2 from "./assets/FerrieIcon2Banner.svg";
import ServiceIcon from "./components/ServicesIcons/ServiceIcon";
import DisneyIcon from "./assets/disneyIcon.svg";
import OfertasIcon from "./assets/OfertasIcon.svg";
import ExcursionesIcon from "./assets/excursionIcon.svg";
import FerrieIcon from "./assets/FerrieIcon.svg";
import InsuranceIcon from "./assets/insuranceIcon.svg";

export const Content = styled.div`
  background-image: url(${img});
`;

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <div>
        <Content className="bannerText">
          <h1>
            Vive la
            <br /> experiencia <br />
            con Vaca
          </h1>
          <br />
          <div className="bannerhome">
            {/* <Link to="/trasports" className="tertiaryButton">
                !Reserva ahora!
              </Link> */}
            <h3 style={{ color: "white", fontWeight: "500", fontSize: 25 }}>
              Todo Incluido desde US 72.00
            </h3>
          </div>
        </Content>
        {/* <SearchCard /> */}
        <div className="container">
          <div style={{ margin: "40px 0 " }}>
            <h1 style={{ textAlign: "center" }}>Vaca Estilo Travel</h1>
            <br />
            <p style={{ textAlign: "center", padding: "0 15%", fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              rowGap: 40,
              marginBottom: 40,
              justifyItems: "center",
            }}
          >
            <ServiceIcon
              title="Vuelos"
              icon={PlaneIcon}
              state={{ page: "vuelos", align: "flex-end" }}
            />
            <ServiceIcon
              title="Hoteles"
              icon={hotelIcon2}
              state={{ page: "hoteles", align: "flex-end" }}
            />
            <ServiceIcon
              title="Disney"
              icon={DisneyIcon}
              state={{ page: "disney", align: "flex-end" }}
            />
            <ServiceIcon
              title="Cruceros"
              icon={CruceroIcon}
              state={{ page: "cruceros", align: "flex-start" }}
            />
            <ServiceIcon
              title="Ofertas"
              icon={OfertasIcon}
              state={{ page: "ofertas", align: "flex-end" }}
            />
            <ServiceIcon
              title="Excusiones"
              icon={ExcursionesIcon}
              state={{ page: "excursiones", align: "flex-start" }}
            />
            <ServiceIcon
              title="Ferrie"
              icon={FerrieIcon}
              state={{ page: "ferrie", align: "flex-end" }}
            />
            <ServiceIcon
              title="Seguros"
              icon={InsuranceIcon}
              state={{ page: "ofertas2", align: "flex-start" }}
            />
          </div>
          <BannerPromotion
            title={"Hoteles"}
            img={hotelBannerImg}
            icon={hotelIcon}
            background={"#707070"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row"}
            full={true}
            position={"left"}
            state={{page: 'hoteles', align: 'flex-end'}}
          />
          <BannerPromotion
            title={"Cruceros"}
            img={CruceroBanner}
            icon={CruceroIcon2}
            background={"#055C87"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1.8}
            contenRate={1}
            direction={"row-reverse"}
            full={true}
            position={"right"}
            state={{page: 'cruceros', align: 'flex-start'}}
          />
          <BannerPromotion
            title={"Disney"}
            img={DisneyBanner}
            icon={DisneyIcon2}
            background={"#000"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row"}
            full={true}
            position={"14%"}
            state={{page: 'disney', align: 'flex-end'}}
          />
          <BannerPromotion
            title={"Excursiones"}
            img={ExcursionesBanner}
            icon={ExcusionesIcon2}
            background={"#57A8EA"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row-reverse"}
            full={true}
            position={"right"}
            state={{page: 'excursiones', align: 'flex-start'}}
          />
          <BannerPromotion
            title={"Vuelos"}
            img={PlaneBanner}
            icon={PlaneIcon}
            background={"#fff"}
            color={"#000"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row"}
            full={true}
            textPosition={"left"}
            state={{page: 'vuelos', align: 'flex-end'}}
          />
          <BannerPromotion
            title={"Ofertas"}
            img={OfertasBanner}
            icon={OfertasIcon2}
            background={"#141416"}
            position={"center"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1.5}
            direction={"row-reverse"}
            full={true}
            state={{page: 'ofertas', align: 'flex-start'}}
          />
          <BannerPromotion
            title={"Ferrie"}
            img={FerrieBanner}
            icon={FerriIcon2}
            background={"#1E324A"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row"}
            full={true}
            state={{page: 'ferrie', align: 'flex-end'}}
          />
          <BannerPromotion
            title={"Ofertas"}
            img={OfertasBanner2}
            icon={hotelIcon}
            background={"#141416"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1.5}
            direction={"row-reverse"}
            full={true}
            position={"75%"}
            state={{page: 'ofertas2', align: 'flex-start'}}
          />
          {/* <section>
            <div className="promotionCard">
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
          </section> */}
          <br />
          {/* <section>
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
          </section> */}
          <article className="AppSuscribe">
            <PromotionBanner />
          </article>
        </div>
        <Suscribe />

        {/* <PromotionImage /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
