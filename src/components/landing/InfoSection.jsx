import InfoCard from "../cards/InfoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Car from "@/svgs/Car";
import Bike from "@/svgs/Bike";
import Taxi from "@/svgs/Taxi";
import Ratings from "@/svgs/Ratings";

const InfoSection = () => {
  const info = [
    {
      icon: <Car className="size-8 xl:size-12 shrink-0" />,
      title: "Self Drive Car Rental in Guwahati",
      sub: "Assured Cheapest Price Ever, get 50% Off",
    },
    {
      icon: <Bike className="size-8 xl:size-12 shrink-0" />,
      title: "Self Drive Bikes",
      sub: "10 years of Experience",
    },
    {
      icon: <Ratings className="size-8 xl:size-12 shrink-0" />,
      title: "4.7+ Google Rating",
      sub: "Assured Cheapest Price Ever",
    },
    {
      icon: <Taxi className="size-8 xl:size-12 shrink-0" />,
      title: "Largest Car Bike Collection",
      sub: "Available for all North East Location",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section>
      <div className="hidden lg:flex gap-1 p-12 justify-around items-center">
        {info.map((item, index) => (
          <InfoCard key={index} icon={item.icon} title={item.title} sub={item.sub} />
        ))}
      </div>

      <div className="lg:hidden w-[90%] mx:auto h-auto p-8">
        <Slider {...settings}>
          {info.map((item, index) => (
            <InfoCard key={index} icon={item.icon} title={item.title} sub={item.sub} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InfoSection;
