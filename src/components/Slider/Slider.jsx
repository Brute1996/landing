import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import { SliderStyle } from './Slider.styled';
import SliderPrevButton from './SliderPrevButton';
import SliderNextButton from './SliderNextButton';


import slide0 from '../../images/img/slider-img-0-min.jpg'
import slide1 from '../../images/img/slider-img-1-min.jpg'
import slide2 from '../../images/img/slider-img-2-min.jpg'
import slide3 from '../../images/img/slider-img-3-min.jpg'
import slide4 from '../../images/img/slider-img-4-min.jpg'

const slidesArr = [slide0, slide1, slide2, slide3, slide4, slide0, slide1, slide2, slide3, slide4];



const Slider = () => {

    return (
        <SliderStyle>
            <Swiper
                style={{ position: 'static' }}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                speed={600}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 42,
                    }
                }}
            > {slidesArr.map(slide => <SwiperSlide><img src={slide} alt="slider" /></SwiperSlide>)}
            <SliderPrevButton />
            <SliderNextButton />
            </Swiper>
        </SliderStyle>
    );
};

export default Slider;