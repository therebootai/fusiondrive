import Link from "next/link";

export default function SubBanner({ heading, extraLink }) {
  function extractExtraLinkLabel(path) {
    // Split the path and get the last part
    const segments = path.split("/");
    const lastSegment = segments[segments.length - 1];

    // Replace hyphens with spaces and capitalize each word
    const formatted = lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formatted;
  }

  return (
    <section className="bg-[url('/custom-bg/sub-banner-bg.png')] bg-cover bg-center">
      <div className="h-40 lg:h-[18rem] flex flex-col items-center justify-center bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.50)_0%,_rgba(0,_0,_0,_0.50)_100%)]">
        <h1 className="text-2xl lg:text-4xl font-medium text-center text-site-primary capitalize">
          {heading}
        </h1>
        <div className="flex text-white">
          <Link href="/" className="text-base lg:text-xl text-center inline">
            Home
          </Link>
          {extraLink && (
            <span className="inline text-base lg:text-xl">&nbsp;/&nbsp;</span>
          )}
          {extraLink && (
            <Link
              href={extraLink}
              className="text-base lg:text-xl text-center inline"
            >
              {extractExtraLinkLabel(extraLink)}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
