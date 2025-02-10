import { useState } from "react";

export default function TourEnquiry({ location }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [touristNumber, setTouristNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${name}\nMobile: ${number}\nLocation: ${location}\nTourist Number: ${touristNumber}\nMessage: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=918822728674&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=918822728674&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setName("");
    setNumber("");
    setTouristNumber("");
    setMessage("");
  };

  return (
    <form
      className="flex flex-col gap-4 xl:gap-8 bg-[#fafafa] border border-[#f5f5f5] basis-0 self-stretch lg:basis-[40%] p-4 lg:p-6 xl:p-9"
      onSubmit={handleSubmit}
    >
      <h1 className="text-site-secondary text-lg md:text-xl xl:text-2xl font-bold text-center">
        Inquiry Now
      </h1>
      <input
        type="text"
        className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        min={10}
        max={10}
        required
        className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
        placeholder="Mobile Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="number"
        className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
        placeholder="No. of Guests"
        value={touristNumber}
        onChange={(e) => setTouristNumber(e.target.value)}
      />
      <input
        type="text"
        className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
        placeholder="Messege"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 lg:px-7 py-4 lg:py-6 bg-site-primary rounded text-white capitalize text-base focus:outline-none font-medium"
      >
        Book Now Today!
      </button>
    </form>
  );
}
