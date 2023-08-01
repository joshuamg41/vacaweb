import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import SearchCard from "../../components/SearchCard/SearchCard";
import styled from "styled-components";
import img from "../../assets/busbanner.png";
import GoogleApiWrapper from "./maps";
import ModalUM from "../../components/Modal/ModalUM";
import { Switch } from "@mui/material";
import { width } from "@mui/system";
import Counter from "../../components/Counter/Counter";
import Autocomplete from "react-google-autocomplete";
import "./Transports.css";
const Trasports = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [latitude, setLatitude] = React.useState(18.561254);
  const [longitude, setLongitude] = React.useState(-68.365072);
  const [serviceType, setSeviceType] = React.useState("trasport");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [pickup, setPickup] = React.useState("");
  const [destino, setDestino] = React.useState("");
  const [aeropuerto, setAeropuerto] = React.useState("");
  const [hotel, setHotel] = React.useState("");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [child, setChild] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    padding-top: 3rem;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 28rem;
    background-position-y: center;
    border: 0px solid #000;
    padding-left:10px;

  `;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const scrollToSection = () => {
    if (sectionRef.current !== null) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const changeLocation = (e: any) => {
    setSeviceType(e);
    if (e === "Toaeropuerto" && aeropuerto === "aeropuertopuntacana")
      setLatitude(18.56335);
    setLongitude(-68.367654);
    if (e === "fromaeropuertoHotel") {
      setLatitude(18.56335);
      setLongitude(-68.367654);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  };

  return (
    <div>
      <HeaderPage />
      {/* <img
        className="AppBanner"
        src={"/FerrieBanner.png"}
        alt={"pool vacation"}
      /> */}


      <Content className="bannerText" >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10%' }}>
          <div>

            <img src={"/jasambrilogo.png"} alt={"on"} style={{ height: 200, }} />
          </div>
          {/* <div>

            <h2>Viajes  <br /> Confortables y Seguros<br /> <span onClick={scrollToSection} className="btn btn-primary">HAZ TU RESERVACION AQUI <i className="fa-solid fa-arrow-down-long" style={{ color: "#ff9300", marginLeft: 10 }}></i></span></h2>
          </div> */}
        </div>
        {/* <Link to="/" className="tertiaryButton">
            !Reserva ya!
          </Link> */}
      </Content>

      {/* <div style={{height:200, width: 200}}>
      <GoogleApiWrapper/>
      </div> */}
      <ModalUM
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        name={"Lugar de Partida"}
        body={"modal"}
      />
      <ModalUM
        open={open2}
        handleClose={handleClose2}
        handleOpen={handleOpen2}
        name={"Destino"}
        body={"modal"}
      />
      <br />
      {/* <SearchCard title="LAS EXPERIENCIAS QUE NECESITAS"  type='trasport' setSeviceType={setSeviceType} serviceType={serviceType} handleClose={handleOpen2} handleOpen={handleOpen} /> */}
      <div className="container bookingContainer" ref={sectionRef} style={{ display: 'flex' }}>
        <div>
          <label className="modalLabel">Tipo de servicio</label>
          {/* <select class="" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select> */}
          <select
            className="modalSelect form-select"
            name="Type"
            id="Type"
            onChange={(e) => changeLocation(e.target.value)}
          >
            <option value="type">Tipo de Servicio</option>
            <option value="trasport">Trasporte</option>
            <option value="Toaeropuerto">Hasta el AeroPuerto</option>
            <option value="Fromaeropuerto">Desde el AeroPuerto</option>
            <option value="fromaeropuertoHotel">Aeropueto hasta hotel</option>
            <option value="ToaeropuertoHotel">Hotel hasta Aeropuerto</option>
          </select>
          <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            <div style={{ width: "100%" }}>
              <label className="modalLabel">Fecha</label>
              <input
                type="date"
                className="modalSelect"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label className="modalLabel">Hora</label>
              <input
                type="time"
                className="modalSelect"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          {serviceType !== "Fromaeropuerto" &&
            serviceType !== "ToaeropuertoHotel" &&
            serviceType !== "fromaeropuertoHotel" ? (
            <>
              <label className="modalLabel">Lugar de Recogida</label>
              <Autocomplete
                style={{
                  width: "100%",
                  marginBottom: 10,
                  padding: 12,
                  border: "0px solid #ddd",
                  borderRadius: 4,
                  boxSizing: "border-box",
                  fontSize: 14,
                }}
                apiKey={"AIzaSyAMdyBg_PG6w5qa2mHBFaZpQF68Jz92tjI"}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
              />
              <Autocomplete
                style={{
                  width: "100%",
                  marginBottom: 10,
                  padding: 12,
                  border: "0px solid #ddd",
                  borderRadius: 4,
                  boxSizing: "border-box",
                  fontSize: 14,
                }}
                apiKey={"AIzaSyAMdyBg_PG6w5qa2mHBFaZpQF68Jz92tjI"}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
              />


              <div>
                <label className="modalLabel" style={{ fontSize: 13 }}>
                  Asiento infantil
                </label>
                <Switch onChange={() => setChild(!child)}/>

                {child === true ? <input
                  type="number"
                  className="modalSelect"
                  placeholder="Numero de niños"
                  onChange={(e) => setTime(e.target.value)}
                /> : null}
              </div>
              <br />
            </>
          ) : null}
          {serviceType !== "Toaeropuerto" &&
            serviceType !== "ToaeropuertoHotel" &&
            serviceType !== "fromaeropuertoHotel" ? (
            <>
              <label className="modalLabel">Lugar de Destino</label>
              <Autocomplete
                style={{
                  width: "100%",
                  marginBottom: 10,
                  padding: 12,
                  border: "0px solid #ddd",
                  borderRadius: 4,
                  boxSizing: "border-box",
                  fontSize: 14,
                }}
                apiKey={"AIzaSyAMdyBg_PG6w5qa2mHBFaZpQF68Jz92tjI"}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
              />
            </>
          ) : null}
          {serviceType === "Fromaeropuerto" ||
            serviceType === "Toaeropuerto" ||
            serviceType === "ToaeropuertoHotel" ||
            serviceType === "fromaeropuertoHotel" ? (
            <select
              className="modalSelect"
              onChange={(e) => setAeropuerto(e.target.value)}
            >
              <option value="aeropuerto">AeroPuerto</option>
              <option value="aeropuertodsq">
                AeroPuerto internacional de Las Americas SDQ
              </option>
              <option value="aeropuertopuntacana">
                AeroPuerto de Punta cana{" "}
              </option>
            </select>
          ) : null}
          {serviceType === "fromaeropuertoHotel" ||
            serviceType === "ToaeropuertoHotel" ? (
            <select
              className="modalSelect"
              onChange={(e) => setHotel(e.target.value)}
            >
              <option value="melia">Hoteles</option>
              <option value="">Hotel Barcelo</option>
              <option value="aeropuerto">Hotel de Punta cana </option>
              <option value="melia">Hotel Melia Punta Cana</option>
              <option value="">Hotel Barcelo</option>
              <option value="aeropuerto">Hotel de Punta cana </option>
            </select>
          ) : null}
          <div className="addandLess">
            <Counter name={"Numero de pasajeros"} />
            <Counter name={"Equipaje"} />
          </div>
          <button className="btn btn-primary mb-5">Solicitar Trasporte</button>
        </div>
        <div
          style={{
            height: "100%",
            width: '100%'
          }}
        >
          <GoogleApiWrapper
            latitude={latitude}
            longitude={longitude}
            serviceType={serviceType}
          />
        </div>
      </div>

      {/* <div className="container">
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
          <Card
            title="Snorkeling Punta Cana Beach"
            image={"./snorkeling.png"}
          />
          <Card title="Excusión Isla Catalina" image="./islacatalina.png" />
          <Card title="Excusión Isla Saona" image="islasaona.png" />
          <Card title="Excursón Santo Domingo" image="citytour.png" /> <Card />
          <Card />
        </div>
        <br />
        <h2 className="subtitle">Mas Destinos"</h2>
        <br />
        <div className="AppOferts">
          <Card title="Excusión Isla Catalina" image="./islacatalina.png" />
          <Card title="Excusión Isla Saona" image="islasaona.png" />
          <Card title="Excursón Santo Domingo" image="citytour.png" /> <Card />
          <Card
            title="Snorkeling Punta Cana Beach"
            image={"./snorkeling.png"}
          />
          <Card />
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Trasports;
