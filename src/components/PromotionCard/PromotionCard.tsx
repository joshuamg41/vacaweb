import React from "react";
import { Link } from "react-router-dom";
import "./PromotionCard.css";
import styled from 'styled-components';

const PromotionCard = ({type, title, coin, price, show, img}:any) => {
  const Content = styled.div`
  height: 260px;
    border-radius: 2px;
    background-image: url(${img});
    background-color: grey;
    background-size: cover;
    min-width: 260px;
    width: 100%;
`;


  return (
    <Link to='/hoteldetail'>
    <Content className="promotionCardContainer">
      <div className="promotionCardBody">
        <h2>{title}</h2>
       { show !==false ?<>
        <h3>DESDE</h3>
        <h2>{coin}:{price ? price : '$2,950'}</h2>
        <br/>
        <h4>{type}</h4>
       </>
        : null}
      </div>
    </Content>
    </Link>
  );
};

export default PromotionCard;
