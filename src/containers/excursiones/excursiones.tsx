import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import SearchCard from "../../components/SearchCard/SearchCard";

import styled from "styled-components";
import img from '../../assets/excusionesbanner.png'

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
      <SearchCard title="LAS EXPERIENCIAS QUE TE MERECES" />
      <Footer />
    </div>
  );
};

export default Trasport;
