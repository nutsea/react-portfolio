import React from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import './../styles/slider.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sl1 from './../img/podcast/pictures/slides/Sl1.png'
import sl2 from './../img/podcast/pictures/slides/Sl2.png'
import sl3 from './../img/podcast/pictures/slides/Sl3.png'
import sl4 from './../img/podcast/pictures/slides/Sl4.png'
import sl5 from './../img/podcast/pictures/slides/Sl5.png'

// eslint-disable-next-line
export default () => {
    const navigate = useNavigate()

    const handleClickProject = (e) => {
        navigate(`${e.target.id}`)
    }

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={15}
        slidesPerView={5}
        loop={true}
        >
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl1} alt="sl1" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl2} alt="sl2" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl3} alt="sl3" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl4} alt="sl4" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl5} alt="sl5" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl1} alt="sl1" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl2} alt="sl2" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl3} alt="sl3" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl4} alt="sl4" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl5} alt="sl5" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl1} alt="sl1" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl2} alt="sl2" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl3} alt="sl3" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl4} alt="sl4" height='100%' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
            <img id='/podcast/detail' onClick={handleClickProject} src={sl5} alt="sl5" height='100%' width='100%' />
        </SwiperSlide>
        </Swiper>
    );
};