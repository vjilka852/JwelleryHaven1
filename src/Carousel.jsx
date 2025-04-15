import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from "./assets/slider8.png";
import image2 from "./assets/slidebar2.jpg";
import image3 from "./assets/goldslider(1)(1).png";

const images = [image1, image2, image3];

const Carousel = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto mt-5">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="rounded-lg shadow-lg"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[300px] md:h-[400px] object-cover rounded-lg" />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Carousel;
