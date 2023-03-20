import React from "react";
import "./SearchCard.css";
const SearchCard = ({ title, type,handleOpen,handleClose}: any) => {
  return (
    <>
      {type === "trasport" ? (
        <div className="searchCardContainer">
          <form className="searchCard">
            <h3>{!title ? "¿ A DONDE QUIERES VACACIONAR ?" : title}</h3>
            <div className="searchCardInput">
              <input
                type="button"
                value="Lugar de Partida"
                className="searchSelect"
                style={{
                  backgroundColor: "#gray",
                  color: "gray",
                  border: "1px solid #000",
                  fontSize: "1rem",
                  fontWeight: "400",
                  borderColor: 'transparent'

                }}
                onClick={() => handleOpen()}
              />
              <input
                type="button"
                value="Lugar de Salida"
                className="searchSelect"
                style={{
                  backgroundColor: "#gray",
                  color: "gray",
                  border: "1px solid #000",
                  fontSize: "1rem",
                  fontWeight: "400",
                  borderColor: 'transparent'
                }}
                onClick={() => handleClose()}
              />
              <input type="button" value="RESERVA" className="primaryButton" style={{backgroundColor:'white', borderColor:'gray', borderWidth:1, paddingLeft:30, paddingRight:30, }}/>
            </div>
          </form>
        </div>
      ) : (
        <div className="searchCardContainer">
          <form className="searchCard">
            <h3>{!title ? "¿ A DONDE QUIERES VACACIONAR ?" : title}</h3>
            <div className="searchCardInput">
              <select name="select" id="select" className="searchSelect">
                <option value="1">PARTIDA</option>
              </select>
              <select name="select" id="select" className="searchSelect">
                <option value="1">RECOGIDA</option>
              </select>
              <input type="button" value="RESERVA" className="primaryButton" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SearchCard;
