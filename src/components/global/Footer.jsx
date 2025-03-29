import Image from "next/image";
import Link from "next/link";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaFacebook, FaPhoneVolume } from "react-icons/fa6";
import { IoLogoLinkedin, IoMailSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { All_TOUR_DATA } from "@/lib/tourpackageData";
import EnquiryForm from "../contactus/EnquiryForm";
import { FaRegWindowClose } from "react-icons/fa";
import { useEffect, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { useRouter } from "next/router";

export default function Footer() {
  const predefinedPaths = ["/[slug]"];
  const [currentPath, setCurrentPath] = useState(null);
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setTimeout(() => setModalOpen(false), 300);
  };

  const modalRef = useClickOutside(closeModal);

  const landing1 = {
    heading: "Our Self Drive Car",
    subLinks: (
      <ul className="flex flex-col gap-4 text-sm lg:text-xs xl:text-base leading-7 lg:leading-10 font-medium">
        {[
          {
            label: "Self Drive Car in Guwahati",
            href: "/self-drive-car-in-guwahati",
          },
          {
            label: "Self Drive Car in Airport",
            href: "/self-drive-car-in-airport",
          },
          {
            label: "Self Drive Car near Guwahati",
            href: "/self-drive-car-near-guwahati",
          },
          {
            label: "Self Drive Car in Guwahati",
            href: "/self-drive-car-in-guwahati",
          },
          {
            label: "Self Drive Car in Tawang",
            href: "/self-drive-car-in-tawang",
          },
          {
            label: "Self Drive Car in Mizoram",
            href: "/self-drive-car-in-mizoram",
          },
        ].map((link, key) => (
          <li key={key}>
            <Link href={link.href} className="">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
  };
  const landing2 = {
    heading: "Our Best Services",
    subLinks: (
      <ul className="flex flex-col gap-4 text-sm lg:text-xs xl:text-base leading-7 lg:leading-10 font-medium">
        {[
          {
            label: "Car Rental in Guwahati",
            href: "/car-rental-in-guwahati",
          },
          {
            label: "Self Drive Car near Guwahati",
            href: "/self-drive-car-near-guwahati",
          },
          {
            label: "Bike Rental Service in Guwahati",
            href: "/bike-rental-service-in-guwahati",
          },
          {
            label: "Bike Rental near me",
            href: "/bike-rental-near-me",
          },
          {
            label: "Car Rental near Airport",
            href: "/car-rental-near-airport",
          },
          {
            label: "Self Drive Bike Rental Service",
            href: "/self-drive-bike-rental-service",
          },
        ].map((link, key) => (
          <li key={key}>
            <Link href={link.href} className="">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
  };
  const QuickView = {
    heading: "Quick Links",
    subLinks: (
      <ul className="flex flex-col gap-4 text-sm lg:text-xs xl:text-base leading-7 lg:leading-10 font-medium">
        {[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Car Service", href: "/car-service" },
          { label: "Contact Us", href: "/contact-us" },
        ].map((link, key) => (
          <li key={key}>
            <Link href={link.href} className="">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
  };

  const OurServices = {
    heading: "Top Packages",
    subLinks: (
      <ul className="flex flex-col gap-4 text-sm lg:text-xs xl:text-base leading-7 lg:leading-10 font-medium">
        {All_TOUR_DATA.map((link, key) => (
          <li key={key}>
            <Link href={link.link} className="truncate">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    ),
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(router.pathname); // Set client-side path after hydration
    }
  }, [router.asPath]);

  const Contact = [
    {
      icon: <TbBrandWhatsappFilled className="text-site-primary" />,
      label: (
        <Link
          href="https://api.whatsapp.com/send?phone=918822728674"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm lg:text-xs xl:text-base leading-7 lg:leading-10 font-medium"
        >
          +91 88227-28674
        </Link>
      ),
    },
    {
      icon: <FaPhoneVolume className="text-site-primary" />,
      label: (
        <Link
          href="tel:+918822728674"
          className="text-sm lg:text-xs xl:text-base leading-7 lg:leading-10 font-medium"
        >
          +91 88227-28674
        </Link>
      ),
    },
    {
      icon: <IoMailSharp className="text-site-primary" />,
      label: (
        <Link
          href="mailTo:fusiondrivesguwahati@gmail.com"
          className="text-sm lg:text-xs xl:text-base leading-7 lg:leading-10 font-medium"
        >
          fusiondrivesguwahati@gmail.com
        </Link>
      ),
    },
    {
      icon: <HiLocationMarker className="text-site-primary shrink-0" />,
      label: (
        <Link
          href="https://maps.app.goo.gl/oNJf7DprvHSUVtiL9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm lg:text-xs xl:text-base leading-7 lg:leading-10 font-medium"
        >
          Geeta Nagar, Mathgharia, Mother Teresa Rd, Near Gate Hospital, Gauhati
          - 781003
        </Link>
      ),
    },
  ];

  return (
    <footer className="bg-[#F8F8F8] flex items-center justify-center bg-center border-t-2 lg:border-t-4 border-site-primary">
      <div className="flex flex-col gap-12 xl:p-16 lg:p-8 p-4 flex-1">
        <div className="grid grid-cols-1 place-items-stretch md:grid-cols-2 xl:grid-cols-4 xl:gap-7 gap-3 justify-between">
          <div className="flex flex-col gap-3 lg:gap-2 xlg:gap-3 shrink">
            <div className="flex flex-col gap-3 lg:gap-2 xlg:gap-3">
              <Image
                src="/logo.png"
                alt="logo"
                width={181}
                height={61}
                className="w-24 lg:w-44"
              />
            </div>
            <p className="capitalize text-sm lg:text-base text-site-typo-secondary lg:shrink">
              Experience the best{" "}
              <span className="font-semibold">self-drive car rental</span>{" "}
              service in Guwahati with Fusion Drive. Affordable rates, easy
              booking & well-maintained cars.
            </p>
            <div className="flex flex-col gap-3 lg:gap-1 xlg:gap-2">
              {Contact.map((contact, key) => (
                <div
                  key={key}
                  className="flex gap-2 items-center text-base lg:text-xl text-site-typo-secondary"
                >
                  {contact.icon} {contact.label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:text-base lg:text-xs text-base xl:gap-3 text-site-typo-secondary">
            <h1
              className={`text-lg xl:text-2xl font-semibold ${
                currentPath &&
                predefinedPaths.includes(router.pathname) &&
                "text-site-primary"
              } truncate`}
            >
              {currentPath && predefinedPaths.includes(router.pathname)
                ? landing1.heading
                : QuickView.heading}
            </h1>
            {currentPath && predefinedPaths.includes(router.pathname)
              ? landing1.subLinks
              : QuickView.subLinks}
          </div>
          <div className="flex flex-col gap-3 xl:text-base lg:text-xs text-base xl:gap-3 text-site-typo-secondary">
            <h1
              className={`text-lg xl:text-2xl font-semibold ${
                currentPath &&
                predefinedPaths.includes(router.pathname) &&
                "text-site-primary"
              } truncate`}
            >
              {currentPath && predefinedPaths.includes(router.pathname)
                ? landing2.heading
                : OurServices.heading}
            </h1>
            {currentPath && predefinedPaths.includes(router.pathname)
              ? landing2.subLinks
              : OurServices.subLinks}
          </div>
          <div className="flex flex-col gap-3 lg:gap-7">
            <div className="h-52 lg:h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4284.654152265143!2d91.8036004!3d26.175627300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59852bff9efd%3A0xdc486d1942bd8a06!2sFusion%20Drives!5e1!3m2!1sen!2sin!4v1738993011627!5m2!1sen!2sin"
                className="border-0"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              type="button"
              className="rounded-md px-2 md:px-4 lg:px-2 xl:px-4 h-[2.5rem] buttonshine text-white bg-site-primary flex justify-center md:gap-2 xl:gap-4 lg:gap-2 gap-1 items-center border border-white"
            >
              <span className="sm:text-xs md:text-base lg:text-[10px] xlg:text-sm xl:text-base">
                Pay Now
              </span>
            </button>
            <div className="flex gap-4">
              <h1 className="text-black text-lg">Follow With Us</h1>
              <Link
                href="https://jsdl.in/DT-99KDQVRR7US"
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-2xl"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.98951V14.5833C10 18.8711 7.1946 20 4.8189 20C3.0069 20 0 19.3014 0 17.0833C0 16.3978 0.604 15.5241 1.4634 15.5241C2.5102 15.5241 3.423 16.4649 4.6043 16.4649C6.0672 16.4649 6.0672 15.1347 6.0672 14.3145V1.98951C6.0672 0.712268 6.8994 0 8.0268 0C9.1542 0 9.9864 0.712268 9.9864 1.98951H10Z"
                    fill="#112F44"
                  />
                  <path
                    d="M23.2792 0C22.1844 0 21.4063 0.808374 21.4063 2.01472V6.94555C20.4174 6.11031 19.1512 5.68648 17.8455 5.68648C13.823 5.68648 11.8184 9.34481 11.8184 12.8703C11.8184 16.3958 14.2056 19.697 17.9777 19.697C19.2567 19.697 20.7074 19.1403 21.4063 18.0265C21.6439 18.9811 22.2373 19.5378 23.2792 19.5378C24.3736 19.5378 25.1517 18.7294 25.1517 17.5231V2.01472C25.1517 0.808374 24.3736 0 23.2792 0ZM18.4652 16.37C16.5136 16.37 15.5509 14.408 15.5509 12.7116C15.5509 11.0153 16.5136 9.0135 18.4652 9.0135C20.4169 9.0135 21.4063 10.8292 21.4063 12.5922C21.4063 14.3552 20.5228 16.37 18.4652 16.37Z"
                    fill="#112F44"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/fusion_drives?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-2xl text-site-secondary"
              >
                <AiFillInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/fusiondrives"
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-2xl text-site-secondary"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.linkedin.com/company/fusiondrives"
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-2xl text-site-secondary"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#D4D4D4]" />
        <div className="flex flex-col lg:flex-row items-center gap-4 xlg:gap-0 justify-between">
          <h1 className="text-site-typo-secondary font-medium text-sm lg:text-xl text-left">
            &copy; Copyright{" "}
            <Link href="/" className="font-semibold">
              <span className="text-site-primary">Fusion</span>&nbsp;
              <span className="text-site-secondary">Drives</span>
            </Link>{" "}
            2025 All Rights Reserved
          </h1>
          <h1 className="text-site-typo-secondary text-sm lg:text-xl text-right">
            Design &amp; Developed By:{" "}
            <Link
              href="https://rebootai.in/"
              target="_blank"
              className="inline font-semibold"
            >
              Reboot AI Pvt. Ltd.
            </Link>
          </h1>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed top-0 z-[1300] left-0 w-full h-full flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50">
          <div className=" w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col modal-container  rounded-lg">
            <div className="w-full flex p-4 justify-end items-center"></div>
            <div
              className=" w-[95%] md:w-[60%] lg:w-[45%] xlg:w-[40%] 2xl:w-[30%] z-[1300] relative"
              ref={modalRef}
            >
              <button
                className="bg-site-primary text-white lg:w-16 right-2 absolute z-[1400] top-2 lg:h-10 sm:w-12 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-site-primary border-2 border-site-main transition-colors duration-300"
                onClick={closeModal}
              >
                <FaRegWindowClose className="lg:text-2xl sm:text-xl" />
              </button>
              <div>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
