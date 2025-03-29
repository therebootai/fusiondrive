import Head from "next/head";
import { useRouter } from "next/router";
import EnquirySection from "@/components/landing/EnquirySection";
import About from "@/components/landing/About";
import Banner from "@/components/landing/Banner";
import InfoSection from "@/components/landing/InfoSection";
import MainWebSiteTemPlate from "@/templates/MainWebSiteTemPlate";
import CarSection from "@/components/landing/CarSection";
import BikeSection from "@/components/landing/BikeSection";
import CustomerSection from "@/components/landing/CustomerSection";
import CustomerFeedback from "@/components/home/CustomerFeedback";

const metaInfo = {
  landing: {
    title: "Book Your Ride - Best Rental Service | Book Now & Drive Freely | Fusion Drive",
    description:
      "Rent a car or bike easily with our trusted self-drive services.",
  },
  "self-drive-car-in-guwahati": {
    title: "Self-Drive Cars in Guwahati - Affordable Rentals",
    description:
      "Find the best self-drive car rental services in Guwahati at great prices.",
  },
  "self-drive-car-in-airport": {
    title: "Self-Drive Car Rentals Near Airport",
    description:
      "Get a hassle-free car rental service near the airport for a smooth journey.",
  },
  "self-drive-car-near-guwahati": {
    title: "Top Self-Drive Cars Near Guwahati",
    description:
      "Choose from a wide range of self-drive cars near Guwahati at affordable rates.",
  },
  "self-drive-car-in-tawang": {
    title: "Rent a Self-Drive Car in Tawang",
    description: "Explore Tawang with our reliable self-drive car rentals.",
  },
  "self-drive-car-in-mizoram": {
    title: "Mizoram's Best Self-Drive Car Rentals",
    description: "Book a self-drive car in Mizoram for a comfortable journey.",
  },
  "car-rental-in-guwahati": {
    title: "Car Rentals in Guwahati - Easy & Affordable",
    description:
      "Find the best car rental deals in Guwahati for short and long trips.",
  },
  "bike-rental-service-in-guwahati": {
    title: "Bike Rental Service in Guwahati",
    description:
      "Rent a bike in Guwahati and explore the city at your own pace.",
  },
  "bike-rental-near-me": {
    title: "Find Bike Rentals Near You",
    description: "Search for the best bike rental services near your location.",
  },
  "car-rental-near-airport": {
    title: "Car Rentals Near Airport - Hassle-Free Service",
    description:
      "Book a car rental near the airport for your travel convenience.",
  },
  "self-drive-bike-rental-service": {
    title: "Self-Drive Bike Rentals - Easy & Quick",
    description:
      "Get the best self-drive bike rental services for your next adventure.",
  },
};

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Default meta if slug doesn't match
  const meta = metaInfo[slug] || metaInfo["landing"];

  return (
    <MainWebSiteTemPlate>
      {/* Meta Tags */}
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>

      {/* Page Content */}
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
    paths: Object.keys(metaInfo).map((slug) => ({ params: { slug } })),
    fallback: false, // Ensures only these paths are generated
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug, // Pass the slug as a prop (optional)
    },
  };
}