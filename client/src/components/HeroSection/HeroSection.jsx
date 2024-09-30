import React from "react";
import { FillButton, OutlineButton } from "../Button/Button";

const HeroSection = ({
  heading_1,
  content,
  button_1_name,
  button_2_name,
  image_url,
  image_alt,
}) => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-32">
            {/* Content Container */}
            <div className="flex flex-col gap-5 lg:my-auto px-4 md:px-8 lg:px-20 md:items-center lg:items-start">
              {/* Heading */}
              <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
                {heading_1}
              </h1>
              {/* Description */}
              <p className="text-sm sm:text-base md:text-sm lg:text-base text-bodytext">
                {content}
              </p>
              {/* Buttons */}
              <div className="flex gap-4">
                <FillButton name={button_1_name} />
                <OutlineButton name={button_2_name} />
              </div>
              {/* Image */}
              <div>
                <img
                  className="h-56 md:h-64 lg:h-64"
                  src="https://ik.imagekit.io/yuq4cit8f/HomeTriangle.svg?updatedAt=1724916744954"
                  alt="home-sub-image"
                />
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center">
              <img
                className="hidden h-72 md:block md:h-[32rem] lg:h-[34rem]"
                src={image_url}
                alt={image_alt}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
