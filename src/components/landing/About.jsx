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
            Experience the freedom of exploring the Northeast with Fusion
            Drives, Guwahati’s leading self-drive car rental agency. With a
            decade of expertise, we offer reliable vehicles like Baleno, Swift,
            i20, and Tata Tiagno, perfect for your adventures across Tawang,
            Shillong, Guwahati Airport, Meghalaya, and Arunachal Pradesh. Enjoy
            the convenience of hassle-free bookings and the excitement of
            driving on your own terms. Plus, first-time renters get a 50%
            discount! Limited-time offer, so book now. Start your journey with
            Fusion Drives today, and immerse yourself in the beauty and culture
            of the region.
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