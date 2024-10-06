import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const SwiperCarusel = () => {
    return (
        <div className='my-14'>
            <h2 className='text-4xl font-bold mb-8 text-center'>Swiper Slider</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                effect="fade"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide><img src="https://i.ibb.co/jV276QQ/pexels-pixabay-259588.jpg" alt="" style={{ width: "100%", height: "100vh" }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/TgTMR5B/pexels-photo-106399.jpg" alt="" style={{ width: "100%", height: "100vh" }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/cJvVq71/istockphoto-483773209-170667a.webp" alt="" style={{ width: "100%", height: "100vh" }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/HFTBqzJ/0-z6-Tdy-Uyjf-DTSg6yc.webp" alt="" style={{ width: "100%", height: "100vh" }} /></SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default SwiperCarusel;

