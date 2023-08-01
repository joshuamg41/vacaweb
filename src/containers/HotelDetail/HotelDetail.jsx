import React, { useEffect, useState } from "react";
import DetailReservationCard from "../../components/DetailReservationCard/DetailReservationCard";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "./HotelDetail.css";
import img from "../../assets/buggiebanner.png";
import ContactForm from "../../components/ContactForm/Contact";
import MyGallery from "../../components/Gallery/Gallery";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../firebase.config";
import { useLocation } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
const HotelDetail = () => {
  const [data, setData] = useState(undefined)
  let { state } = useLocation();
  const id = state.id.id
  const [bgimage, setBgImage] = useState()

  const bgimagespathReference = ref(storage, `gs://jasambritravel-d5db6.appspot.com/bgimages/${id}.jpg`);
 
  useEffect(() => {
    getExcursion()
    getBgImage()
  }, [])

  const getBgImage = async () => {
    const bgimageurl = await getDownloadURL(bgimagespathReference)
    setBgImage(bgimageurl)
  }

 
  const getExcursion = async () => {
    const docRef = doc(db, "excursion", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${bgimage ? bgimage : img});
  width: 2000px;
  height: 2000px;
  padding-top: 3rem;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 25rem;
  background-position-y: center;
  border: 0px solid #000;
`;
  return (
    <div>
      <HeaderPage />
      <Content className="bannerText">
        {/* <Link to="/" className="tertiaryButton">
            !Reserva ya!
          </Link> */}
      </Content>
      <div className="container">
        <div className="hotelDetails">
          {/* <div className="galeryhoteldetails">
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
            <div>
              <h3>Imagen de la excusión o ruta </h3>
            </div>
          </div> */}

          <MyGallery showFullscreenButton={false} useBrowserFullscreen={false} showPlayButton={false} showNav={false} id={id} />


          {data !== undefined ? <div className="hotelDetailbody">
          {/* <h5 style={{fontSize:10}}>Ref. {id}</h5> */}
            <h3 style={{ color: 'gray', fontSize: 20 }}>
              {data?.description}
            </h3>
            <br />
            <h3>DESCRIPCIÓN</h3>
            <br />
            
            <h3>
              {data?.importantinfo}
            </h3>
            <br />

            {
              data?.info?.map((excursionInfo) => {
                return (
                  <>
                    <h3>{excursionInfo.title}</h3>
                    <h4>{excursionInfo.description}</h4>
                    <br />
                  </>
                )
              })
            }
            {/* <br />
            <h3>SEGUNDA PARADA</h3>
            <h4>
              Casa del cafe descripcion There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words
            </h4>
            <br />
            <h3>TERCERA PARADA</h3>
            <h4>
              Casa del cafe descripcion There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words
            </h4>
            <br />
            <h3>PARADA FINAL</h3>
            <h4>
              Casa del cafe descripcion There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words
            </h4> */}

          </div> : ""}
        </div>
        <br />

        <ContactForm idexcursion={id} name={data?.name} prize={data?.prize}/>

        <br />
      </div>
      <Footer />
    </div>
  );
};

export default HotelDetail;
