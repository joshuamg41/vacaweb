import React from "react";

import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import './contacto.css'
import styled from "styled-components";
import img from "../../assets/busbanner.png";


const Contacto = () => {
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
    <div style={{background:'white'}}>
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
      <div className="container" >
        <h1 style={{ fontWeight: "400", fontSize: 50, color: "gray" }}>
          Contacto
        </h1>
        <br />
        <h2 style={{fontSize:30, fontWeight: '400', color:'grey'}}>
        Si desea ponerse <br/>
en contacto
        </h2>
        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
        <form className="contactForm">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellidos" />
            <input type="text" placeholder="Celular" />
            <input type="email" placeholder="Correo" />
            <input type="text" placeholder="Asunto" />
            <textarea placeholder="Mensaje"></textarea>
            <br/>
          <input style={{background:'#F17E22', width:150}} type="submit" value="Enviar" />

        </form>
        <div style={{display:'flex', flexDirection:'column'}}>
             <img
        style={{width: 500, height: 200}}
        src={"/logos/vacalogo.svg"}
        alt={"logo travel vacation"}
      /> 
            <img
        style={{width: 200, height: 200, alignSelf:'center'}}
        src={"/logos/whatapp.svg"}
        alt={"whatsapp logo"}
      /> 
        </div>
        </div>
        <br/>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
