import React from "react";
import { SocialIcon } from "react-social-icons";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FillButton } from "../Button/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="2xl:container mx-auto">
        {/* Footer grid layout */}
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 py-6">
          {/* Logo & Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center text-lg font-semibold space-x-2">
              <img
                src="https://ik.imagekit.io/yuq4cit8f/Logo%20(1).svg?updatedAt=1724916762752"
                alt="Logo"
                className="h-8 cursor-pointer"
              />
              <span>Altapulse</span>
            </div>
            <div className="space-y-4 text-sm text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdEmail className="h-6 w-6" />
                <a href="mailto:help@frybix.com" className="hover:underline">
                  contact@altapulse.in
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <BsTelephoneFill className="h-5 w-5" />
                <a href="tel:+91 80563 92315" className="hover:underline">
                  +91 80563 92315
                </a>
              </div>
              <div className="flex gap-3 mt-2 justify-center md:justify-start">
                <SocialIcon
                  url="https://www.linkedin.com/company/altapulse-network/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  network="linkedin"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  url="https://www.instagram.com/altapulse_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  network="instagram"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  url="https://twitter.com/altapulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  network="twitter"
                  style={{ height: 30, width: 30 }}
                />
                <SocialIcon
                  url="https://whatsapp.com/channel/0029VaQtAuJ1iUxdgNZqH40m"
                  target="_blank"
                  rel="noopener noreferrer"
                  network="whatsapp"
                  style={{ height: 30, width: 30 }}
                />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-lg font-semibold text-center md:text-left">
              Links
            </h1>
            <div className="flex flex-col space-y-2 text-sm text-center md:text-left">
              <Link to="/">Home</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/blogs">Blogs</Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-lg font-semibold text-center md:text-left">
              Legal
            </h1>
            <div className=" flex flex-col space-y-2 text-sm text-center md:text-left">
              <Link to="/terms">Terms and Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/delivery-policies">Delivery Policy</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-lg font-semibold text-center md:text-left">
              Services
            </h1>
            <div className="space-y-2 text-sm text-center md:text-left">
              <p>Digital Marketing</p>
              <p>Automation</p>
              <p>Design</p>
              <p>Podcasts</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start px-4 md:px-0">
            {/* Heading */}
            <h1 className="text-2xl font-medium tracking-widest pb-4 text-center md:text-left">
              Newsletter
            </h1>
            <p className="text-center md:text-left">Stay up to date</p>

            {/* Input and Button Container */}
            <div className="flex flex-col md:flex-row gap-4 items-center border border-primary rounded-xl px-4 py-2 mt-2 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none py-2 px-3 w-full md:flex-grow text-sm"
              />
              <div className="w-full md:w-auto mt-2 md:mt-0">
                <FillButton name="Subscribe" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full border-t mt-8">
          <div className="text-center py-4">
            <p className="text-sm">© 2024 Altapulse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
