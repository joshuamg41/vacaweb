import React from "react";
import "./PromotionBanner.css";
import styled from "styled-components";

const PromotionBanner = ({ title, body, img }: any) => {
  const Content = styled.div`
    background-image: url(${img});
  `;
  return (
    <div className="promotionBannerContainer">
      {/* <img src={"/collage.png"} alt={"promotion"} /> */}
      <Content  className="promotionBannerImg"></Content >
      <div className="promotionBannerContent">
        <h2>{title ? title : "Armamos tu paquete"}</h2>
        <p>
          {body
            ? body
            : "En vaca nos importa por eso te escuchamos y armamos un pquete especial orientado a tus necesidades."}
        </p>
      </div>
    </div>
  );
};
export default PromotionBanner;
