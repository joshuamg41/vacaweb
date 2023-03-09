import React from "react";
import HeaderPage from "../../components/Header/HeaderPage";
import SearchCard from "../../components/SearchCard/SearchCard";
import Footer from "../../components/Footer/Footer";
import HotelCard from "../../components/HotelCard/HotelCard";
import "./Hotel.css";
import HotelCardLocation from "../../components/HotelCardLocation/HotelCardLocation";
import PromotionBanner from "../../components/PromotionBanner/PromotionBanner";
import Card from "../../components/Card/Card";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
const Hotel = () => {
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
          Hospédate en un
          <br />
          fantastico hotel
        </h1>
        <h2>Reserva desde: US$ 249.00 p/p</h2>
        {/* <Link to="/" className="tertiaryButton">
          !Reserva ya!
        </Link> */}
      </div>
      <SearchCard title="VIAJA EN EL FERIES DEL CARIBE CON VACA.DO" />
      <div className="container">
        <div className="HotelCardContainer">
          <HotelCard />
          <HotelCard />
        </div>
        <br />
        <h2 className="subtitle ">Destinos en R.D</h2>
        <br />
        <div className="hotelCardLocationContainer">
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
        </div>
        <article className="AppSuscribe">
          <PromotionBanner />
        </article>
        <h2 className="subtitle">Nuevas ofertas no te las pierdas</h2>
        <h2 className="subtitle2">Desde USD: $12.00 no te la pierdas.</h2>
        <br />
        <div className="AppOferts">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <br />
        <div className="imageParalax"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
