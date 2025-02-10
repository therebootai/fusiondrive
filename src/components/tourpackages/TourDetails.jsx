export default function TourDetails({ title, tour_description, details }) {
  return (
    <div className="flex flex-col gap-5 lg:basis-[60%]">
      <h1 className="text-site-secondary text-xl md:text-2xl xl:text-4xl font-bold">
        {title}
      </h1>
      <p className="text-site-typo-secondary text-base capitalize">
        {tour_description}
      </p>
      <p
        className="text-site-typo-secondary text-base capitalize"
        dangerouslySetInnerHTML={{ __html: details }}
      />
    </div>
  );
}
