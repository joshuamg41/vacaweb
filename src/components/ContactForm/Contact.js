import React from "react";
import { useFormik } from 'formik';
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import './Contact.css'
import styled from "styled-components";
import img from "../../assets/busbanner.png";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import Swal from 'sweetalert2'


const Contacto = ({ idexcursion, name, prize }) => {
  const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    width: 2000px;
    height: 2000px;
    padding-top: 3rem;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 28rem;
    background-position-y: center;
    border: 0px solid #000;
  `;
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      lastname: '',
      description: '',
      childs: null,
      adults: null

    },
    onSubmit: async values => {
      const currentDate = new Date();
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const formattedDate = currentDate.toLocaleString(undefined, options);

      try {
        values.rsfecha = formattedDate
        values.excursionprize = prize
        values.idexcursion = idexcursion
        values.nameexcursion = name
        const docRef = await addDoc(collection(db, "rsExcursion"), values);
        console.log(docRef)
        Swal.fire({
          icon: 'success',
          title: 'Se ha enviado tu solicitud reserva. Te contactaremos Pronto',
          showConfirmButton: false,
          timer: 1500
        })

      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }


    },
  });

  return (
    <div >
      <div  >
        <h1 style={{ fontWeight: "400", fontSize: 50, color: "#ff9300" }}>
          Solicitar Reserva
        </h1>
        <h2 style={{ fontSize: 15, fontWeight: '400', color: '#3E6077' }}>
          Rellene el Formulario  <br />
          y nos podremos en contacto.
        </h2>
        <div >
          <form className="contactForm" onSubmit={formik.handleSubmit}>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              style={{ backgroundColor: 'white', color: 'black' }}
              placeholder="Nombre"

            />
            <input
              id="lastname"
              name="lastname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              style={{ backgroundColor: 'white', color: 'black' }}
              placeholder="Apellido"
            />
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
              style={{ backgroundColor: 'white', color: 'black' }}
              placeholder="telefono"

            />
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{ backgroundColor: 'white', color: 'black' }}
              placeholder="Correo"

            />
            {/* <input
              id="asunto"
              name="asunto"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.asunto}
              style={{ backgroundColor: 'white', color:'black'}}
              placeholder="Asunto" 
            /> */}
            <select style={{ backgroundColor: 'white', color: 'black' }} placeholder="Niños" onChange={formik.handleChange} value={formik.values.adults} name="adults">
              <option value={0}>Adultos</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}> 3</option>
              <option value={4}>4</option>
              <option value={6}>5</option>
              <option value={'grupo'}>Grupo mas de 5</option>
            </select>
            <select style={{ backgroundColor: 'white', color: 'black' }} placeholder="Adultos" onChange={formik.handleChange} value={formik.values.childs} name="childs">
              <option value={0}>Niños</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}> 3</option>
              <option value={4}>4</option>
              <option value={6}>5</option>
              <option value={'grupo'}>Grupo mas de 5</option>

            </select>
            <textarea style={{ backgroundColor: 'white', color: 'black' }} placeholder="Observacion a tener en cuenta" id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
            <br />
            <input style={{ background: '#ff9300', width: 150 }} type="submit" value="Solicitar" />

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contacto;
