import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./Registration.css";
import { registrationSchema } from "./RegistrationSchema";
import { db, storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import TextArrayComponent from "../../components/Textadd/TextAdd";
import { Link } from "react-router-dom";

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
  const [data, setData] = useState([])
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

  useEffect(() => {
    getExcursions()
  }, [])
  const getExcursions = async () => {
    const rsExcursionRef = collection(db, "rsExcursion");
    const q = query(rsExcursionRef);
    const querySnapshot = await getDocs(q);
    let excursions = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const excursion = doc.data()
      excursion.id = doc.id
      excursions.push(excursion)
    });
    console.log(excursions)
    setData(excursions)
  }
console.log(data)
  const UploadExcursion = async (e) => {
    e.info = items
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
      });
    }



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
                  <div className="col-md-10 col-lg-12 col-xl-10 order-2 order-lg-10">
                    <p className="text-center h1 fw-bold mb-5 mt-4">Solicitudes de Excursiones</p>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Nombre</th>
                          <th scope="col">Personas</th>
                          <th scope="col">Excursión</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Detalle</th>

                        </tr>
                      </thead>
                      <tbody>
                      {
                        data.map((element)=>{
                          return (
                            <tr>

                            <td>{element?.name} {" "} {element?.lastname}</td>
                            <td>{Number(element?.adults) + Number(element?.childs)}</td>
                            <td>{element?.nameexcursion}</td>
                            <td>{element?.rsfecha}</td>
                            <td>
                              <Link state={{ id: element?.id }} to='/booking' className="btn btn-secondary">Ver</Link>
                            </td>
                          </tr>
                          )
                        })
                      }
                      </tbody>
                    </table>

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