import EnquirySection from "@/components/landing/EnquirySection";
import About from "@/components/landing/About";
import Banner from "@/components/landing/Banner";
import InfoSection from "@/components/landing/InfoSection";
import MainWebSiteTemPlate from "@/templates/MainWebSiteTemPlate";
import CarSection from "@/components/landing/CarSection";
import BikeSection from "@/components/landing/BikeSection";
import CustomerSection from "@/components/landing/CustomerSection";
import CustomerFeedback from "@/components/home/CustomerFeedback";

export default function SlugPage() {

  return (
    <MainWebSiteTemPlate>
      <Banner />
      <InfoSection />
      <EnquirySection />
      <About />
      <CarSection />
      <BikeSection />
      <CustomerSection />
      <CustomerFeedback />
    </MainWebSiteTemPlate>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "landing" } },
      { params: { slug: "self-drive-car-in-guwahati" } },
      { params: { slug: "self-drive-car-in-airport" } },
      { params: { slug: "self-drive-car-near-guwahati" } },
      { params: { slug: "self-drive-car-in-tawang" } },
      { params: { slug: "self-drive-car-in-mizoram" } },
      { params: { slug: "car-rental-in-guwahati" } },
      { params: { slug: "bike-rental-service-in-guwahati" } },
      { params: { slug: "bike-rental-near-me" } },
      { params: { slug: "car-rental-near-airport" } },
      { params: { slug: "self-drive-bike-rental-service" } },
    ],
    fallback: false, // Ensures only these paths are generated
  };
}

export async function getStaticProps() {
  return { props: {} };
}