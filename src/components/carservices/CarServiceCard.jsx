import Image from "next/image";
import Link from "next/link";

export default function CarServiceCard({ content }) {
  const { imgsrc, title, rate, seat } = content;
  return (
    <div className="flex flex-col gap-3 lg:gap-5 border border-site-border hover:border-site-primary p-4 rounded">
      <Image
        src={imgsrc}
        width={366}
        height={218}
        alt={title}
        className="rounded w-full"
      />
      <h1 className="text-[#020202] text-lg lg:text-2xl font-bold text-center">
        {title}
      </h1>
      <div className="flex text-site-typo-secondary capitalize text-base xl:text-xl w-full justify-center gap-4">
        <div>Rate: ₹{rate}</div>
        <div className="w-0.5 bg-site-primary"></div>
        <div>Total Seat: {seat}</div>
      </div>
      <div className="flex text-white text-base xl:text-xl">
        <button
          type="button"
          className="bg-site-primary flex-1 py-3 lg:py-5 text-center buttonshine"
        >
          Book Now
        </button>
        <Link
          href="https://api.whatsapp.com/send?phone=918822728674"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-site-secondary flex-1 py-3 lg:py-5 text-center buttonshine"
        >
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
