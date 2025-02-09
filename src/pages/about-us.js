import AboutUs from "@/components/about/AboutUs";
import QuickQueryBanner from "@/components/global/QuickQueryBanner";
import SubBanner from "@/components/global/SubBanner";
import MainWebSiteTemPlate from "@/templates/MainWebSiteTemPlate";
import Head from "next/head";

export default function ABOUTUS({ aboutData }) {
  return (
    <>
      <Head>
        <title>About Us | Fusion Drives</title>
      </Head>
      <MainWebSiteTemPlate>
        <SubBanner heading="About Us" extraLink="/about-us" />
        <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
          <QuickQueryBanner />
          <AboutUs content={aboutData} />
        </div>
      </MainWebSiteTemPlate>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      aboutData: {
        imgsrc: "/extra/about-cover.png",
        description: `
            <p>Welcome to <span style="font-weight: 500;">Fusion Drives</span> - Your Trusted Rental Partner in North-East India!<br/>
        <span style="font-weight: 500;">Fusion Drives</span> is your go-to destination for premium bike and car rentals across North-East India. Whether you're a travveler exploring scenic landscapes or a local needing a reliable ride, we offer well-maintained, high-quality vehicles to suit your needs.<br/>
        Our fleet includes bikes for adventurous road trips and cars for comfortable journeys, ensuring a smooth and hassle-free experience. With a commitment to exceptional customer service, we prioritize safety, affordability, and convenience, making every ride memorable.</p> <br/> <br/>
        <p>From Guwahati to Shillong, Kaziranga to Tawang, we provide flexible rental options for both short and long-term trips. Whether you need a rugged bike for hilly terrains or a spacious car for a family tour, Fusion Drives has you covered.<br/>
        Book with us today and enjoy the freedom to explore North-East India effortlessly!
        Welcome to <span style="font-weight: 500;">Fusion Drives</span> - Your Trusted Rental Partner in North-East India!
        <span style="font-weight: 500;">Fusion Drives</span> is your go-to destination for premium bike and car rentals across North-East India. Whether you're a traveler exploring </p>
            `,
        extra: [
          {
            heading: `500+`,
            support: `Satisfied Customer`,
          },
          {
            heading: `5 years`,
            support: `Of Experience`,
          },
          {
            heading: `10+`,
            support: `Car Types`,
          },
          {
            heading: `05+`,
            support: `Bike Types`,
          },
        ],
      },
    }, // will be passed to the page component as props
  };
}
