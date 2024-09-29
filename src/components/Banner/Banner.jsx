import React from "react";
import { FillButton } from "../Button/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row bg-black rounded-xl">
            {/* Image Section */}
            <div className="flex items-end justify-start md:justify-end  md:p-2">
              <img
                src="https://ik.imagekit.io/yuq4cit8f/ThreeCircle.svg?updatedAt=1726394815864"
                alt=""
                className="h-32 md:h-[32rem] lg:h-80"
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center text-white gap-3 p-10 md:p-20 lg:p-32 w-full md:w-3/4">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Ready To Get Started?
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg">
              Unlock your business potential with innovative tech solutions. Start today!
              </p>
              {/* Adjusted Button */}
              <div className="mt-4">
                <Link to="/contact-us">
                  <FillButton name="Contact" />
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex items-end justify-end px-2 md:justify-end w-full md:w-1/2">
              <img
                src="https://ik.imagekit.io/yuq4cit8f/colorphone.svg?updatedAt=1726393017300"
                alt=""
                className="h-64 md:h-[32rem] lg:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
