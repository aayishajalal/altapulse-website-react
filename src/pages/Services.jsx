import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import About from "../components/About/About";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import {
  LeftContentService,
  RightContentService,
} from "../components/Services/Services";
import FAQ from "../components/FAQ/FAQ";
import Banner from "../components/Banner/Banner";

const Services = () => {
  return (
    <>
      <HeroSection />
      <About />
      <WhyChooseUs />
      <RightContentService
        title="Marketing and Automation"
        description="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        image_url="https://ik.imagekit.io/yuq4cit8f/Editing.svg?updatedAt=1724916734902"
        image_alt="Editing"
        icon_url="https://ik.imagekit.io/yuq4cit8f/point-star-white.svg?updatedAt=1725597033557"
        icon_alt="point-star-white"
      />
      <LeftContentService
        title="Marketing and Automation"
        description="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        image_url="https://ik.imagekit.io/yuq4cit8f/Editing.svg?updatedAt=1724916734902"
        image_alt="Editing"
        icon_url="https://ik.imagekit.io/yuq4cit8f/point-star-white.svg?updatedAt=1725597033557"
        icon_alt="point-star-white"
      />
      <RightContentService
        title="Marketing and Automation"
        description="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        image_url="https://ik.imagekit.io/yuq4cit8f/Editing.svg?updatedAt=1724916734902"
        image_alt="Editing"
        icon_url="https://ik.imagekit.io/yuq4cit8f/point-star-white.svg?updatedAt=1725597033557"
        icon_alt="point-star-white"
      />
      <LeftContentService
        title="Marketing and Automation"
        description="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
        image_url="https://ik.imagekit.io/yuq4cit8f/Editing.svg?updatedAt=1724916734902"
        image_alt="Editing"
        icon_url="https://ik.imagekit.io/yuq4cit8f/point-star-white.svg?updatedAt=1725597033557"
        icon_alt="point-star-white"
      />
      <FAQ />
      <Banner />
    </>
  );
};

export default Services;
