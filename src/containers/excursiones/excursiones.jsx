import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import SearchCard from "../../components/SearchCard/SearchCard";
import './excusiones.css'
import styled from "styled-components";
import img from "../../assets/excusionesbanner.png";
import HotelCard from "../../components/HotelCard/HotelCard";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import PromotionBanner from "../../components/PromotionBanner/PromotionBanner";
import Card from "../../components/Card/Card";
import PromotionImage from "../../components/PromotionImage/PromotionImage";
import { DocumentData, collection, getDocs, query, where } from "firebase/firestore";
import { db, storage } from "../../firebase.config";
import { ref } from "firebase/storage";


const Trasport = () => {
  const [excurtions, setExcursions] = useState([])
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
    getExcursions()
  }, [])

  const getExcursions = async () => {
    const excursionRef = collection(db, "excursion");
    const q = query(excursionRef);
    const querySnapshot = await getDocs(q);
    let data = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let resdata = doc.data()
      resdata.id = doc.id
      data.push(resdata)
    });
    setExcursions(data)
  }

  return (
    <div>
      <HeaderPage />
      {/* <img
        className="AppBanner"
        src={"/FerrieBanner.png"}
        alt={"pool vacation"}
      /> */}
      <Content className="bannerText">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10%' }}>
          <div>

            <img src={"/jasambrilogo.png"} alt={"on"} style={{ height: 200, }} />
          </div>
          <div>

            <h2> Excursiones en Punta Cana<br /> República Dominicana.</h2>
          </div>
        </div>
      </Content>
      <br />
      <SearchCard title="FILTRAR POR FECHA Y UBICACIÓN" />
      <br />
      <div className="container">
        <div className="containerexcursions">
          {
            excurtions.map((excurtion) => {
              return (

                <Card title={excurtion?.name} id={excurtion?.id} key={excurtion?.id} ubication={excurtion.ubication} prize={excurtion.prize}/>
              )
            })
          }
          {/* <Card title="Snorkeling Punta Cana Beach" image={"./snorkeling.png"} />
          <Card title="Excusión Isla Catalina" image="./islacatalina.png" />
          <Card title="Excusión Isla Saona" image="islasaona.png" />
          <Card title="Excursón Santo Domingo" image="citytour.png" /> <Card />
          <Card /> */}

        </div>

      </div>
      {/* <div className="container">
        <div className="HotelCardContainer">
          <HotelCard />
          <HotelCard />
        </div>
        <br />
        <h2 className="subtitle">Destinos en R.D</h2>
        <br />
        <div className="promotionCard" style={{ justifyContent: "center" }}>
          <PromotionCard title={"NORTE"} coin={"USD"} price={""} show={false} />
          <PromotionCard title={"SUR"} coin={"RD"} price={""} show={false} />
          <PromotionCard title={"ESTE"} coin={"RD"} price={""} show={false} />
          <PromotionCard title={"OESTE"} coin={"RD"} price={""} show={false} />
        </div>
        <br />
        <article className="AppSuscribe">
          <PromotionBanner />
        </article>
        <br />
        <br />
        <h2 className="subtitle">Destinos ""</h2>
        <h2 className="subtitle2">Desde USD: $72.00 no te la pierdas.</h2>
        <br />
        <div className="AppOferts">
          <Card title="Snorkeling Punta Cana Beach" image={"./snorkeling.png"} />
          <Card title="Excusión
              Isla Catalina" image="./islacatalina.png" />
          <Card title="Excusión Isla Saona" image="islasaona.png" />
          <Card title="Excursón Santo Domingo" image="citytour.png" /> <Card />
          <Card />

        </div>
        <br />
        <PromotionImage />
      </div> */}



      <Footer />
    </div>
  );
};

export default Trasport;
