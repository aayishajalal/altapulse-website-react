import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const WhyChooseUs = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
            {/* Left Side: Heading and Point Cards */}
            <div className="flex flex-col gap-5 px-4 md:px-8 order-2 lg:order-1">
              {/* Heading */}
              <div className="py-2 md:space-y-2">
                <p className="text-secondary tracking-widest text-sm sm:text-sm md:text-base lg:text-base">
                  ADVANTAGES
                </p>
                <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  Why Choose Altapulse?
                </h1>
              </div>
              {/* Point Card */}
              <div className="space-y-4">
                {/* Icon and Point */}
                <div className="font-semibold flex gap-2 text-base sm:text-base md:text-xl lg:text-2xl">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-secondary p-2">
                      <img
                        src="https://ik.imagekit.io/yuq4cit8f/bell-icon.svg?updatedAt=1725594391608"
                        className="h-4 md:h-5"
                        alt="bell-icon"
                      />
                    </div>
                    <p>Budgeting Intervals</p>
                  </div>
                </div>
                {/* Point Description */}
                <div className="text-sm sm:text-base md:text-lg lg:text-lg text-bodytext md:pr-24">
                  Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                  tristique lacus, et blandit viverra nisl velit. Sed mattis
                  rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  eget ac dolor neque lorem sapien, suspendisse aliquam.
                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="mx-auto order-1 lg:order-2">
              <img
                className="h-56 md:h-[34rem]"
                src="https://ik.imagekit.io/yuq4cit8f/Marketing.svg?updatedAt=1724916724384"
                alt="marketing"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
