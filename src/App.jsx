import './App.css'
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Img_1 from './assets/img_1.jpg';
import Img_2 from './assets/img_2.jpg';
import Img_3 from './assets/img_3.jpg';
import Img_4 from './assets/img_1.jpg';
import Img_5 from './assets/img_2.jpg';
import Img_6 from './assets/img_3.jpg';

function App() {
  return (
    <div className="container">
    <h1 className="heading">Flower Gallery</h1>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={Img_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img_2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img_3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img_4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img_5} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img_6} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img_1} alt="slide_image" />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>


  
  )
}

export default App
