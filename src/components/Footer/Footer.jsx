import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FillButton } from '../Button/Button';

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
                <span>help@frybix.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <BsTelephoneFill className="h-5 w-5" />
                <span>+1 234 456 678 89</span>
              </div>
              <div className="flex gap-3 mt-2 justify-center md:justify-start">
                <SocialIcon network="linkedin" style={{ height: 30, width: 30 }} />
                <SocialIcon network="instagram" style={{ height: 30, width: 30 }} />
                <SocialIcon network="spotify" style={{ height: 30, width: 30 }} />
                <SocialIcon network="facebook" style={{ height: 30, width: 30 }} />
                <SocialIcon network="x" style={{ height: 30, width: 30 }} />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-lg font-semibold text-center md:text-left">Links</h1>
            <div className="space-y-2 text-sm text-center md:text-left">
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Blogs</p>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-lg font-semibold text-center md:text-left">Legal</h1>
            <div className="space-y-2 text-sm text-center md:text-left">
              <p>Terms Of Use</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-lg font-semibold text-center md:text-left">Services</h1>
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
