import SubBanner from "@/components/global/SubBanner";
import MainWebSiteTemPlate from "@/templates/MainWebSiteTemPlate";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Fusion Drives</title>
      </Head>
      <MainWebSiteTemPlate>
        <SubBanner heading="Thank You" extraLink="/thank-you" />
        <div className="xl:p-16 lg:p-8 p-4 flex flex-col items-center lg:gap-16 gap-8">
          <Image
            src="/extra/thank-you.jpg"
            alt="thank you"
            width={700}
            height={700}
            priority
            className="w-80"
          />
          <div className="flex flex-col items-center gap-4">
            <h3 className="xl:text-lg md:text-base text-sm font-semibold text-site-secondary text-center">
              Thank You for contact with us. We will get back to you soon
            </h3>
            <Link
              href="/"
              className="xl:text-lg md:text-base text-sm font-semibold bg-site-primary text-white px-4 py-2 rounded inline-flex items-center gap-2"
            >
              <FaHome size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </MainWebSiteTemPlate>
    </>
  );
}
