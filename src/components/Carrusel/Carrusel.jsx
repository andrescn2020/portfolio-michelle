import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import useScreenSize from "../../hooks/useScreenSize";
import ImageCard from "./ImageCard";
import "swiper/css";
import "swiper/css/free-mode";
import "./Carrusel.css";

import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "/assets/CarruselUno.jpg";
import img2 from "/assets/CarruselDos.jpg";
import img3 from "/assets/CarruselTres.jpg";
import img4 from "/assets/CarruselCuatro.jpg";
import img5 from "/assets/CarruselCinco.jpg";
import img6 from "/assets/CarruselSeis.jpg";
import img7 from "/assets/CarruselSiete.jpg";

const Carrusel = () => {

  const { width } = useScreenSize();

  const slidesPerWidth = (width) => {

    if(width < 620) return 1
    else if(width > 620 && width < 1080) return 2
    else return 3

  }

  return (

    <div id="app__carrusel" className="container-fluid py-5 justify-content-center">

      <Swiper
        freeMode={true} 
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={slidesPerWidth(width)}
        spaceBetween={30}
      >

      <SwiperSlide>
        <ImageCard style={{border: "none"}} data={{imgSrc: img1}}/>
      </SwiperSlide> 

      <SwiperSlide>
        <ImageCard data={{imgSrc: img2}}/>
      </SwiperSlide> 

      <SwiperSlide>
        <ImageCard data={{imgSrc: img3}}/>
      </SwiperSlide> 

      <SwiperSlide>
        <ImageCard data={{imgSrc: img4}}/>
      </SwiperSlide> 

      <SwiperSlide>
        <ImageCard data={{imgSrc: img5}}/>
      </SwiperSlide> 

      <SwiperSlide>
        <ImageCard data={{imgSrc: img6}}/>
      </SwiperSlide> 

      <SwiperSlide>
        <ImageCard data={{imgSrc: img7}}/>
      </SwiperSlide> 
         
      </Swiper>

    </div>

  );

};

export default Carrusel;