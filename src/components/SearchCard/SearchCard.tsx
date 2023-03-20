import React from "react";
import "./SearchCard.css";
const SearchCard = ({
  title,
  type,
  handleOpen,
  handleClose,
  setSeviceType,
  serviceType,
}: any) => {
  return (
    <>
      {type === "trasport" ? (
        <div className="searchCardContainer">
          <form className="searchCard">
            <h3>{!title ? "¿ Donde Quieres ir ?" : title}</h3>
            <div className="searchCardInput">
              <select
                onChange={(e) => setSeviceType(e.target.value)}
                className="searchSelect"
                style={{
                  backgroundColor: "#EDECED",
                  color: "gray",
                  border: "1px solid #000",
                  fontSize: "1rem",
                  fontWeight: "400",
                  borderColor: "transparent",
                  width: "fit-content",
                }}
              >
                <option value="type">Tipo de Servicio</option>
                <option value="trasport">Trasporte</option>
                <option value="Toaeropuerto">Hasta el AeroPuerto</option>
                <option value="Fromaeropuerto">Desde el AeroPuerto</option>
                <option value="fromaeropuertoHotel">
                  Aeropueto hasta hotel
                </option>
                <option value="ToaeropuertoHotel">
                  Hotel hasta Aeropuerto
                </option>
              </select>
              {serviceType !== "Fromaeropuerto" ? (
                <input
                  type="button"
                  value="Lugar de Recogida"
                  className="searchSelect"
                  style={{
                    color: "gray",
                    border: "1px solid #000",
                    fontSize: "1rem",
                    fontWeight: "400",
                    borderColor: "transparent",
                  }}
                  onClick={() => handleOpen()}
                />
              ) : null}
              {serviceType !== "Toaeropuerto"  ? (
                <input
                  type="button"
                  value="Lugar de Destino"
                  className="searchSelect"
                  style={{
                    color: "gray",
                    border: "1px solid #000",
                    fontSize: "1rem",
                    fontWeight: "400",
                    borderColor: "transparent",
                  }}
                  onClick={() => handleClose()}
                />
              ) : null}
              {serviceType === "Fromaeropuerto" ||
              serviceType === "Toaeropuerto" ? (
                <select
                  className="searchSelect"
                  style={{
                    backgroundColor: "#EDECED",
                    color: "gray",
                    border: "1px solid #000",
                    fontSize: "1rem",
                    fontWeight: "400",
                    borderColor: "transparent",
                    width: "fit-content",
                  }}
                >
                  <option value="aeropuerto">AeroPuerto</option>
                  <option value="aeropuerto">
                    AeroPuerto internacional de Las Americas SDQ
                  </option>
                  <option value="aeropuerto">AeroPuerto de Punta cana </option>
                </select>
              ) : null}
              <input
                type="button"
                value="RESERVA"
                className="primaryButton"
                style={{
                  backgroundColor: "white",
                  borderColor: "gray",
                  borderWidth: 1,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 4,
                }}
              />
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
