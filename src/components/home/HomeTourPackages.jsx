import { All_TOUR_DATA } from "@/lib/tourpackageData";
import Image from "next/image";
import Link from "next/link";
import CustomHeading from "../global/CustomHeading";

export default function HomeTourPackages() {
  return (
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8">
      <CustomHeading saffronText="Top Tour" darkText="Packages" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-stretch gap-4 lg:gap-6 ">
        {All_TOUR_DATA.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="relative rounded overflow-hidden"
          >
            <Image
              src={item.cover}
              alt={item.title}
              width={306}
              height={430}
              className="h-[215px] md:h-[430px] object-cover w-full"
            />
            <div className="absolute w-full h-full flex items-end z-50 bg-custom-gradient-transparent-to-dark top-0 left-0">
              <h1
                href={item.link}
                className="text-white font-bold text-base md:text-xl xl:text-2xl px-4 my-8"
              >
                {item.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
