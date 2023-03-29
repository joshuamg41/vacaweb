import React, { useEffect } from "react";
import { db } from "../../firebase.config";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import "./Lotery.css";
const Lotery = () => {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({
    name: "",
    last_name: "",
    phone_number: "",
    email: "",
    next_vacation: "",
  });
  const getUser = async () => {
    const q = query(collection(db, "loteryUsers"));
    const querySnapshot = await getDocs(q);
    let res: any = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      res.push(data);
    });
    setUsers(res);
  };

  const addUser = async (e: any) => {
    const validate = () => {
      const expression =
        /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

      return expression.test(String(user.email).toLowerCase());
    };
    const exist = users.some((item: any) => item.email === user.email);
    if (exist === false && validate() === true) {
      await setDoc(doc(db, "loteryUsers", user.email), user);
      console.log("usuario agregado");
      Swal.fire({
            title: "Exito",
            text: "Usuario agregado con exito",
            icon: "success",
            confirmButtonText: "OK",
          });
    } else if (validate() === false) {
        Swal.fire({
            title: "Error",
            text: "Email no valido",
            icon: "warning",
            confirmButtonText: "OK",
          });
    } else {
        Swal.fire({
            title: "Error",
            text: "Email registrado anteriormente",
            icon: "error",
            confirmButtonText: "OK",
          });
    }
  };
  const handleChange = (e: any) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div className="card mx-auto rounded-lg shadow">
          <div className="card-header bg-orange text-white">
            <h3 className="text-center mb-0 mt-1">Formulario de Registro</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">
                  Nombre <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">
                  Apellidos <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone_number">
                  Teléfono <span>*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  E-mail <span>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="next_vacation">
                  ¿Qué destino te gustaría visitar en tus próximas vacaciones?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="next_vacation"
                  name="next_vacation"
                  onChange={handleChange}
                />
              </div>

              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-primary bg-orange border-orange"
                  id="btn_submit"
                  name="btn_submit"
                  onClick={addUser}
                >
                  Enviar
                </button>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lotery;
