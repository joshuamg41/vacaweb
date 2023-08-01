import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase.config";

const Card = ({title, id,ubication, prize}:any) => {
  const [image,setImage] = useState()
  const pathReference = ref(storage, `gs://jasambritravel-d5db6.appspot.com/image/${id}.jpg`);
  const getImage = async() => {
  const imageurl = await getDownloadURL(pathReference)
    setImage(imageurl)
}
useEffect(()=>{
  getImage()
},[])
  return (
    <div className="cardContainer">
      <img src={image ? image :'./playa.png'} alt={"promotion"} className="cardImg" />
      <div className="cardBody">
        <h2 className="cardTitle">
       { title ? title :  "Be Live Experience snorkeling"}
        </h2>
        
        <h4 className="cardDetails">
          Oferta Valida Hasta <br /> 31 febrero 2021
        </h4>
        <h4 className="cardDetails">{ubication}</h4>
        <h3 className="cardFrom">Desde</h3>
        <div className="flexJustify">

        <h3 className="cardPrice">{prize ? prize: ''}</h3>
        <Link to='/hoteldetail' state={{ id: {id} }} className="bodyTextSecundary">Ver detalle</Link>
        
        </div>
      </div>
    </div>
  );
};

export default Card;
