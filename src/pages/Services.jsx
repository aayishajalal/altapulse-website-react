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
      <RightContentService />
      <LeftContentService />
      <RightContentService />
      <LeftContentService />
      <FAQ />
      <Banner />
    </>
  );
};

export default Services;
