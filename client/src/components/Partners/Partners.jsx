import React from "react";
import PartenersCard from "../PartenersCard/PartenersCard";

const Partners = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center space-y-2 md:space-y-4 text-center px-4 md:px-20">
            <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Our Collabrations
            </h1>
            <p className="text-bodytext tracking-widest text-xs sm:text-sm md:text-base lg:text-base md:w-3/4">
              Discover our collaborations that drive innovation and success
              across various industries. Together, we create impactful solutions
              that elevate brands and enhance business performance.
            </p>
          </div>
          <div className=" flex items-center justify-center md:mt-[-1rem] ">
            {" "}
            <PartenersCard
              upLogoUrl="https://ik.imagekit.io/yuq4cit8f/meta.svg?updatedAt=1726758937944"
              downLogoUrl="https://ik.imagekit.io/yuq4cit8f/google_ads.svg?updatedAt=1726758938026"
            />
            <PartenersCard
              upLogoUrl="https://ik.imagekit.io/yuq4cit8f/monday%201.svg?updatedAt=1726758937997"
              downLogoUrl="https://ik.imagekit.io/yuq4cit8f/shopify.svg?updatedAt=1726758938009"
            />
            <PartenersCard
              upLogoUrl="https://ik.imagekit.io/yuq4cit8f/wix.svg?updatedAt=1726758937571"
              downLogoUrl="https://ik.imagekit.io/yuq4cit8f/whatsapp.svg?updatedAt=1726758938091"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
