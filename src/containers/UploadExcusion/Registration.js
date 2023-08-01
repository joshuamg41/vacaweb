import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./Registration.css";

import { registrationSchema } from "./RegistrationSchema";
import { db, storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import TextArrayComponent from "../../components/Textadd/TextAdd";
import Swal from "sweetalert2";

const initialValues = {
  name: "",
  description: "",
  type: "",
  importantinfo: "",
  ubication: "",
  prize: ""
};

const Registration = () => {
  const [image, setImage] = useState(undefined)
  const [images, setImages] = useState([])
  const [bgimage, setBgImage] = useState(undefined)
  const [items, setItems] = useState([]);
  let info = []



  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    // validationSchema: registrationSchema,
    onSubmit: (values, action) => {

      UploadExcursion(values)
      // alert(
      //   "Form is valid now!. You can make a call to API inside onSubmit function"
      // );
      // action.resetForm();

    },
  });


  // useEffect(() => {
  //   getImages()
  // }, [])
  // images.map(element => {
  //   console.log(element)

  //   });
  const UploadExcursion = async (e) => {
    e.info = items
    console.log(e)
    const docRef = await addDoc(collection(db, "excursion"), e);
    const imageRef = ref(storage, `image/${docRef.id}.jpg`);
    const bgimageRef = ref(storage, `bgimages/${docRef.id}.jpg`);

    uploadBytes(imageRef, image).then((snapshot) => {
      console.log('Uploaded image');
    });
    uploadBytes(bgimageRef, bgimage).then((snapshot) => {
      console.log('Uploaded bg');
    });
    for (let i = 0; i <= images.length; i++) {
      const imagesRef = ref(storage, `images/${docRef.id}/${i.toString()}`)
      uploadBytes(imagesRef, images[i], {
        contentType: images[i].type,
      }).then((snapshot) => {
        console.log('Uploaded images');
            Swal.fire({
          icon: 'success',
          title: 'Se ha enviado tu solicitud reserva. Te contactaremos Pronto',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch((error)=>{
        console.log(error)
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      });
    }



  }

  const handleImage = (e) => {
    const imageRef = ref(storage, 'images/mountainss.jpg');
    // uploadBytes(mountainsRef, e).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    // });

  }
  const getImages = () => {
    const pathReference = ref(storage, 'images/mountainss.jpg');
    getDownloadURL(pathReference)
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        //   const blob = xhr.response;
        // };
        // xhr.open('GET', url);
        // xhr.send();

        // Or inserted into an <img> element
        // const img = document.getElementById('myimg');
        // img.setAttribute('src', url);
        console.log(url)
      })
      .catch((error) => {
        // Handle any errors
      });
  }
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
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mt-4">Subir Nueva excursión</p>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        {/* <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            First Name
                          </label>
                          <input
                            id="first"
                            name="first"
                            className="form-control"
                            value={values.first}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.first && touched.first ? (
                            <small className="text-danger mt-1">
                              {errors.first}
                            </small>
                          ) : null}
                        </div>  */}
                        {/* <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Last Name
                          </label>
                          <input
                            id="last"
                            name="last"
                            className="form-control"
                            value={values.last}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.last && touched.last ? (
                            <small className="text-danger mt-1">
                              {errors.last}
                            </small>
                          ) : null}
                        </div> */}
                      </div>
                      {/* <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email ? (
                            <small className="text-danger mt-1">
                              {errors.email}
                            </small>
                          ) : null}
                        </div>
                      </div> */}
                      {/* <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.password && touched.password ? (
                            <small className="text-danger mt-1">
                              {errors.password}
                            </small>
                          ) : null}
                        </div>
                      </div> */}
                      {/* <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            id="repassword"
                            name="repassword"
                            className="form-control"
                            value={values.repassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.repassword && touched.repassword ? (
                            <small className="text-danger mt-1">
                              {errors.repassword}
                            </small>
                          ) : null}
                        </div>
                      </div> */}
                      <div>
                        <label className="form-label" htmlFor="name">Nombre</label>
                        <input type="text" value={values.name} onChange={handleChange} id="name" className="form-control" />
                      </div>
                      <br />
                      <div>
                        <label className="form-label" htmlFor="description">Descripción</label>
                        <textarea className="form-control" id="description" onChange={handleChange} value={values.description}>
                        </textarea>
                      </div>
                      <br />
                      <div>
                        <label className="form-label" htmlFor="type">Tipo</label>
                        <select value={values.type} onChange={handleChange} id="type" className="form-control" >
                          <option>
                            Excursión
                          </option>
                          <option>
                            Hospedaje
                          </option>
                        </select>
                      </div>
                      <br />
                      <div>
                        <label className="form-label" htmlFor="importantinfo">Información de Salida</label>
                        <input type="text" value={values.importantinfo} onChange={handleChange} id="importantinfo" className="form-control" />
                      </div>
                      <br />
                      <div>
                        <label className="form-label" htmlFor="prize">Costo</label>
                        <input type="text" value={values.prize} onChange={handleChange} id="prize" className="form-control" />
                      </div>
                      <br />
                      <TextArrayComponent items={items} setItems={setItems} />
                      {/* <div>
                        <label className="form-label" htmlFor="infoexcursion">Información de la excursión</label>
                        <textarea className="form-control" id="infoexcursion" onChange={handleChange} value={values.infoexcursion}>
                        </textarea>
                      </div>
                      <br />
                      <button
                        className="btn btn-secondary"
                        onClick={(e) => info.push(values.infoexcursion)}
                        type="button"
                      >
                        Agregar
                      </button> */}
                      
                      <div className="mt-3">
                        <label className="form-label" htmlFor="ubication">Ubicación</label>
                        <select value={values.ubication} onChange={handleChange} id="ubication" className="form-control" >
                          <option>
                            Santo Domingo
                          </option>
                          <option>
                            Punta Cana
                          </option>
                        </select>
                      </div>
                      <br />
                      <div>
                        <label className="form-label" htmlFor="image">Imagen de promocion</label>
                        <input type="file" className="form-control" id="image" onChange={(e) => setImage(e.target.files[0])} />
                      </div>
                      <br />
                      <div>
                        <label className="form-label" htmlFor="images">Imagenes de la excusión</label>
                        <input type="file" multiple className="form-control" id="images" onChange={(e) => setImages(e.target.files)} />
                      </div>
                      <br />
                      <div>
                        <label className="form-label" htmlFor="bgimages">Images de Fondo</label>
                        <input type="file" className="form-control" id="bgimages" onChange={(e) => setBgImage(e.target.files[0])} />
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          {/* <button
                            className="btn btn-secondary"

                            onClick={resetForm}
                          >
                            Clear
                          </button> */}

                          <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            type="button"
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        {/* <div className="col text-right">
                          Already have an account? <a href="/">Sign in</a>
                        </div> */}
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="/jasambrilogo.png"
                      className="img-fluid"
                      alt=""
                    />
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