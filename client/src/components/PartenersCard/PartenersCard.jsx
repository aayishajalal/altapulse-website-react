// src/PartnersCard.js
import React from "react";

const PartnersCard = ({ upLogoUrl, downLogoUrl }) => {
  return (
      <>
             <div className=" flex py-20 ">
            {/* up-partner */}
            <div className="relative inline-block md:left-[-1rem] ">
              {/* Larger Image */}
              <img
                src="https://ik.imagekit.io/yuq4cit8f/Top.svg?updatedAt=1726758589331"
                alt="Large"
                className="object-contain"
              />
              {/* Centered Smaller Image */}
              <div className="absolute inset-0 flex items-center justify-center top-4 md:top-10">
                <img
                  src={upLogoUrl}
                  alt="Small"
                  className="h-6 md:h-16 object-cover"
                />
              </div>
            </div>
            {/* down-partner */}
            <div className="relative inline-block top-2 md:top-8 md:left-[-1rem]">
              {/* Larger Image */}
              <img
                src="https://ik.imagekit.io/yuq4cit8f/down.svg?updatedAt=1726758589324"
                alt="Large"
                className="object-contain"
              />
              {/* Centered Smaller Image */}
              <div className="absolute inset-0 flex items-center justify-center bottom-4 md:bottom-10">
                <img
                  src={downLogoUrl}
                  alt="Small"
                  className="h-6 md:h-16 object-cover"
                />
              </div>
            </div>
          </div>
      {/* <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
       
        </div>
      </div> */}
    </>
  );
};

export default PartnersCard;
