import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./Registration.css";
import { registrationSchema } from "./RegistrationSchema";
import { db, storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import TextArrayComponent from "../../components/Textadd/TextAdd";
import { useLocation } from "react-router-dom";

const initialValues = {
  name: "",
  description: "",
  type: "",
  importantinfo: "",
  ubication: "",
  prize: ""
};

const Registration = () => {
  let { state } = useLocation();
  const id = state.id
  const [data, setData] = useState([])
  let info = []

  useEffect(() => {
    getExcursion()
  }, [])
  const getExcursion = async () => {
    const docRef = doc(db, "rsExcursion", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  console.log(data)


  return (
    <div>
      <section
        className="p-5 w-100"
        style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-12 col-xl-10 order-2 order-lg-10">
                    <p className="text-center h1 fw-bold mb-5 mt-4">Detalle de Reserva</p>
                    <>
                      <form method="post">
                        <div className="row">
                          {/* <div className="col-md-4">
                            <div className="profile-img">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                alt=""
                              />
                              <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" />
                              </div>
                            </div>
                          </div> */}
                          <div >
                            <div className="profile-head">
                              {/* <h5>Contacto:</h5> */}
                              <br />
                              {/* <h6>Web Developer and Designer</h6> */}
                              {/* <p className="proile-rating">
                                RANKINGS : <span>8/10</span>
                              </p> */}
                              {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                  <a
                                    className="nav-link active"
                                    id="home-tab"
                                    data-toggle="tab"
                                    href="#home"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                  >
                                    About
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    id="profile-tab"
                                    data-toggle="tab"
                                    href="#profile"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                  >
                                    Timeline
                                  </a>
                                </li>
                              </ul> */}
                            </div>
                          </div>
                          {/* <div className="col-md-2">
                            <input
                              type="submit"
                              className="profile-edit-btn"
                              name="btnAddMore"
                              defaultValue="Edit Profile"
                            />
                          </div> */}
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <h5>Contacto:</h5>
                            <br />
                            <div className="tab-content profile-tab" id="myTabContent">
                              <div
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                              >
                                {/* <div className="row">
                                  <div className="col-md-6">
                                    <label>User Id</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Kshiti123</p>
                                  </div>
                                </div> */}
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Nombre</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.name}{" "}{data?.lastname}</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Correo</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.email}</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Numero</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.phone
                                    }</p>
                                  </div>
                                </div>
                                {/* <div className="row">
                                  <div className="col-md-6">
                                    <label>Profession</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Web Developer and Designer</p>
                                  </div>
                                </div> */}
                              </div>
                              <div
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                              >
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Experience</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Expert</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Hourly Rate</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>10$/hr</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Total Projects</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>230</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>English Level</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Expert</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Availability</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>6 months</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label>Your Bio</label>
                                    <br />
                                    <p>Your detail description</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8 mt-5">
                            <h5>Informacion de Reserva:</h5>
                            <br />
                            <div className="tab-content profile-tab" id="myTabContent">
                              <div
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                              >
                                {/* <div className="row">
                                  <div className="col-md-6">
                                    <label>User Id</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Kshiti123</p>
                                  </div>
                                </div> */}
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Fecha de reservación</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.rsfecha
                                    }</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Adultos</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.adults}</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Niños</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.childs
                                    }</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Comentario</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.description
                                    }</p>
                                  </div>
                                </div>
                                {/* <div className="row">
                                  <div className="col-md-6">
                                    <label>Profession</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Web Developer and Designer</p>
                                  </div>
                                </div> */}
                              </div>
                              {/* <div
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                              >
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Experience</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Expert</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Hourly Rate</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>10$/hr</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Total Projects</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>230</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>English Level</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Expert</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Availability</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>6 months</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label>Your Bio</label>
                                    <br />
                                    <p>Your detail description</p>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>


                          <div className="col-md-8 mt-5">
                            <h5>Excursión:</h5>
                            <br />
                            <div className="tab-content profile-tab" id="myTabContent">
                              <div
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                              >
                                {/* <div className="row">
                                  <div className="col-md-6">
                                    <label>User Id</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Kshiti123</p>
                                  </div>
                                </div> */}
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Nombre de la excusion</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.nameexcursion}</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Costo colocado</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.excursionprize}</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Numero de Ref de la excursión</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>{data?.idexcursion
                                    }</p>
                                  </div>
                                </div>
                                {/* <div className="row">
                                  <div className="col-md-6">
                                    <label>Profession</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Web Developer and Designer</p>
                                  </div>
                                </div> */}
                              </div>
                              {/* <div
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                              >
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Experience</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Expert</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Hourly Rate</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>10$/hr</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Total Projects</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>230</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>English Level</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>Expert</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Availability</label>
                                  </div>
                                  <div className="col-md-6">
                                    <p>6 months</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label>Your Bio</label>
                                    <br />
                                    <p>Your detail description</p>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                          {/* <div className="col-md-4">
                            <div className="profile-work">
                              <p>WORK LINK</p>
                              <a href="">Website Link</a>
                              <br />
                              <a href="">Bootsnipp Profile</a>
                              <br />
                              <a href="">Bootply Profile</a>
                              <p>SKILLS</p>
                              <a href="">Web Designer</a>
                              <br />
                              <a href="">Web Developer</a>
                              <br />
                              <a href="">WordPress</a>
                              <br />
                              <a href="">WooCommerce</a>
                              <br />
                              <a href="">PHP, .Net</a>
                              <br />
                            </div>
                          </div> */}
                        </div>
                      </form>
                    </>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;