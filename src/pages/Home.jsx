import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Partners from "../components/Partners/Partners";
import About from "../components/About/About";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import { RightContentService } from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import BlogsGlimpse from "../components/BlogsGlimpse/BlogsGlimpse";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Partners />
      <About />
      <WhyChooseUs />
      <RightContentService />
      <Testimonials />
      <BlogsGlimpse />
      <Banner />
    </>
  );
};

export default Home;
