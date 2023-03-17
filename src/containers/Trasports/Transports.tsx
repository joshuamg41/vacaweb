import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import SearchCard from "../../components/SearchCard/SearchCard";
import styled from 'styled-components';
import img from "../../assets/busbanner.png";
import Maps from "./maps";
const Trasports = () => {

const Content = styled.div`
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
          The experiences
          <br />
          you deserve
        </h1>
        <h2>Reserva desde: US$ 249.00 p/p</h2>
        {/* <Link to="/" className="tertiaryButton">
            !Reserva ya!
          </Link> */}
      </Content>
      <Maps/>
      <br />
      <SearchCard title="LAS EXPERIENCIAS QUE NECESITAS" />
      <br />
      <div className="container">
        <h2 className="subtitle">Destinos en R.D</h2>
        <br />
        <div className="promotionCard" style={{ justifyContent: "center" }}>
          <PromotionCard title={"NORTE"} coin={"USD"} price={""} show={false} />
          <PromotionCard title={"SUR"} coin={"RD"} price={""} show={false} />
          <PromotionCard title={"ESTE"} coin={"RD"} price={""} show={false} />
          <PromotionCard title={"OESTE"} coin={"RD"} price={""} show={false} />
        </div>
        <br />
        <br />
        <h2 className="subtitle">Destinos ""</h2>
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
        <br />
        <h2 className="subtitle">Mas Destinos"</h2>
        <br />
        <div className="AppOferts">
          <Card />
          <Card />
          <Card />
          <Card /> <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trasports;
