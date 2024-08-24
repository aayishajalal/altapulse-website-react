import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button/Button";

const Header = ({ refs }) => {
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
    // Determine the active link based on the URL or other logic
    const currentPath = location.hash.replace("#", "") || "home";
    setActiveLink(currentPath);
  }, [location]);

  const scrollToSection = (ref, id) => {
    const offset = -80; // Adjust this value
    const position =
      ref.current?.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    setActiveLink(id); // Update the active link state
    setShow(false);
  };

  return (
    <div className="2xl:container mx-auto">
      <div
        className={`w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 md:px-8 lg:px-8 py-4 md:py-3 lg:py-2 rounded-lg font-sans fixed left-4 md:left-10 lg:left-20 z-50 transition duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-white/60 to-gray-200/60 backdrop-blur-sm shadow-md top-0"
            : "bg-tertiary"
        }`}
      >
        <div className="flex justify-between items-center">
          <img
            src="https://ik.imagekit.io/yuq4cit8f/public/logo-removebg-preview%20(1).png?updatedAt=1722677559303"
            alt="Logo"
            className="h-10 md:h-10 lg:h-10 cursor-pointer"
            onClick={() => scrollToSection(refs.homeRef, "home")}
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
          <ul className="flex flex-col md:flex-row py-10 md:py-0 md:items-center gap-5  md:gap-3 lg:gap-5 text-base md:text-sm lg:text-base">
            <li id="home" className="text-center md:text-left">
              <button
                onClick={() => scrollToSection(refs.homeRef, "home")}
                className={`relative  transition duration-300 ease-in-out transform py-1 md:py-0 ${
                  activeLink === "home"
                    ? "text-primary after:content-[''] after:block after:w-full after:h-[2px] after:bg-primary after:mt-1 after:absolute after:bottom-0 after:left-0"
                    : "text-gray-700 hover:text-primary after:content-[''] after:block after:w-0 after:h-[1px] after:bg-primary after:mt-1 after:absolute after:bottom-0 after:left-0 hover:after:w-full transition-all duration-200"
                }`}
              >
                Home
              </button>
            </li>
            <li id="services" className="text-center md:text-left">
              <button
                onClick={() => scrollToSection(refs.servicesRef, "services")}
                className={`relative  transition duration-300 ease-in-out transform py-1 md:py-0 ${
                  activeLink === "services"
                    ? "text-primary after:content-[''] after:block after:w-full after:h-[2px] after:bg-primary after:mt-1 after:absolute after:bottom-0 after:left-0"
                    : "text-gray-700 hover:text-primary after:content-[''] after:block after:w-0 after:h-[1px] after:bg-primary after:mt-1 after:absolute after:bottom-0 after:left-0 hover:after:w-full transition-all duration-200"
                }`}
              >
                Services
              </button>
            </li>
            <li id="about" className="text-center md:text-left">
              <button
                onClick={() => scrollToSection(refs.aboutRef, "about")}
                className={`relative transition duration-300 ease-in-out transform py-1 md:py-0 ${
                  activeLink === "about"
                    ? "text-primary after:content-[''] after:block after:w-full after:h-[2px] after:bg-primary after:mt-1 after:absolute after:bottom-0 after:left-0"
                    : "text-gray-700 hover:text-primary after:content-[''] after:block after:w-0 after:h-[1px] after:bg-primary after:mt-1 after:absolute after:bottom-0 after:left-0 hover:after:w-full transition-all duration-200"
                }`}
              >
                About
              </button>
            </li>
            <li id="testimonials" className="text-center md:text-left">
              <button
                onClick={() =>
                  scrollToSection(refs.testimonialsRef, "testimonials")
                }
                className={`relative transition duration-300 ease-in-out transform py-1 md:py-0 ${
                  activeLink === "testimonials"
                    ? "text-primary after:content-[''] after:block after:w-full after:h-[2px] after:bg-primary after:mt-1 after:absolute after:bottom-0 after:left-0"
                    : "text-gray-700 hover:text-primary after:content-[''] after:block after:w-0 after:h-[1px] after:bg-primary after:mt-1 after:absolute after:bottom-0 after:left-0 hover:after:w-full transition-all duration-200"
                }`}
              >
                Testimonials
              </button>
            </li>
            <li id="location" className="text-center md:text-left">
              <a
                href="https://www.google.com/maps/place/THE+RED+CHILLY/@13.1237667,80.2242017,21z/data=!4m6!3m5!1s0x3a526527d8662607:0x3f894ba52039e768!8m2!3d13.1237962!4d80.2243127!16s%2Fg%2F11sdnrm65k?entry=ttu"
                className="text-sm md:text-sm lg:text-base flex items-center gap-1 md:gap-0.5 justify-center md:justify-start py-1 md:py-0 hover:text-primary transition duration-300 ease-in-out transform"
              >
                <MdLocationOn className="text-primary h-5 w-5" />
                <span className="hidden lg:inline ">Kolathur, Chennai</span>
                <span className="hidden lg:hidden md:inline  md:text-xs ">
                  Kolathur
                </span>
                <span className="inline md:hidden ">Kolathur, Chennai</span>
              </a>
            </li>
            <li id="contact" className="text-center md:text-left">
              <button
                onClick={() => scrollToSection(refs.contactRef, "contact")}
                className=""
              >
                <Button name="Contact" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
