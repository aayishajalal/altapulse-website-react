import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Partners from "../components/Partners/Partners";
import About from "../components/About/About";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import { RightContentService } from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import BlogsGlimpse from "../components/BlogsGlimpse/BlogsGlimpse";
import Banner from "../components/Banner/Banner";
import SideBar from "../components/SideBar/SideBar";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Partners />
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
      <Testimonials />
      <BlogsGlimpse />
      <Banner />
    </>
  );
};

export default Home;
