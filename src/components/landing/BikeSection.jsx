import LandingCarServiceCard from "../carservices/LandingCarServiceCard";

const CarSection = () => {
    const bikes = [
      {
        name: "Royal Enfield Himalayan",
        img: "/landingbikes/himalayan.jpg",
      },
      {
        name: "Hero XPulse",
        img: "/landingbikes/XPulse.jpg",
      },
      {
        name: "Royal Enfield Classic",
        img: "/landingbikes/classic.jpg",
      },
    ];
    
  return (
    <section>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-site-secondary md:text-2xl">
          Most Demanding Bike Models are here
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-4 lg:gap-6 xl:gap-8 p-8 mx-4">
          {bikes.map((item, index) => (
            <LandingCarServiceCard key={index} content={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarSection