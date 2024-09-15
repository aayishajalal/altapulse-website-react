import React from "react";
import { PiStarFourBold } from "react-icons/pi";

const About = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
            {/* Logo */}
            <div className="m-auto">
              <img
                className="h-56 md:h-max"
                src="https://ik.imagekit.io/yuq4cit8f/About_Logo.svg?updatedAt=1725352980415"
                alt="about-logo"
              />
            </div>
            {/* Content - container */}
            <div className="flex flex-col py-14 px-4 md:px-8">
              {/* Heading */}
              <div className="py-2 space-y-1">
                <p className="text-secondary tracking-widest">ALTAPULSE</p>
                <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  About the company
                </h1>
              </div>
              {/* Points */}
              <div className="space-y-7 py-5 md:pr-10">
                {/* point-card-1 */}
                <div className="space-y-3">
                  {/* star-points */}
                  <div className="font-semibold flex gap-2 text-sm sm:text-base md:text-lg lg:text-xl">
                    <img
                      src="https://ik.imagekit.io/yuq4cit8f/star-point.svg?updatedAt=1725353740992"
                      alt="star-icon"
                    />
                    <p>Budgeting Intervals</p>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    porttitor.
                  </div>
                </div>

                {/* point-card-2 */}
                <div className="space-y-3">
                  {/* star-points */}
                  <div className="font-semibold flex gap-2 text-sm sm:text-base md:text-lg lg:text-xl">
                    <img
                      src="https://ik.imagekit.io/yuq4cit8f/cube-02.svg?updatedAt=1725590243285"
                      alt="cube-icon"
                    />
                    <p>Financial Planning</p>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    porttitor.
                  </div>
                </div>

                {/* point-card-3 */}
                <div className="space-y-3">
                  {/* star-points */}
                  <div className="font-semibold flex gap-2 text-sm sm:text-base md:text-lg lg:text-xl">
                    <img
                      src="https://ik.imagekit.io/yuq4cit8f/cube-03.svg?updatedAt=1725590223413"
                      alt="cube-icon"
                    />
                    <p>Market Insights</p>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque
                    aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                    porttitor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
