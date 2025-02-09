import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import useElementHeight from "@/hooks/useElementHeight";

export default function MainWebSiteTemPlate({ children }) {
  const [contentHeight, rightContentRef] = useElementHeight();
  return (
    <>
      <NavBar ref={rightContentRef} />
      <main style={{ marginTop: contentHeight }}>{children}</main>
      {/* <OnlyMobile /> */}
      <Footer />
    </>
  );
}
