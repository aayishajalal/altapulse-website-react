import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import BlogsGlimpse from "../components/BlogsGlimpse/BlogsGlimpse";
import FeaturedArticles from "../components/FeaturedArticles/FeaturedArticles";
import Banner from "../components/Banner/Banner";

const Blogs = () => {
  return (
    <>
      <HeroSection />
      <FeaturedArticles />
      <BlogsGlimpse />
      <Banner />
    </>
  );
};

export default Blogs;
