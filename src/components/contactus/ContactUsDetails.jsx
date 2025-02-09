import useElementHeight from "@/hooks/useElementHeight";
import Link from "next/link";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";

export default function ContactUsDetails() {
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

  const [contentHeight, rightContentRef] = useElementHeight();
  return (
    <div className="flex flex-col lg:flex-row gap-3 flex-1 xl:gap-5">
      <div
        className="flex flex-col border gap-3 lg:gap-3 xl:gap-5 px-4 lg:px-8 xlg:px-12 py-4 lg:py-8 xl:py-12 rounded-md border-site-primary lg:basis-[60%]"
        ref={rightContentRef}
      >
        <h1 className="xl:text-4xl lg:text-2xl text-2xl font-semibold text-custom-blue">
          Contact Information
        </h1>
        <p className="xl:text-base text-sm text-site-typo-secondary">
          Lorem ipsum dolor sit amet consectetur. Cum risus elit aliquet
          consequat. Ut risus est mattis mattis volutpat nunc non iaculis
          nascetur. Lorem ipsum dolor sit amet consectetur. Cum risus elit
          aliquet consequat.
        </p>
        <div className="flex flex-col gap-4 text-site-typo-secondary font-medium sm:text-base lg:text-sm xlg:text-base xl:text-lg">
          {Contact.map((item, index) => (
            <div className="flex items-center gap-3" key={index}>
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 w-full" style={{ height: contentHeight }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4284.654152265143!2d91.8036004!3d26.175627300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59852bff9efd%3A0xdc486d1942bd8a06!2sFusion%20Drives!5e1!3m2!1sen!2sin!4v1738993011627!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="rounded-lg flex-1"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
