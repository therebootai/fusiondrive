import { All_TOUR_DATA } from "./tourpackageData";

const navLinks = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about-us",
  },
  {
    text: "Tour Packages",
    subMenu: All_TOUR_DATA.map((item) => {
      const title = item.link.split("/").pop();
      return {
        text: title,
        href: item.link,
      };
    }),
  },
  {
    text: "Car Service",
    href: "/car-service",
  },
  {
    text: "Contact Us",
    href: "/contact-us",
  },
];

export { navLinks as NavLinksData };
