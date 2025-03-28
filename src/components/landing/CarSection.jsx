import LandingCarServiceCard from "../carservices/LandingCarServiceCard";

const CarSection = () => {
    const cars = [
      {
        name: "Baleno Car",
        img: "/cars/car-1.jpg",
      },
      {
        name: "Swift",
        img: "/cars/car-2.jpg",
      },
      {
        name: "Glanza Car",
        img: "/cars/car-3.jpg",
      },
      {
        name: "Tata Tiago Car",
        img: "/cars/car-4.jpg",
      },
      {
        name: "Tata Tigor Car",
        img: "/cars/car-5.jpg",
      },
      {
        name: "i20 N-Line",
        img: "/cars/car-6.jpg",
      },
    ];
    
  return (
    <section>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-site-secondary md:text-2xl">Largest Self Drive Car Collection in North East</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-4 lg:gap-6 xl:gap-8 p-8 mx-4">
          {cars.map((item, index) => (
            <LandingCarServiceCard key={index} content={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarSection