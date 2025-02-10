import CarServiceCard from "@/components/carservices/CarServiceCard";
import SubBanner from "@/components/global/SubBanner";
import { AllCarServices } from "@/lib/carServiceDetails";
import MainWebSiteTemPlate from "@/templates/MainWebSiteTemPlate";
import Head from "next/head";

export default function CarService({ pageData }) {
  return (
    <>
      <Head>
        <title>Car Services | Fusion Drives</title>
      </Head>
      <MainWebSiteTemPlate>
        <SubBanner heading="Car Services" extraLink="/car-service" />
        <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-stretch gap-4 lg:gap-6 xl:gap-8">
            {pageData.map((item, index) => (
              <CarServiceCard key={index} content={item} />
            ))}
          </div>
        </div>
      </MainWebSiteTemPlate>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { pageData: AllCarServices },
  };
}
