import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function HomeSlider() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  const slides = [
    {
      imageSrc: "/slider/slider-1.png",
    },
    {
      imageSrc: "/slider/slider-1.png",
    },
    {
      imageSrc: "/slider/slider-1.png",
    },
  ];
  return (
    <div className="mt-[3rem] md:mt-[6rem] lg:mt-[7rem]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-item relative rounded-lg" key={index}>
            <div className="w-full relative ">
              <Image
                src={slide.imageSrc}
                loading="lazy"
                alt="banner"
                width={4320}
                height={1959}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
