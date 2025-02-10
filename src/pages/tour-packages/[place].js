import SubBanner from "@/components/global/SubBanner";
import TourDetails from "@/components/tourpackages/TourDetails";
import TourEnquiry from "@/components/tourpackages/TourEnquiry";
import { All_TOUR_DATA } from "@/lib/tourpackageData";
import MainWebSiteTemPlate from "@/templates/MainWebSiteTemPlate";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TourPackages({ tourData }) {
  const { title, tour_description, cover, details, link } = tourData;
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`Fusion Drives | ${title}`}</title>
      </Head>
      <MainWebSiteTemPlate>
        <SubBanner heading="Tour Packages" extraLink={link} />
        <div className=" xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
          <Image
            src={cover}
            alt="cover"
            width={1296}
            height={574}
            priority
            className="w-full"
          />
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 xl:gap-10">
            <TourDetails
              title={title}
              tour_description={tour_description}
              details={details}
            />
            <TourEnquiry location={router.query.place} />
          </div>
        </div>
      </MainWebSiteTemPlate>
    </>
  );
}

// getStaticPaths to generate paths for each tour package
export async function getStaticPaths() {
  const paths = All_TOUR_DATA.map((pkg) => ({
    params: { place: pkg.link.split("/").pop() }, // Extracts "guwahati" from "/tour-packages/guwahati"
  }));

  return {
    paths,
    fallback: false, // Change to 'true' or 'blocking' if you fetch from an API later
  };
}

// getStaticProps to fetch data for each page
export async function getStaticProps({ params }) {
  const tourData = All_TOUR_DATA.find(
    (pkg) => pkg.link.split("/").pop() === params.place
  );

  if (!tourData) {
    return { notFound: true }; // Return 404 if not found
  }

  return {
    props: { tourData },
  };
}
