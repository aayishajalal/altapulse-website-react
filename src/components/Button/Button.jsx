import React from "react";
import { FillButton } from "../Button/Button";

const Banner = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row bg-black rounded-xl">
            {/* Text Section */}
            <div className="flex flex-col justify-center text-white gap-3 p-10 md:p-20 lg:p-32 w-full md:w-3/4"> {/* Ensure text section does not exceed 50% width */}
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Ready To Get Started?
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg">
                Risus habitant leo egestas mauris diam eget morbi tempus
                vulputate.
              </p>
              <FillButton name="Contact" />
            </div>

            {/* Image Section */}
            <div className="flex items-end justify-center md:justify-end w-full md:w-1/2"> {/* Align image to bottom and ensure it takes up the remaining width */}
              <img
                src="https://ik.imagekit.io/yuq4cit8f/colorphone.svg?updatedAt=1726393017300"
                alt=""
                className="h-56 md:h-[32rem] lg:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;


