import React from "react";
import DetailReservationCard from "../../components/DetailReservationCard/DetailReservationCard";
import Footer from "../../components/Footer/Footer";
import HeaderPage from "../../components/Header/HeaderPage";
import ImageGallery from "react-image-gallery";
import './HotelDetail.css';
const HotelDetail = () => {
  const images = [
    {
      original: "https://picsum.photos/id/500/500/500/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/500/500/500/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/500/500/500/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div>
      <HeaderPage />
      <img
        className="AppBanner"
        src={"/RectangleHotelDetail.png"}
        alt={"pool vacation"}
        style={{ height: 130, width: "100%" }}
      />
      <div className="galeryContainer">
        {/* <ImageGallery items={images}/> */}
        <div className="galeryBox">
          <div ></div>
        </div>
        <DetailReservationCard />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default HotelDetail;
