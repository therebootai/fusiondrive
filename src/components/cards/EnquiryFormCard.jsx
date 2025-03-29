import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

const EnquiryFormCard = () => {
   const predefinedPaths = [
     "/self-drive-car-in-guwahati/",
     "/self-drive-car-in-airport/",
     "/self-drive-car-near-guwahati/",
     "/self-drive-car-near-tawang/",
     "/self-drive-car-in-tawang/",
     "/self-drive-car-near-mizoram/",
     "/self-drive-car-in-mizoram/",
     "/bike-rental-near-me/",
     "/car-rental-in-guwahati/",
     "/bike-rental-service-in-guwahati/",
     "/car-rental-near-airport/",
     "/self-drive-bike-rental-service/",
     "/landing/",
   ];

  const router = useRouter();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [transportType, setTransportType] = useState("");
  const [pickUpDate, setPickUpDate] = useState(null);
  const [message, setMessage] = useState("");

  const [currentPath, setCurrentPath] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(router.asPath); // Set client-side path after hydration
    }
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
    <section>
      <div className="flex flex-col border border-site-border bg-[#fafafa] p-4 md:p-6 xl:p-9 gap-4">
        <h1 className="text-site-secondary font-bold text-base md:text-lg xl:text-2xl">
          Book Today! Guaranteed Lowest price
        </h1>
        <form
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-x-8 w-full"
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
          {currentPath && predefinedPaths.includes(currentPath) ? (
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
          ) : (
            <select
              className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
              value={transportType}
              onChange={(e) => setTransportType(e.target.value)}
            >
              <option value="">Select Car or Bike</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
          )}

          {currentPath && !predefinedPaths.includes(router.asPath) && (
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
                className="!w-full px-4 lg:px-7 py-4 lg:py-6 bg-white outline-none placeholder:text-site-main-gray text-site-main-gray text-sm md:col-span-2 col-span-1"
              />
            </div>
          )}
          <input
            type="text"
            className={`px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none ${
              currentPath && predefinedPaths.includes(router.asPath)
                ? "md:col-span-2 col-span-1"
                : ""
            }`}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 lg:px-7 py-4 lg:py-6 bg-site-primary rounded text-white capitalize text-base focus:outline-none font-medium buttonshine w-full"
          >
            Book Now Today!
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryFormCard;
