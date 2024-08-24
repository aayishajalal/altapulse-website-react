import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = ({ refs }) => {
  const [scrolled, setScrolled] = useState(false);
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

  const scrollToSection = (ref) => {
    const offset = -80; // Adjust this value
    const position =
      ref.current?.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    setShow(false);
  };

  return (
    <div className="2xl:container mx-auto py-4">
      <div className="w-[90%] mx-auto grid grid-cols-1 items-center gap-4 px-6 py-4">
        {/* Logo and links */}
        <div className="flex justify-between">
          {/* Logo Section */}
          <div className="justify-self-start">
            <img
              src="https://ik.imagekit.io/yuq4cit8f/public/logo-removebg-preview%20(1).png?updatedAt=1722677559303"
              alt="Logo"
              className="h-12"
            />
          </div>

          {/* Navigation Links Section */}
          <div className="justify-self-end pt-3">
            <ul className="flex gap-4 md:flex-row md:gap-6 pr-4">
              <li id="home">
                <button
                  onClick={() => scrollToSection(refs.homeRef)}
                  className="relative text-xs md:text-sm transition duration-300 ease-in-out transform text-gray-700 hover:text-primary"
                >
                  Home
                </button>
              </li>
              <li id="services">
                <button
                  onClick={() => scrollToSection(refs.servicesRef)}
                  className="relative text-xs md:text-sm transition duration-300 ease-in-out transform text-gray-700 hover:text-primary"
                >
                  Services
                </button>
              </li>
              <li id="about">
                <button
                  onClick={() => scrollToSection(refs.aboutRef)}
                  className="relative text-xs md:text-sm transition duration-300 ease-in-out transform text-gray-700 hover:text-primary"
                >
                  About
                </button>
              </li>
              <li id="testimonials">
                <button
                  onClick={() => scrollToSection(refs.testimonialsRef)}
                  className="relative text-xs md:text-sm transition duration-300 ease-in-out transform text-gray-700 hover:text-primary"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-1 border-bodytext" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 ">
          <div className="text-xs md:text-sm lg:text-sm text-gray-600 text-center md:text-left w-3/4 ">
            <p>
              All rights reserved ® drulagaratchagan.in | Terms and conditions
              apply!
            </p>
          </div>

          <div className="text-xs md:text-sm lg:text-sm text-gray-600 text-center md:text-left">
            <span className="font-medium">Clinic Address: &nbsp;</span>
            Dr. Ulag's Clinic, No:28/A, Velvan Nagar, Balaji Nagar main road,
            Kolathur, Chennai -600099
          </div>
          {/* Social Links Section */}
          {/* <div className="justify-self-end">
            <ul className="flex flex-row gap-5 pt-4 md:gap-6 pr-4 md:pt-0">
              <li id="linkedin">
                <SocialIcon
                  url="https://linkedin.com/in/couetilc"
                  style={{ height: 25, width: 25 }}
                />
              </li>
              <li id="social-icon">
                <SocialIcon
                  url="https://react-social-icons.com"
                  style={{ height: 25, width: 25 }}
                />
              </li>
              <li id="example">
                <SocialIcon
                  url="https://www.example.com"
                  style={{ height: 25, width: 25 }}
                />
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
