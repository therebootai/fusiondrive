import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Added for manual controls

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

const CustomerSection = () => {
  const images = [
    "/customer/gallery.jpg",
    "/customer/gallery-1.jpg",
    "/customer/gallery-2.jpg",
    "/customer/gallery-3.jpg",
    "/customer/gallery-4.jpg",
    "/customer/gallery-5.jpg",
    "/customer/gallery-6.jpg",
    "/customer/gallery-7.jpg",
    "/customer/gallery-8.jpg",
    "/customer/gallery-9.jpg",
    "/customer/gallery-10.jpg",
    "/customer/gallery-11.jpg",
  ];

  return (
    <section className="w-full py-10 flex flex-col items-center gap-6 bg-gray-100">
      <h1 className="text-site-secondary text-2xl font-bold capitalize">
        Our <span className="text-site-primary">Customer Real Tour,</span> Real Action
      </h1>

      <div className="w-full max-w-5xl px-6">
        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={image}
                alt={`Gallery Image ${index}`}
                width={350}
                height={350}
                className="w-[22rem] h-[22rem] object-cover rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerSection;
