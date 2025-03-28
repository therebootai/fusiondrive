import { useEffect, useState } from "react";
import CustomHeading from "../global/CustomHeading";
import dynamic from "next/dynamic";
import ReviewCard from "../global/ReviewCard";
import { useRouter } from "next/router";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function CustomerFeedback() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const router = useRouter();

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

  const reviewData2 = [
    {
      name: "Upak Banerjee",
      description: `Rented a Swift from Fusion Drives for our Shillong trip. Smooth process, well-maintained car, and super helpful team. Highly recommended for self-drive lovers exploring the Northeast!`,
    },
    {
      name: "Poonam Kumari",
      description: `Booked a Baleno for Guwahati Airport pickup. Car was clean and in top condition. Got 50% off as a first-time user.Loved the experience!`,
    },
    {
      name: "Dipankar Deka",
      description: `Fusion Drives made our Arunachal journey unforgettable. Great service, easy booking, and the car handled mountain roads very well. Will rent again soon!`,
    },
    {
      name: "Lakshmi Devi",
      description: `We hired an i20 for a family trip to Meghalaya. Excellent customer support and timely delivery. Very safe and reliable. Loved the freedom to explore!`,
    },
    {
      name: "Nitesh Singh",
      description: `Was unsure about self-drive rental, but Fusion Drives made it super easy. Affordable, professional, and hassle-free. Perfect for weekend escapes!`,
    },
    {
      name: "Ankita Choudhury",
      description: `Took their Tata Tiagno for a 3-day tour. Booking was smooth, and the vehicle was fuel-efficient. Happy to support a local Guwahati service!`,
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
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8 p-8 items-center">
      <CustomHeading saffronText="Our Customer" darkText="Valuable Feeback" />
      <Slider {...settings} className="w-full">
        {router.pathname === '/landing' && reviewData2.map((item, index) => (
          <div key={index} className="px-2">
            <ReviewCard content={item} />
          </div>
        ))}
        {reviewData.map((item, index) => (
          <div key={index} className="px-2">
            <ReviewCard content={item} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
