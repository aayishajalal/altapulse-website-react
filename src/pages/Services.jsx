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
        title="
Web Development"
        description="Elevate your online presence with bespoke, user-centric websites that captivate, convert and rank yourself higher."
        image_url="https://ik.imagekit.io/yuq4cit8f/Editing.svg?updatedAt=1724916734902"
        image_alt="Web Development"
        icon_url="https://ik.imagekit.io/yuq4cit8f/point-star-white.svg?updatedAt=1725597033557"
        icon_alt="point-star-white"
      />
      <LeftContentService
        title="Graphic Design"
        description="Transform your brand identity with captivating visuals that leave a lasting impression and grap the attention with attraction."
        image_url="https://ik.imagekit.io/yuq4cit8f/Editing.svg?updatedAt=1724916734902"
        image_alt="Graphic Design"
        icon_url="https://ik.imagekit.io/yuq4cit8f/bell-icon.svg?updatedAt=1725594391608"
        icon_alt="bell-icon"
      />
      <RightContentService
        title="Digital Marketing"
        description="Cut through the clutter with targeted campaigns that reach the right audience at the right time."
        image_url="https://ik.imagekit.io/yuq4cit8f/Editing.svg?updatedAt=1724916734902"
        image_alt="Digital Marketing"
        icon_url="https://ik.imagekit.io/yuq4cit8f/point-star-white.svg?updatedAt=1725597033557"
        icon_alt="point-star-white"
      />
      <LeftContentService
        title="Branding"
        description="Craft a cohesive narrative that resonates with your audience, building a brand that stands the test of time."
        image_url="https://ik.imagekit.io/yuq4cit8f/Editing.svg?updatedAt=1724916734902"
        image_alt="Branding"
        icon_url="https://ik.imagekit.io/yuq4cit8f/bell-icon.svg?updatedAt=1725594391608"
        icon_alt="bell-icon"
      />
      <FAQ />
      <Banner />
    </>
  );
};

export default Services;
