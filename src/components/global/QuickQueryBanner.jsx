import Bike from "@/svgs/Bike";
import Car from "@/svgs/Car";
import Taxi from "@/svgs/Taxi";
import Thunder from "@/svgs/Thunder";
import EnquiryFormCard from "../cards/EnquiryFormCard";

export default function QuickQueryBanner() {

  const bannerData = [
    {
      icon: <Car className="size-8 xl:size-12 shrink-0" />,
      title: "Lowest Cost Ever",
      sub: "Get Lowest Rate in Assam",
    },
    {
      icon: <Bike className="size-8 xl:size-12 shrink-0" />,
      title: "Self Drive Bikes",
      sub: "Your Personal Bike",
    },
    {
      icon: <Taxi className="size-8 xl:size-12 shrink-0" />,
      title: "Self Drive Cars",
      sub: "Affordable Self Drive",
    },
    {
      icon: <Thunder className="size-8 xl:size-12 shrink-0" />,
      title: "Electric Vehicles",
      sub: "Eco-Friendly Options",
    },
  ];

  return (
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 place-items-stretch xl:place-items-center py-4 md:py-6 xl:py-12">
        {bannerData.map((item, index) => (
          <div
            className="flex items-center gap-4 xl:border-r xl:last:border-0 border-site-typo-secondary px-4 md:px-4 xl:px-16"
            key={index}
          >
            {item.icon}
            <div className="flex flex-col gap-3 shrink">
              <h1 className="text-site-secondary text-base md:text-lg xl:text-xl font-semibold whitespace-nowrap">
                {item.title}
              </h1>
              <h3 className="text-site-typo-secondary text-base capitalize">
                {item.sub}
              </h3>
            </div>
          </div>
        ))}
      </div>
        <EnquiryFormCard />
    </section>
  );
}
