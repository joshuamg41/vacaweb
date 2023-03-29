import React, { useEffect } from "react";
import BannerPromotion from "../../components/BannerPromotion/BannerPromotion";
import HeaderPage from "../../components/Header/HeaderPage";
import hotelBannerImg from "../../assets/hoteles.png";
import hotelIcon from "../../assets/hotelIcon.svg";
import "./Contact.css";
import ServiceIcon from "../../components/ServicesIcons/ServiceIcon";
import PlaneIcon from "../../assets/iconPlane.svg";
import hotelIcon2 from "../../assets/hotelIcon2.svg";
import DisneyIcon from "../../assets/disneyIcon.svg";
import CruceroIcon from "../../assets/cruceroIcon.svg";
import OfertasIcon from "../../assets/OfertasIcon.svg";
import ExcursionesIcon from "../../assets/excursionIcon.svg";
import FerrieIcon from "../../assets/FerrieIcon.svg";
import InsuranceIcon from "../../assets/insuranceIcon.svg";
import PromotionBanner from "../../components/PromotionBanner/PromotionBanner";
import CruceroBanner from "../../assets/crucerosbanner.png";
import DisneyBanner from "../../assets/disney.png";
import PlaneBanner from "../../assets/plane.png";
import ExcursionesBanner from "../../assets/excursiones.png";
import OfertasBanner from "../../assets/ofertas.png";
import FerrieBanner from "../../assets/ferrie.png";
import OfertasBanner2 from "../../assets/ofertas2.png";
import CruceroIcon2 from "../../assets/cruceroIcon2.svg";
import DisneyIcon2 from "../../assets/disneyIcon2.svg";
import ExcusionesIcon2 from "../../assets/excursionIcon2.svg";
import OfertasIcon2 from "../../assets/ofertasIcon2.svg";
import FerriIcon2 from "../../assets/FerrieIcon2Banner.svg";

import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  const location = useLocation();
  const data = location.state;
  const align = data?.align || "start";
  useEffect(() => {
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div>
      <HeaderPage />
      <div className="container">
        {data?.page === "hoteles" ? (
          <BannerPromotion
            title={"Hoteles"}
            img={hotelBannerImg}
            icon={hotelIcon}
            background={"#707070"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row"}
            full={true}
            position={"left"}
            borderRadius={10}
            containerStyle={{ marginTop: 20 }}
          />
        ) : null}
        {data?.page === "cruceros" ? (
          <BannerPromotion
            title={"Cruceros"}
            img={CruceroBanner}
            icon={CruceroIcon2}
            background={"#055C87"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1.8}
            contenRate={1}
            direction={"row-reverse"}
            full={true}
            position={"right"}
            borderRadius={10}
            containerStyle={{ marginTop: 20 }}
          />
        ) : null}
        {data?.page === "disney" ? (
          <BannerPromotion
            title={"Disney"}
            img={DisneyBanner}
            icon={DisneyIcon2}
            background={"#000"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row"}
            full={true}
            position={"14%"}
            borderRadius={10}
            containerStyle={{ marginTop: 20 }}
          />
        ) : null}
        {data?.page === "excursiones" ? (
          <BannerPromotion
            title={"Excursiones"}
            img={ExcursionesBanner}
            icon={ExcusionesIcon2}
            background={"#57A8EA"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row-reverse"}
            full={true}
            position={"right"}
            borderRadius={10}
            containerStyle={{ marginTop: 20 }}
          />
        ) : null}
        {data?.page === "vuelos" ? (
          <BannerPromotion
            title={"Vuelos"}
            img={PlaneBanner}
            icon={PlaneIcon}
            background={"#fff"}
            color={"#000"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row"}
            full={true}
            textPosition={"left"}
            borderRadius={10}
            containerStyle={{ marginTop: 20 }}
          />
        ) : null}
        {data?.page === "ofertas" ? (
          <BannerPromotion
            title={"Ofertas"}
            img={OfertasBanner}
            icon={OfertasIcon2}
            background={"#141416"}
            position={"center"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1.5}
            direction={"row-reverse"}
            full={true}
            borderRadius={10}
            containerStyle={{ marginTop: 20 }}
          />
        ) : null}
        {data?.page === "ferrie" ? (
          <BannerPromotion
            title={"Ferrie"}
            img={FerrieBanner}
            icon={FerriIcon2}
            background={"#1E324A"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1}
            direction={"row"}
            full={true}
            borderRadius={10}
            containerStyle={{ marginTop: 20 }}
          />
        ) : null}
        {data?.page === "ofertas2" ? (
          <BannerPromotion
            title={"Ofertas"}
            img={OfertasBanner2}
            icon={hotelIcon}
            background={"#141416"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            imageRate={1}
            contenRate={1.5}
            direction={"row-reverse"}
            full={true}
            position={"75%"}
            borderRadius={10}
            containerStyle={{ marginTop: 20 }}
          />
        ) : null}

        <div
          className="contactForm"
          style={{ alignItems: align, padding: "0 10px 0 -10px" }}
        >
          <div className="containerContactForm">
            <ContactForm/>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            rowGap: 40,
            marginBottom: 40,
            justifyItems: "center",
          }}
        >
          <ServiceIcon
            title="Vuelos"
            icon={PlaneIcon}
            state={{ page: "vuelos", align: "flex-end" }}
          />
          <ServiceIcon
            title="Hoteles"
            icon={hotelIcon2}
            state={{ page: "hoteles", align: "flex-end" }}
          />
          <ServiceIcon
            title="Disney"
            icon={DisneyIcon}
            state={{ page: "disney", align: "flex-end" }}
          />
          <ServiceIcon
            title="Cruceros"
            icon={CruceroIcon}
            state={{ page: "cruceros", align: "flex-start" }}
          />
          <ServiceIcon
            title="Ofertas"
            icon={OfertasIcon}
            state={{ page: "ofertas", align: "flex-end" }}
          />
          <ServiceIcon
            title="Excusiones"
            icon={ExcursionesIcon}
            state={{ page: "excursiones", align: "flex-start" }}
          />        
          <ServiceIcon
            title="Ferrie"
            icon={FerrieIcon}
            state={{ page: "ferrie", align: "flex-end" }}
          />
          <ServiceIcon
            title="Seguros"
            icon={InsuranceIcon}
            state={{ page: "ofertas2", align: "flex-start" }}
          />
        </div>
        <br />
        <br />
        <br />
        <article className="AppSuscribe">
          <PromotionBanner />
        </article>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
