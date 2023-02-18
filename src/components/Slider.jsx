import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import './../styles/slider.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import chat from './../img/chat/chat.png'
import cards from './../img/500/500-1.png'

// eslint-disable-next-line
export default () => {
    const navigate = useNavigate()

    const handleClickProject = (e) => {
        navigate(`${e.target.id}`)
    }

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        >
        <SwiperSlide>
            <p className="Work-text">Online chat</p>
            <div className="Blur">
                <img src={chat} alt='img' height='100%' width='100%' className="Work-image" />
            </div>
            <button className="GoToProject" id='/chat' onClick={handleClickProject}></button>
        </SwiperSlide>
        <SwiperSlide>
            <p className="Work-text">Browser game</p>
            <div className="Blur">
                <img src={cards} alt="img" height='100%' width='100%' className="Work-image" />
            </div>
            <button className="GoToProject" id='/cards' onClick={handleClickProject}></button>
        </SwiperSlide>
        <SwiperSlide>
            <p className='Work-text'>Coming soon</p>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
    );
};