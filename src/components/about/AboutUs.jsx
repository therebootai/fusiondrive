import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";

export default function AboutUs({ content }) {
  const { imgsrc, description, extra } = content;
  const [contentHeight, rightContentRef] = useElementHeight();
  return (
    <section className="flex flex-col md:flex-row lg:gap-6 gap-4 xl:gap-8">
      <div
        id="right-side"
        className="md:w-[40%] w-full"
        style={{ height: contentHeight }}
      >
        <Image
          src={imgsrc}
          alt="best-astrologer"
          className="rounded-md w-full h-full object-cover"
          width={416}
          height={410}
        />
      </div>
      <div
        id="left-side"
        className="flex flex-col w-full md:w-[60%] gap-3 lg:gap-4 xl:gap-5"
        ref={rightContentRef}
      >
        <h3 className="text-site-secondary text-xs xl:text-base tracking-[0.2em] capitalize">
          Best Car Hire, Car Rental, Self Car Rental Service in Guwahati
        </h3>
        <h1 className="font-bold text-site-secondary text-lg lg:text-2xl xl:text-4xl">
          Who <span className="text-site-primary">Fusion Drives</span> Are.
        </h1>
        <section
          className="text-[11px]/[15px] lg:text-[13px]/[18px] xl:text-base text-site-typo-secondary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-5">
          {extra.map((item, index) => (
            <div
              className="xl:py-5 xl:px-4 flex flex-col items-center justify-center bg-[#fafafa] gap-2"
              key={index}
            >
              <h1 className="text-lg xl:text-2xl font-bold text-site-primary">
                {item.heading}
              </h1>
              <h3 className="capitalize text-sm xl:text-lg text-site-secondary">
                {item.support}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
