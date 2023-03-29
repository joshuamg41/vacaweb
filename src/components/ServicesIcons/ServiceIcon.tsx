import React from "react";
import { Link } from "react-router-dom";

import "./ServiceIcon.css";

const ServiceIcon = ({ icon, title, state }: any) => {
  return (
    <Link to="/contact" state={state} style={{ width: "fit-content" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          borderRadius: "50%",
          justifyContent: "center",
        }}
      >
        <div
          className="serviceIcon"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 80,
            height: 80,
            borderRadius: "50%",
          }}
        >
          <img src={icon} style={{ width: 40 }} alt='icon'/>
        </div>
        <h3 className="iconTitle" style={{ fontSize: 14, fontWeight: "400" }}>
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ServiceIcon;
