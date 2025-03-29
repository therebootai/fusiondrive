import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const content = [
    {
      title: "Unlock 50% Off – Drive Now!",
    },
    {
      title: "Your Ride. Your Rules.",
    },
    {
      title: "Explore Northeast on Your Terms!",
    },
    {
      title: "Freedom to Roam Starts Here!",
    },
  ];

  const [height, elementRef] = useElementHeight();
   const [isSmallScreen, setIsSmallScreen] = useState(false);
     useEffect(() => {
       const handleResize = () => {
         setIsSmallScreen(window.innerWidth < 768);
       };

       handleResize();
       window.addEventListener("resize", handleResize);

       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);

  return (
    <section>
      <div className="flex flex-col md:flex-row p-8 mx-5 gap-4">
        <div className="md:w-1/2 w-full flex flex-col gap-3" ref={elementRef}>
          <h1 className="text-2xl font-bold text-site-secondary">
            Drive the Northeast at{" "}
            <span className="text-site-primary">50% Off</span> - Book Your
            Self-Drive Adventure Now!
          </h1>
          <p className="text-site-typo-secondary mx-1">
            Fusion Drives delivers a premium self-driving car service to
            Guwahati which meets the requirements of traveling residents and
            tourists who need adaptable mobility. Our self-drive car rentals
            deliver a smooth experience to customers who visit Assam for
            business or sightseeing, or need temporary vehicles for day-to-day
            needs. <br /> <br />Fusion Drives provides a selection of high-quality vehicles
            for self drive service in Guwahati that includes small urban
            hatchbacks alongside big SUVs to fulfill all driving needs. You can
            select our rental plans because they offer transparency in pricing
            and flexible terms, and affordability without any hidden costs to
            ensure stress-free driving. <br /> <br />Customers can complete their booking
            process easily through Fusion Drives. Users can easily navigate
            through our web platform to select their desired vehicle before
            booking the rental length for quick roadway access. Our company
            maintains continuous 24-hour support for customers who need
            assistance throughout their rental experience. <br /> <br />Our Guwahati
            self-drive car rental service provides users with full trip control,
            unlike standard taxi services. The joy of personal driving combines
            with freedom and privacy, so you can commute without a professional
            driver. Our service covers every period of travel, therefore, you
            can rent vehicles for short or long-term needs. <br /> <br />Travel
            transformation from Fusion Drives emerges through their combination
            of comfort and affordable solutions. Experience premium{" "}
            <span className="font-bold">self drive service in Guwahati</span> by
            selecting us for a journey that keeps you in control of your travels
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.map((item) => (
              <div className="flex items-center justify-center gap-2 bg-site-primary p-4 rounded">
                <h1 className="text-white text-lg">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div
          className="md:w-1/2 w-full"
          style={{
            height: isSmallScreen ? "auto" : `${height}px`,
          }}
        >
          <Image
            src="/aboutfd.jpg"
            alt="about"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default About