import React from "react";
import "./SearchCard.css";
const SearchCard = ({title}: any) => {
  return (
    <div className="searchCardContainer">
        <form className="searchCard">
            <h3>{!title ? "¿ A DONDE QUIERES VACACIONAR ?" : title}</h3>
            <div className="gap">
            <input type='search' placeholder="BUSQUEDA" className="searchCardInput"/>
            <select name="select" id="select" className="searchSelect">
                <option value="1" disabled>OPCION UNO</option>
                <option value="2">opcion 2</option>
                <option value="3">opcion 3</option>
            </select>
            <select name="select" id="select" className="searchSelect">
                <option value="1" disabled>OPCION DOS</option>
                <option value="2">opcion 2</option>
                <option value="3">opcion 3</option>
            </select>
            <input type='button' value="RESERVA" className="primaryButton"/>
            </div>
        </form>
    </div>
  );
};

export default SearchCard;
