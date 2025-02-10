import Image from "next/image";
import CustomHeading from "../global/CustomHeading";

export default function TravelMoments() {
  return (
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8 items-center lg:items-stretch">
      <CustomHeading
        saffronText="Explore Our"
        darkText="Stunning Travel Moments"
      />
      <div className="flex flex-col lg:flex-row gap-6">
        <Image
          src="/gallery/gallery-1.png"
          alt="gallery"
          className="object-cover lg:w-[36.5vmax]"
          width={526}
          height={526}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-stretch">
          {[
            "/gallery/gallery-2.png",
            "/gallery/gallery-3.png",
            "/gallery/gallery-4.png",
            "/gallery/gallery-5.png",
            "/gallery/gallery-6.png",
            "/gallery/gallery-7.png",
          ].map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="gallery"
              width={232}
              height={251}
              className="w-full lg:w-[16.1vmax] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
