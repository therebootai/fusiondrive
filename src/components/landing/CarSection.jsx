import LandingCarServiceCard from "../carservices/LandingCarServiceCard";

const CarSection = () => {
    const cars = [
      {
        name: "Baleno Car",
        img: "/landingcars/baleno.jpg",
      },
      {
        name: "Swift",
        img: "/landingcars/swift.jpg",
      },
      {
        name: "Glanza Car",
        img: "/landingcars/glanza.jpg",
      },
      {
        name: "Tata Tiago Car",
        img: "/landingcars/tiago.jpg",
      },
      {
        name: "Tata Tigor Car",
        img: "/landingcars/tigor.jpg",
      },
      {
        name: "i20 N-Line",
        img: "/landingcars/i20-n-line.jpg",
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