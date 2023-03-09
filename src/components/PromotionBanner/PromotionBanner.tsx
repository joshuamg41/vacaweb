import React from 'react'
import './PromotionBanner.css'
const PromotionBanner = () => {
  return (
    <div className='promotionBannerContainer'>
         {/* <img src={"/collage.png"} alt={"promotion"} /> */}
         <div className='promotionBannerImg'></div>
         <div className='promotionBannerContent'>
          <h2>Armamos tu paquete</h2>
          <p>En vaca nos importa por eso te escuchamos
y armamos un pquete especial orientado
a tus necesidades.</p>
         </div>
    </div>
  )
  }
export default PromotionBanner