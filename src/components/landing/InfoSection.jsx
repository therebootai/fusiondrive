import InfoCard from "../cards/InfoCard";
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

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-1 p-12 justify-around items-center">
        {info.map((item, index) => (
          <InfoCard key={index} icon={item.icon} title={item.title} sub={item.sub} />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
