import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import "./ModalUM.css";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "0",
  p: 4,
};

export default function TransitionsModal({
  handleOpen,
  handleClose,
  open,
  name,
  body,
}: any) {
  const [provinces, setProvinces] = React.useState<any>([]);
  const [municipios, setMunicipios] = React.useState<any>([]);

  const handleProvinces = () => {
    const options = { method: "GET" };
    fetch("http://provinciasrd.raydelto.org/provincias", options)
      .then((response) => response.json())
      .then((response) => setProvinces(response.data))
      
      .catch((err) => console.error(err));
  };

  const handleMunicipios = (e: any) => {
    const options = { method: "GET" };
    fetch(`http://provinciasrd.raydelto.org/provincias/${e}/municipios`, options)
      .then((response) => response.json())
      .then((response) => setMunicipios(response.data))
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    handleProvinces();
  }, []);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {/* {name} */}
              <form action="" className="modalForm">
                <label className="modalLabel">{name}</label>
                <br />
                <label className="modalLabel">Provincia</label>
                <select
                  className="modalSelect"
                  onChange={(e) => handleMunicipios(e.target.value)}
                >
                  {provinces.map((province: any) => (
                    <option value={province?.codigo}>
                      {province?.nombre}
                    </option>
                  ))}
                </select>
                {municipios.length > 0 ? (
                  <>
                    <label className="modalLabel">Municipio</label>
                    <select
                      className="modalSelect"
                    >
                      {municipios.map((municipio: any) => (
                        <option value={municipio?.codigo}>
                          {municipio?.nombre}
                        </option>
                      ))}
                    </select>
                  </>
                ) : null}

                <label className="modalLabel">Dirección</label>
                <input className="modalSelect" type="text" />
                <label className="modalLabel">Fecha</label>
                <input className="modalSelect" type="date" />
                <label className="modalLabel">Cantidad de Pasajeros </label>
                <input className="modalSelect" type="number" />
                <label className="modalLabel">Cantidad de Equipaje</label>
                <input className="modalSelect" type="number" />
                {/* <input className="modalButton" type="submit" value="OK" /> */}
              </form>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {/* {body} */}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
