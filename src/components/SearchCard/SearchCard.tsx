import React from "react";
import "./SearchCard.css";
const SearchCard = ({title}: any) => {
  return (
    <div className="searchCardContainer">
        <form className="searchCard">
            <h3>{!title ? "¿ A DONDE QUIERES VACACIONAR ?" : title}</h3>
            <div className="searchCardInput">
            <select name="select" id="select" className="searchSelect">
                <option value="1" >PARTIDA</option>
              
            </select>
            <select name="select" id="select" className="searchSelect">
                <option value="1" >RECOGIDA</option>
            </select>
            <input type='button' value="RESERVA" className="primaryButton"/>
            </div>
        </form>
    </div>
  );
};

export default SearchCard;
