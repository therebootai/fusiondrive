import EnquirySection from "@/components/landing/EnquirySection";
import About from "@/components/landing/About";
import Banner from "@/components/landing/Banner";
import InfoSection from "@/components/landing/InfoSection";
import MainWebSiteTemPlate from "@/templates/MainWebSiteTemPlate";
import CarSection from "@/components/landing/CarSection";
import BikeSection from "@/components/landing/BikeSection";
import CustomerSection from "@/components/landing/CustomerSection";
import CustomerFeedback from "@/components/home/CustomerFeedback";

export default function page() {
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