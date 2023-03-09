import React from 'react'
import DetailReservationCard from '../../components/DetailReservationCard/DetailReservationCard'
import Footer from '../../components/Footer/Footer'
import HeaderPage from '../../components/Header/HeaderPage'
import './Detail.css'
const Destail = () => {
  return (
    <div>  <HeaderPage />
      <div className="bannerText Detail">
        {/* <h1>
          Hospédate en un
          <br />
          fantastico hotel
        </h1>
        <h2>Reserva desde: US$ 249.00 p/p</h2> */}
        {/* <Link to="/" className="tertiaryButton">
          !Reserva ya!
        </Link> */}
      <DetailReservationCard/>
      </div>
      <Footer />
      </div>
  )
}

export default Destail