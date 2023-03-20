import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import SearchCard from "../../components/SearchCard/SearchCard";
import styled from "styled-components";
import img from "../../assets/busbanner.png";
import buggies from "../../assets/buggies.png";
import PromotionImage from "../../components/PromotionImage/PromotionImage";
import PromotionBanner from "../../components/PromotionBanner/PromotionBanner";

const Ofertas = () => {
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
          The experiences
          <br />
          you deserve
        </h1>
        <h2>Reserva desde: US$ 249.00 p/p</h2>
        {/* <Link to="/" className="tertiaryButton">
            !Reserva ya!
          </Link> */}
      </Content>
      <br />
      <div className="container">
        <h1 style={{ fontWeight: "400", fontSize: 50, color: 'gray' }}>Ofertas</h1>
        <br />
        <article className="AppSuscribe">
          <PromotionBanner
            img={img}
            title={"US$ 80.00"}
            body={
              "Excusión Bugies playa Macao - Laguna \n - Almuerzo\n - Playa"
            }
          />
        </article>
        <br />
        <br />
        <h2 className="subtitle">Aprovecha nuestras excusiones de temporada</h2>
        <h2 className="subtitle2">Desde USD: $72.00 no te la pierdas.</h2>
        <br />
        <div className="AppOferts">
        <Card title="Snorkeling Punta Cana Beach" image={"./snorkeling.png"}/>
          <Card title="Excusión
Isla Catalina" image="./islacatalina.png"/>
          <Card title="Excusión Isla Saona" image="islasaona.png"/>
          <Card title="Excursón Santo Domingo" image="citytour.png"/> <Card />
          <Card />
        </div>
        <br />
        <article className="AppSuscribe">
          <PromotionBanner
            img={buggies}
            title={"US$ 80.00"}
            body={
              "Excusión Bugies playa Macao - Laguna \n - Almuerzo\n - Playa"
            }
          />
        </article>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Ofertas;
