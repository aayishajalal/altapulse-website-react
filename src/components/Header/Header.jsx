import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FillButton } from "../Button/Button";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // State for active link
  const location = useLocation();

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update the active link based on the current path
    const currentPath = location.pathname.split("/")[1] || "home"; // Get the first part of the path
    setActiveLink(currentPath);
  }, [location]);

  return (
    <div className="2xl:container mx-auto">
      <div
        className={`w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 md:px-8 lg:px-8 py-2 md:py-3 lg:py-2 rounded-lg fixed left-4 md:left-10 lg:left-20 z-50 transition duration-300 ${
          scrolled || show
            ? "bg-gradient-to-r from-white/60 to-gray-200/60 backdrop-blur-sm shadow-md top-0"
            : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <img
            src="https://ik.imagekit.io/yuq4cit8f/Logo%20(1).svg?updatedAt=1724916762752"
            alt="Logo"
            className="h-12 md:h-12 lg:h-12 cursor-pointer"
          />
          <div className="md:hidden">
            {show ? (
              <IoCloseSharp
                onClick={toggle}
                className="text-white fill-white bg-primary p-2 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                size={30}
              />
            ) : (
              <GiHamburgerMenu
                onClick={toggle}
                className="text-white fill-white bg-primary p-2 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                size={30}
              />
            )}
          </div>
        </div>

        <div
          className={`${
            show ? "block" : "hidden"
          } md:flex md:justify-end items-center md:col-span-1`}
        >
          <ul className="flex flex-col md:flex-row py-10 md:py-0 md:items-center gap-5 md:gap-3 lg:gap-5 text-base font-medium md:text-sm lg:text-base">
            <li id="home" className="text-center md:text-left">
              <Link
                to="/"
                onClick={() => setActiveLink("home")}
                className={`relative transition duration-300 ease-in-out transform py-1 md:py-0 ${
                  activeLink === "" || activeLink === "home"
                    ? "text-secondary"
                    : "text-black hover:text-secondary"
                }`}
              >
                Home
              </Link>
            </li>
            <li id="services" className="text-center md:text-left">
              <Link
                to="/services"
                onClick={() => setActiveLink("services")}
                className={`relative transition duration-300 ease-in-out transform py-1 md:py-0 ${
                  activeLink === "services"
                    ? "text-secondary"
                    : "text-black hover:text-secondary"
                }`}
              >
                Services
              </Link>
            </li>
            <li id="about" className="text-center md:text-left">
              <Link
                to="/about-us"
                onClick={() => setActiveLink("about-us")}
                className={`relative transition duration-300 ease-in-out transform py-1 md:py-0 ${
                  activeLink === "about-us"
                    ? "text-secondary"
                    : "text-black hover:text-secondary"
                }`}
              >
                About Us
              </Link>
            </li>
            <li id="blogs" className="text-center md:text-left">
              <Link
                to="/blogs"
                onClick={() => setActiveLink("blogs")}
                className={`relative transition duration-300 ease-in-out transform py-1 md:py-0 ${
                  activeLink === "blogs"
                    ? "text-secondary"
                    : "text-black hover:text-secondary"
                }`}
              >
                Blogs
              </Link>
            </li>
            <li id="contact" className="text-center md:text-left">
              <Link to="/contact-us">
                <FillButton name="Contact" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
