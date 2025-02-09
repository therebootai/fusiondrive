import Bike from "@/svgs/Bike";
import Car from "@/svgs/Car";
import Taxi from "@/svgs/Taxi";
import Thunder from "@/svgs/Thunder";
import DatePicker from "react-datepicker";

export default function QuickQueryBanner() {
  const bannerData = [
    {
      icon: <Car className="size-8 xl:size-12" />,
      title: "Lowest Cost Ever",
      sub: "Get Lowest Rate in Assam",
    },
    {
      icon: <Bike className="size-8 xl:size-12" />,
      title: "Self Drive Bikes",
      sub: "Your Personal Bike",
    },
    {
      icon: <Taxi className="size-8 xl:size-12" />,
      title: "Self Drive Cars",
      sub: "Affordable Self Drive",
    },
    {
      icon: <Thunder className="size-8 xl:size-12" />,
      title: "Electric Vehicles",
      sub: "Eco-Friendly Options",
    },
  ];
  return (
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 place-items-stretch py-4 md:py-6 xl:py-12">
        {bannerData.map((item, index) => (
          <div
            className="flex items-center gap-4 lg:border-r lg:last:border-0 border-site-typo-secondary px-4 md:px-8 xl:px-16"
            key={index}
          >
            {item.icon}
            <div className="flex flex-col gap-3">
              <h1 className="text-site-secondary text-base md:text-lg xl:text-xl font-semibold">
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
          Book Today! Guaranteed Lowest price in Assam
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-x-8">
          <input
            type="text"
            className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
            placeholder="Name"
          />
          <input
            type="tel"
            min={10}
            max={10}
            className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none"
            placeholder="Mobile Number"
          />
          <select className="px-4 lg:px-7 py-4 lg:py-6 bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none">
            <option value="">Select Car or Bike</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
          <div className="bg-white/65 border border-site-border rounded text-site-secondary capitalize text-base focus:outline-none">
            <DatePicker
              //   selected={formData.dob}
              //   onChange={(date) => handleDateChange(date, "dob")}
              dateFormat="MM/dd/yyyy"
              placeholderText="DOB"
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
          />
          <button
            type="submit"
            className="px-4 lg:px-7 py-4 lg:py-6 bg-site-primary rounded text-white capitalize text-base focus:outline-none font-medium"
          >
            Book Now Today!
          </button>
        </form>
      </div>
    </section>
  );
}
