import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import SearchCard from "../../components/SearchCard/SearchCard";

import styled from "styled-components";
import img from "../../assets/excusionesbanner.png";
import HotelCard from "../../components/HotelCard/HotelCard";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import PromotionBanner from "../../components/PromotionBanner/PromotionBanner";
import Card from "../../components/Card/Card";
import PromotionImage from "../../components/PromotionImage/PromotionImage";

const Trasport = () => {
  const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    width: 2000px;
    height: 2000px;
    padding-top: 3rem;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 28rem;
    background-position-y: center;
    border: 0px solid #000;
  `;
  return (
    <div>
      <HeaderPage />
      {/* <img
        className="AppBanner"
        src={"/FerrieBanner.png"}
        alt={"pool vacation"}
      /> */}
      <Content className="bannerText">
        <h1>
          Travel safely
          <br />
          and comfortably
        </h1>
        <h2>Reserva desde: US$ 249.00 p/p</h2>
        {/* <Link to="/" className="tertiaryButton">
            !Reserva ya!
          </Link> */}
      </Content>
      <br />
      <SearchCard title="LAS EXPERIENCIAS QUE TE MERECES" />
      <br />
      <div className="container">
        <div className="HotelCardContainer">
          <HotelCard />
          <HotelCard />
        </div>
        <br/>
        <h2 className="subtitle">Destinos en R.D</h2>
        <br />
        <div className="promotionCard" style={{ justifyContent: "center" }}>
          <PromotionCard title={"NORTE"} coin={"USD"} price={""} show={false} />
          <PromotionCard title={"SUR"} coin={"RD"} price={""} show={false} />
          <PromotionCard title={"ESTE"} coin={"RD"} price={""} show={false} />
          <PromotionCard title={"OESTE"} coin={"RD"} price={""} show={false} />
        </div>
        <br/>
        <article className="AppSuscribe">
            <PromotionBanner/>
          </article>
          <br/>
          <br />
          <h2 className="subtitle">Destinos ""</h2>
        <h2 className="subtitle2">Desde USD: $72.00 no te la pierdas.</h2>
        <br/>
        <div className="AppOferts">
          <Card title="Snorkeling Punta Cana Beach" image={"./snorkeling.png"}/>
          <Card title="Excusión
Isla Catalina" image="./islacatalina.png"/>
          <Card title="Excusión Isla Saona" image="islasaona.png"/>
          <Card title="Excursón Santo Domingo" image="citytour.png"/> <Card />
          <Card />
         
        </div>
        <br />
        <PromotionImage />
      </div>
      <Footer />
    </div>
  );
};

export default Trasport;
