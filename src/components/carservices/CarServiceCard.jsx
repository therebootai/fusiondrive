import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import EnquiryForm from "../contactus/EnquiryForm";

export default function CarServiceCard({ content }) {
  const { imgsrc, title, rate, seat, extra } = content;
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setTimeout(() => setModalOpen(false), 300);
  };

  return (
    <div className="flex flex-col gap-3 lg:gap-5 border border-site-border hover:border-site-primary p-4 rounded">
      <Image
        src={imgsrc}
        width={366}
        height={218}
        alt={title}
        className="rounded w-full"
      />
      <h1 className="text-[#020202] text-lg lg:text-2xl font-bold text-center">
        {title}
      </h1>
      {
        <div className="flex text-site-typo-secondary capitalize text-base xl:text-xl w-full justify-center gap-4">
          {rate && <div>Rate: ₹{rate}</div>}
          {rate && seat && <div className="w-0.5 bg-site-primary"></div>}
          {seat && <div>Total Seat: {seat}</div>}
          {extra && <div>{extra}</div>}
        </div>
      }
      <div className="flex text-white text-base xl:text-xl">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="bg-site-primary flex-1 py-3 lg:py-5 text-center buttonshine"
        >
          Book Now
        </button>
        <Link
          href="https://api.whatsapp.com/send?phone=918822728674"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-site-secondary flex-1 py-3 lg:py-5 text-center buttonshine"
        >
          WhatsApp
        </Link>
      </div>
      {modalOpen && (
        <div className="fixed top-0 z-[1300] left-0 w-full h-full flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50">
          <div className=" w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col modal-container  rounded-lg">
            <div className="w-full flex p-4 justify-end items-center"></div>
            <div className=" w-[95%] md:w-[60%] lg:w-[45%] xlg:w-[40%] 2xl:w-[30%] z-[1300] relative">
              <button
                className="bg-site-primary text-white lg:w-16 right-2 absolute z-[1400] top-2 lg:h-10 w-12 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-site-primary border-2 border-site-main transition-colors duration-300"
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
    </div>
  );
}
