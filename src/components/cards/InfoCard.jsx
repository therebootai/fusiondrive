const InfoCard = ({icon, title, sub}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 w-full 
      transform transition-all duration-1000 ease-out
      `}
    >
      <div
        className="flex flex-col md:flex-row items-center gap-4"
      >
        {icon}
        <div className="flex flex-col shrink">
          <h1 className="text-site-secondary text-base md:text-lg xl:text-xl font-semibold whitespace-nowrap">
            {title}
          </h1>
          <h3 className="text-site-typo-secondary text-nowrap text-base capitalize">
            {sub}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
