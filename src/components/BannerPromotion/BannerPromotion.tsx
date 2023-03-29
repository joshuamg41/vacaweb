import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./BannerPromotion.css";
const BannerPromotion = ({
  img,
  icon,
  direction,
  imageRate,
  contenRate,
  text,
  background,
  backgroundPositionY,
  backgroundPositionX,
  title,
  full,
  color,
  backgroundStyle,
  position,
  borderRadius,
  containerStyle,
  state,
}: any) => {
  const Text = styled.p`
    font-size: 0.9rem;
    margin-top: 1rem;
    color: ${color ? color : "#fff"};
    width: 85%;
  `;

  return (
    <>
      <>
        <div
          className="promotionContainer"
          style={containerStyle ? containerStyle : {}}
        >
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: 355,
              width: "100%",
              padding: "0 auto",
              flex: imageRate,
              backgroundColor: background,
              borderRadius: borderRadius ? borderRadius : 0,
            }}
          >
            <div
              className="promotionText"
              style={{
                flexDirection: direction,
                flex: contenRate,
              }}
            >
              <div className="promotionItem"></div>
              <div className="promotionTextContainer" style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    height:'90%',
                    flexDirection: "column",
                    justifyContent:'space-between'
                  }}
                >
                  <div style={{ flex: 3 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                      }}
                    >
                      <img
                        src={icon}
                        alt={"hotel icon"}
                        className="hotel icon"
                        style={{ height: 31 }}
                      />
                      <h1
                        style={{
                          fontSize: 33,
                          color: color ? color : "#fff",
                          fontWeight: "500",
                        }}
                      >
                        {title}
                      </h1>
                    </div>
                    <Text>{text}</Text>
                  </div>
                  { state ?
                    <Link to='/Contact' state={state}>
                    <button className="primaryButton">Conoce mas</button>
                  </Link> : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="promotionContainermovil">
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: 355,
              width: "100%",
              padding: "0 auto",
              flex: imageRate,
              backgroundColor: background,
              backgroundPositionX: position,
            }}
          />
          <div style={{ backgroundColor: background, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <img
                src={icon}
                alt={"hotel icon"}
                className="hotel icon"
                style={{ height: 31 }}
              />
              <h1
                style={{
                  fontSize: 33,
                  color: color ? color : "#fff",
                  fontWeight: "500",
                }}
              >
                {title}
              </h1>
            </div>
            <Text>{text}</Text>
          </div>
        </div>
      </>
    </>
  );
};

export default BannerPromotion;
