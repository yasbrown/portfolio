import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
import RUBY from '../../assets/Ruby.png'
import RAILS from '../../assets/Rails.png'
import REACT from '../../assets/React.png'
import JS from '../../assets/Javascript.png'
import HTML from '../../assets/HTML5.png'
import CSS from '../../assets/CSS3.png'
import POSTGRES from '../../assets/Postgresql.png'
import HEROKU from '../../assets/Heroku.png'

const StackSlider = () => {
  return (
    <section>
      <div className="container py-4 px-4 justify-content-center">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="tech__stack__swiper"
          breakpoints={{
            0:{
              slidesPerView: 1,
              spaceBetween: 10
            },
            480:{
              slidesPerView: 2,
              spaceBetween: 10
            },
            768:{
              slidesPerView: 3,
              spaceBetween: 15
            },
            1024:{
              slidesPerView: 4,
              spaceBetween: 15
            },
            1280:{
              slidesPerView: 5,
              spaceBetween: 30
            }
          }}
          >
            <SwiperSlide>
              <img src={RUBY} alt="Ruby icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RAILS} alt="Rails icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={REACT} alt="React icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={JS} alt="Javascript icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HTML} alt="HTML5 icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CSS} alt="CSS3 icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={POSTGRES} alt="PostgreSQL icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HEROKU} alt="Heroku icon" />
            </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default StackSlider
