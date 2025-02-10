import CustomHeading from "../global/CustomHeading";
import CarServiceCard from "../carservices/CarServiceCard";
import { AllBikeServices } from "@/lib/bikeServiceDetails";

export default function BikeRentalService() {
  return (
    <section className="flex flex-col lg:gap-6 gap-4 xl:gap-8 items-center">
      <CustomHeading
        saffronText="Fusion Drives"
        darkText="Bike Rental Service"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-stretch gap-4 lg:gap-6 xl:gap-8 self-stretch">
        {AllBikeServices.slice(0, 6).map((item, index) => (
          <CarServiceCard key={index} content={item} />
        ))}
      </div>
    </section>
  );
}
