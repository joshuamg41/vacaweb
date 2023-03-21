import React from "react";
import DetailReservationCard from "../../components/DetailReservationCard/DetailReservationCard";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "./HotelDetail.css";
import img from "../../assets/buggiebanner.png";
const HotelDetail = () => {
  const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    width: 2000px;
    height: 2000px;
    padding-top: 3rem;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 25rem;
    background-position-y: center;
    border: 0px solid #000;
  `;
  return (
    <div>
      <HeaderPage />
      <Content className="bannerText">
        {/* <Link to="/" className="tertiaryButton">
            !Reserva ya!
          </Link> */}
      </Content>
      <div className="container">
        <div className="hotelDetails">
          <div className="galeryhoteldetails">
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
          </div>
          <div className="hotelDetailbody">
            <h4>
              Recorrido en Bugie en Grupo por el Area de macao parada en
              distintos Lugares como lo es La piscina natural
            </h4>
            <br/>
            <h3>RECORRIDO</h3>
            <br/>
            <h5>Ref. 215983</h5>
            <h3>
              Lugar de Salida: <br />
              Bavaro Selección: de Bugie
            </h3>
            <br/>
            <h3>PRIMERA PARADA</h3>
            <h4>
              Casa del cafe descripcion There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words 
            </h4>
            <br/>
            <h3>SEGUNDA PARADA</h3>
            <h4>
              Casa del cafe descripcion There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words 
            </h4>
            <br/>
            <h3>TERCERA PARADA</h3>
            <h4>
              Casa del cafe descripcion There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words 
            </h4>
            <br/>
            <h3>PARADA FINAL</h3>
            <h4>
              Casa del cafe descripcion There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words 
            </h4>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default HotelDetail;
