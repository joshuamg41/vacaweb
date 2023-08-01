import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { storage } from "../../firebase.config";

const imagess = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const MyGallery = (props) => {
  const [images, setImages] = useState([])
  const listRef = ref(storage, `images/${props.id}`);
  const getImages = async () => {
    try {
      const imagecontent = [];
      const res = await listAll(listRef);
      // res.prefixes.forEach((folderRef) => {
      //   All the prefixes under listRef.
      //   You may call listAll() recursively on them.
      //   console.log(folderRef)
      // });
  
      for (const itemRef of res.items) {
        // All the items under listRef.
        const downloadURL = await getDownloadURL(itemRef);
        imagecontent.push( {
          original: downloadURL,
          thumbnail: downloadURL,
        });
      }
  
      // Ahora puedes hacer algo con los resultados almacenados en imagecontent.
      setImages(imagecontent);
      // setImages(imagecontent); // Si estás usando React o algo similar para establecer el estado.
  
    } catch (error) {
      // Manejo de errores, si ocurre alguno durante la obtención de las imágenes.
      console.error("Error al obtener las imágenes:", error);
    }
  };
  useEffect(()=>{
    getImages()
  },[])


  return <ImageGallery items={images} {...props} />;
};

export default MyGallery;
