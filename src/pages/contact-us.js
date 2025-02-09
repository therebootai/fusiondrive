import ContactUsDetails from "@/components/contactus/ContactUsDetails";
import EnquiryForm from "@/components/contactus/EnquiryForm";
import SubBanner from "@/components/global/SubBanner";
import MainWebSiteTemPlate from "@/templates/MainWebSiteTemPlate";
import Head from "next/head";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Fusion Drives</title>
      </Head>
      <MainWebSiteTemPlate>
        <SubBanner heading="Contact Us" extraLink="/contact-us" />
        <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
          <ContactUsDetails />
          <EnquiryForm />
        </div>
      </MainWebSiteTemPlate>
    </>
  );
}
