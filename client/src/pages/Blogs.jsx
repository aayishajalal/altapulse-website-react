import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import BlogsGlimpse from "../components/BlogsGlimpse/BlogsGlimpse";
import FeaturedArticles from "../components/FeaturedArticles/FeaturedArticles";
import Banner from "../components/Banner/Banner";

const Blogs = () => {
  return (
    <>
    <HeroSection
        heading_1="Elevate Your Brand Beyond Boundaries"
        content="Seamlessly Connecting Ideas with Impact, Crafting Your Digital Success, One Step at a Time"
        button_1_name="Contact Us"
        button_2_name="Explore"
        image_url="https://ik.imagekit.io/yuq4cit8f/home-hero-image.svg?updatedAt=1725602116092"
        image_alt=""
      />
      <FeaturedArticles />
      <BlogsGlimpse />
      <Banner />
    </>
  );
};

export default Blogs;
