import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LeftContentService } from "../Services/Services";

const WhyChooseUs = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center space-y-4 text-center px-4 md:px-8">
            <p className="text-secondary tracking-widest text-sm sm:text-sm md:text-base lg:text-base">
              ADVANTAGES
            </p>
            <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Why Choose Altapulse?
            </h1>
          </div>
        </div>
      </div>
      <LeftContentService
        title="Marketing and Automation"
        description="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        image_url="https://ik.imagekit.io/yuq4cit8f/Marketing.svg?updatedAt=1724916724384"
        image_alt="digital-marketing"
        icon_url="https://ik.imagekit.io/yuq4cit8f/bell-icon.svg?updatedAt=1725594391608"
        icon_alt="bell-icon"
      />
    </>
  );
};

export default WhyChooseUs;
