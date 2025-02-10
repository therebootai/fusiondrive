import Bike from "@/svgs/Bike";
import Car from "@/svgs/Car";
import Taxi from "@/svgs/Taxi";
import Thunder from "@/svgs/Thunder";
import { useState } from "react";
import DatePicker from "react-datepicker";

export default function QuickQueryBanner() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [transportType, setTransportType] = useState("");
  const [pickUpDate, setPickUpDate] = useState(null);
  const [message, setMessage] = useState("");

  const bannerData = [
    {
      icon: <Car className="size-8 xl:size-12 shrink-0" />,
      title: "Lowest Cost Ever",
      sub: "Get Lowest Rate in Assam",
    },
    {
      icon: <Bike className="size-8 xl:size-12 shrink-0" />,
      title: "Self Drive Bikes",
      sub: "Your Personal Bike",
    },
    {
      icon: <Taxi className="size-8 xl:size-12 shrink-0" />,
      title: "Self Drive Cars",
      sub: "Affordable Self Drive",
    },
    {
      icon: <Thunder className="size-8 xl:size-12 shrink-0" />,
      title: "Electric Vehicles",
      sub: "Eco-Friendly Options",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${name}\nMobile: ${number}\nTransport Type: ${transportType}\nPickup Date: ${pickUpDate} \nMessage: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=918822728674&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=918822728674&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setName("");
    setNumber("");
    setTransportType("");
    setPickUpDate(null);
    setMessage("");
  };

  return (
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 place-items-stretch xl:place-items-center py-4 md:py-6 xl:py-12">
        {bannerData.map((item, index) => (
          <div
            className="flex items-center gap-4 xl:border-r xl:last:border-0 border-site-typo-secondary px-4 md:px-8 xl:px-16"
            key={index}
          >
            {item.icon}
            <div className="flex flex-col gap-3 shrink">
              <h1 className="text-site-secondary text-base md:text-lg xl:text-xl font-semibold whitespace-nowrap">
                {item.title}
              </h1>
              <h3 className="text-site-typo-secondary text-base capitalize">
                {item.sub}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col border border-site-border bg-[#fafafa] p-4 md:p-6 xl:p-9 gap-4">
        <h1 className="text-site-secondary font-bold text-base md:text-lg xl:text-2xl">
          Book Today! Guaranteed Lowest price
        </h1>
        <form
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-x-8"
          onSubmit={handleSubmit}
        >
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
            minLength={10}
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            maxLength={10}
            className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
            placeholder="Mobile Number"
          />
          <select
            className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
            value={transportType}
            onChange={(e) => setTransportType(e.target.value)}
          >
            <option value="">Select Car or Bike</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
          <div className="bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none">
            <DatePicker
              selected={pickUpDate}
              onChange={(date) => setPickUpDate(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="Pick up Date"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              required
              className="!w-full px-4 lg:px-7 py-4 lg:py-6 bg-white outline-none placeholder:text-site-main-gray text-site-main-gray text-sm"
            />
          </div>
          <input
            type="text"
            className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
            placeholder="Messege"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 lg:px-7 py-4 lg:py-6 bg-site-primary rounded text-white capitalize text-base focus:outline-none font-medium buttonshine"
          >
            Book Now Today!
          </button>
        </form>
      </div>
    </section>
  );
}
