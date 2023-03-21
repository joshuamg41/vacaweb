import React, { useEffect } from "react";
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

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
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

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
      <div className="container bookingContainer">
        <div style={{ flex: 1 }}>
          <label className="modalLabel">Tipo de servicio</label>
          <select
            className="modalSelect"
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
              <input
                placeholder="Arrastre en el Mapa o ponga la direccion"
                className="modalSelect"
                onChange={(e) => setPickup(e.target.value)}
              />
                <input
                placeholder="Otras Paradas"
                className="modalSelect"
                onChange={(e) => setPickup(e.target.value)}
              />
              <div>
              <label className="modalLabel" style={{fontSize:13}}>Asiento infantil</label>
                <Switch/>
              </div>
              <br/>

            </>
          ) : null}
          {serviceType !== "Toaeropuerto" &&
          serviceType !== "ToaeropuertoHotel" &&
          serviceType !== "fromaeropuertoHotel" ? (
            <>
              <label className="modalLabel" >Lugar de Destino</label>
              <input
                placeholder="Arrastre en el Mapa ponga la direccion"
                className="modalSelect"
                onChange={(e) => setDestino(e.target.value)}
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
        </div>
        <div
          style={{
            height: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 100,
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
