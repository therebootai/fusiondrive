import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EnquiryForm() {
  const predefinedPaths = [
    "/self-drive-car-in-guwahati/",
    "/self-drive-car-in-airport/",
    "/self-drive-car-near-guwahati/",
    "/self-drive-car-in-tawang/",
    "/self-drive-car-near-tawang/",
    "/self-drive-car-near-mizoram/",
    "/self-drive-car-in-mizoram/",
    "/bike-rental-near-me/",
    "/car-rental-in-guwahati/",
    "/bike-rental-service-in-guwahati/",
    "/car-rental-near-airport/",
    "/self-drive-bike-rental-service/",
    "/landing/",
  ];

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [message, setMessage] = useState("");
  const [pickUpDate, setPickUpDate] = useState(null);

  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.asPath);

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router.asPath]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("name", name);
    formData.append("phone", number);
    if (destination !== "") formData.append("destination", destination);
    if (arrival !== "") formData.append("arrival", arrival);
    formData.append("message", message);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    // **Add a custom email subject**
    formData.append("_subject", "Hello, New Google Ad Leads");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success", data);
      e.target.reset();
    } else {
      console.log("Error", data);
    }

    setName("");
    setNumber("");
    setDestination("");
    setArrival("");
    setMessage("");
    setPickUpDate(null);
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
          pattern="[0-9]{10}"
          maxLength={10}
          minLength={10}
          onChange={(e) => setNumber(e.target.value)}
          className="py-4 xl:py-6 text-[#020202] placeholder:text-[#020202] px-4 w-full xl:max-w-[66%] bg-white/65 focus:outline-none rounded"
          placeholder="Mobile Number"
        />
        {currentPath && predefinedPaths.includes(router.asPath) ? (
          <input
            type="date"
            name="pickupdate"
            className="py-4 xl:py-6 text-[#020202] placeholder:text-[#020202] px-4 w-full xl:max-w-[66%] bg-white/65 focus:outline-none rounded"
            onChange={(e) => setPickUpDate(e.target.value)}
          />
        ) : (
          <div className="flex gap-4 flex-col w-full items-center">
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
          </div>
        )}

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
