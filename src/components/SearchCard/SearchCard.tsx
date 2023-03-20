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
              {serviceType !== "Fromaeropuerto" &&
              serviceType !== "ToaeropuertoHotel" &&
              serviceType !== "fromaeropuertoHotel" ? (
                <input
                  type="button"
                  value="Lugar de Recogida"
                  className="button"
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
              {serviceType !== "Toaeropuerto" &&
              serviceType !== "ToaeropuertoHotel" &&
              serviceType !== "fromaeropuertoHotel" ? (
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
              serviceType === "Toaeropuerto" ||
              serviceType === "ToaeropuertoHotel" ||
              serviceType === "fromaeropuertoHotel" ? (
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

              {serviceType === "fromaeropuertoHotel" ||
              serviceType === "ToaeropuertoHotel" ? (
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
                  <option value="melia">Hoteles</option>
                  <option value="">Hotel Barcelo</option>
                  <option value="aeropuerto">Hotel de Punta cana </option>
                  <option value="melia">Hotel Melia Punta Cana</option>
                  <option value="">Hotel Barcelo</option>
                  <option value="aeropuerto">Hotel de Punta cana </option>
                </select>
              ) : null}
              <input
                type="button"
                value="RESERVA"
                className="primaryButton"
            
                
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="searchCardContainer">
          <form className="searchCard">
            <h3>{!title ? "Elige tu Excusión o actividad" : title}</h3>
            <div className="searchCardInput">
              <select
                name="select"
                id="select"
                className="searchSelect
              "
                style={{
                  backgroundColor: "white",
                  borderColor: "gray",
                  borderWidth: 1,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 4,
                }}
              >
                <option value="montana">Excusiones</option>
                <option value="montana">Excusión Montaña redonda</option>
                <option value="montana">Buseo</option>
                <option value="montana">Buggie</option>
              </select>
              <input
                className="searchSelect"
                style={{
                  backgroundColor: "white",
                  borderColor: "gray",
                  borderWidth: 1,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 4,
                }}
                type="date"
              />
              <input type="button" value="RESERVA" className="primaryButton" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SearchCard;
