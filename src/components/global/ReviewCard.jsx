import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export default function ReviewCard({ content }) {
  const { name, description } = content;
  return (
    <div className="bg-white border border-site-border rounded px-4 md:px-6 xl:px-10 py-4 xl:py-6 relative flex items-center justify-center h-60">
      <div className="absolute inset-0 top-0 left-0 w-full h-full overflow-hidden flex items-start justify-end pe-6 gap-4">
        <Image src="/extra/blue-label.svg" width={29} height={60} alt="label" />
        <Image
          src="/extra/saffron-label.svg"
          width={29}
          height={60}
          alt="label"
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <p
          className="text-site-typo-secondary text-sm lg:text-base text-center capitalize"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="h-0.5 flex-1 w-full bg-site-primary rounded-full" />
        <h1 className="text-site-secondary text-base lg:text-xl text-center">
          {name}
        </h1>
        <div className="flex gap-2 items-center">
          <div className="flex gap-3 text-sm text-site-primary">
            {Array.from({ length: 5 }).map((_, index) => (
              <IoStarSharp key={index} />
            ))}
          </div>
          <h4 className="text-site-typo-secondary text-xs lg:text-sm">
            Google
          </h4>
        </div>
      </div>
    </div>
  );
}
