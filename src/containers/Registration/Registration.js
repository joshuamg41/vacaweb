import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./Registration.css";

import { registrationSchema } from "./RegistrationSchema";
import { storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initialValues = {
  first: "",
  last: "",
  email: "",
  repassword: "",
  password: "",
};

const Registration = () => {


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
    validationSchema: registrationSchema,
    onSubmit: (values, action) => {
      alert(
        "Form is valid now!. You can make a call to API inside onSubmit function"
      );
      action.resetForm();
    },
  });


  useEffect(() => {
    getImages()
  }, [])
  const handleImage = (e) => {
    const mountainsRef = ref(storage, 'images/mountainss.jpg');
    uploadBytes(mountainsRef, e).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

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
                    <p className="text-center h1 fw-bold mb-5 mt-4">Iniciar Sesion</p>
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
                        </div> */}
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
                      <div className="row mt-3">
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
                      </div>
                      <div className="row mt-3">
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
                      </div>
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
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <button
                            className="btn btn-secondary"

                            onClick={resetForm}
                          >
                            Clear
                          </button>

                          <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <br />
                        {/* <div className="col text-right">
                          Already have an account? <a href="/">Sign in</a>
                        </div> */}
                      </div>
                      <label className="form-label" htmlFor="customFile">Default file input example</label>
                      <input type="file" className="form-control" id="customFile" onChange={(e) => handleImage(e.target.files[0])} />
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
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