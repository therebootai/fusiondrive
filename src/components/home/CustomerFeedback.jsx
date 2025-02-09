import { Fragment, useEffect, useState } from "react";
import CustomHeading from "../global/CustomHeading";
import dynamic from "next/dynamic";
import ReviewCard from "../global/ReviewCard";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function CustomerFeedback() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 600) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const reviewData = [
    {
      name: "Madhurjya Das (Rangia)",
      description: `Excellent service, reasonable pricing, and courteous customer service. I will use your service again for my trips to Shillong.`,
    },
    {
      name: "Ajit Hazarika (Sivsagar)",
      description: `Used their service for my trip to Tawang and was extremely satisfied. The bike Royal Enfield 450 was in excellent condition, and the rental process was very easy.`,
    },
    {
      name: "Priya Kalita (Golaghat)",
      description: `Never experienced such service before. It was a big help in renting a bike in Guwahati. Thank you!`,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 500,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8 items-center">
      <CustomHeading saffronText="Our Customer" darkText="Valuable Feeback" />
      <Slider {...settings} className="w-full">
        {reviewData.map((item, index) => (
          <div key={index} className="px-2">
            <ReviewCard content={item} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
