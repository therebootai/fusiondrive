import { useState } from "react";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${name}\nMobile: ${number}\nDestination: ${destination}\nArrival: ${arrival} \nMessage: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=918822728674&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=918822728674&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setName("");
    setNumber("");
    setDestination("");
    setArrival("");
    setMessage("");
  };

  return (
    <section className="bg-[url('/custom-bg/enquiry-bg.png')] bg-cover bg-center flex items-center justify-center relative">
      <div className="absolute inset-0 top-0 left-0 w-full h-full bg-custom-gradient-amber-to-dark opacity-50"></div>
      <form
        className="flex flex-col flex-1 w-full items-center justify-center gap-4 px-4 xl:gap-6 py-4 md:py-7 xl:py-14 relative z-50"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="py-4 xl:py-6 text-[#020202] placeholder:text-[#020202] px-4 w-full xl:max-w-[66%] bg-white/65 focus:outline-none rounded"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          value={number}
          required
          max={10}
          min={10}
          onChange={(e) => setNumber(e.target.value)}
          className="py-4 xl:py-6 text-[#020202] placeholder:text-[#020202] px-4 w-full xl:max-w-[66%] bg-white/65 focus:outline-none rounded"
          placeholder="Mobile Number"
        />
        <input
          type="text"
          className="py-4 xl:py-6 text-[#020202] placeholder:text-[#020202] px-4 w-full xl:max-w-[66%] bg-white/65 focus:outline-none rounded"
          placeholder="Destination From"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="text"
          className="py-4 xl:py-6 text-[#020202] placeholder:text-[#020202] px-4 w-full xl:max-w-[66%] bg-white/65 focus:outline-none rounded"
          placeholder="Arrival to"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
        <textarea
          rows={5}
          className="py-4 xl:py-6 text-[#020202] placeholder:text-[#020202] px-4 w-full xl:max-w-[66%] bg-white/65 focus:outline-none rounded"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="py-4 xl:py-6 w-full xl:max-w-[33%] bg-site-primary text-white rounded text-base xl:text-xl font-medium buttonShine"
        >
          Book Now!
        </button>
      </form>
    </section>
  );
}
