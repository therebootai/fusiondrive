import { useEffect, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinksData } from "@/lib/navLinkData";

export default function NavBar({ ref }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown for mobile
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path || router.pathname.includes(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={ref}
      className={`pt-5 pb-5 xl:pb-7 px-4 xl:px-14 xlg:px-16 fixed w-full top-0 left-0 z-[1100] transition-all duration-500 shadow-site-shadow bg-white`}
    >
      <div className="flex justify-between items-center relative">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={181}
            height={61}
            className="w-24 lg:w-44"
          />
        </Link>

        <ul className="hidden lg:flex items-center justify-center gap-5">
          {NavLinksData.map((item, index) => (
            <li key={index} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? "text-site-primary"
                      : "text-site-secondary"
                  } text-base xl:text-xl font-medium capitalize hover:text-site-primary`}
                >
                  {item.text}
                </Link>
              ) : (
                <div className="relative">
                  <span
                    className={`${
                      isActive(item.href)
                        ? "text-site-primary"
                        : "text-site-secondary"
                    } text-base xl:text-xl font-medium capitalize hover:text-site-primary`}
                  >
                    {item.text}
                  </span>

                  <div className="absolute top-full bg-black/90 left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden flex rounded">
                    <div className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xlg:p-4">
                      <ul className="flex flex-col gap-4">
                        {item.subMenu.map((menu, con) => (
                          <li
                            key={con}
                            className="text-base xl:text-lg hover:text-site-main-yellow"
                          >
                            <Link
                              href={menu.href}
                              className="flex items-center gap-2"
                            >
                              {menu.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {/* Contact Us Button */}
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={`hidden lg:inline-flex items-center gap-2 py-2 px-4 rounded-full lg:text-base font-medium bg-site-primary text-white border border-site-primary buttonshine`}
        >
          <span>Book Now</span>
        </button>
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="menu-open"
        >
          <span
            className={`transform transition-transform duration-500 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <IoCloseSharp className="text-site-primary" />
            ) : (
              <TiThMenuOutline className="text-site-primary" />
            )}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-black/90 absolute top-full w-full left-0 text-white lg:hidden p-6 pb-24 rounded-b-lg h-screen overflow-y-scroll">
          <ul className="flex flex-col gap-4 capitalize">
            {NavLinksData.map((item, index) => (
              <li key={index} className="relative">
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary ">
                    {item.text}
                  </Link>
                ) : (
                  <div>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      <span className="capitalize">{item.text}</span>
                      <span>{openDropdown === index ? "-" : "+"}</span>
                    </div>
                    {openDropdown === index && (
                      <div
                        className={`duration-500 transition-all origin-top ${
                          openDropdown === index
                            ? "h-auto opacity-100"
                            : "h-0 opacity-0"
                        } overflow-hidden flex flex-col rounded`}
                      >
                        <ul className="flex flex-col gap-4">
                          {item.subMenu.map((menu, subIndex) => (
                            <div
                              className="text-white flex flex-col gap-6 whitespace-nowrap p-2"
                              key={subIndex}
                            >
                              <li className="text-base xlg:text-lg">
                                <Link
                                  href={menu.href}
                                  className="flex items-center gap-2"
                                >
                                  {menu.text}
                                </Link>
                              </li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
            <Link
              href="/contact-us"
              className="w-fit bg-site-primary text-white py-2 px-8 rounded-full buttonShine"
            >
              Book Now
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
