import { AllCarServices } from "@/lib/carServiceDetails";
import CustomHeading from "../global/CustomHeading";
import CarServiceCard from "../carservices/CarServiceCard";

export default function CarRentalService() {
  return (
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8 items-center">
      <CustomHeading
        saffronText="Fusion Drives"
        darkText="Car Rental Service"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-stretch gap-4 lg:gap-6 xl:gap-8">
        {AllCarServices.map((item, index) => (
          <CarServiceCard key={index} content={item} />
        ))}
      </div>
    </section>
  );
}
