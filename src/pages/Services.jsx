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
      <HeroSection
        heading_1="Elevate Your Brand Beyond Boundaries"
        content="Seamlessly Connecting Ideas with Impact, Crafting Your Digital Success, One Step at a Time"
        button_1_name="Contact Us"
        button_2_name="Explore"
        image_url="https://ik.imagekit.io/yuq4cit8f/home-hero-image.svg?updatedAt=1725602116092"
        image_alt=""
      />
      <About />
      {/* <WhyChooseUs /> */}
      <div className=" 2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          {" "}
          <div className="py-2 space-y-1 text-center">
            <p className="text-secondary tracking-widest">ALTAPULSE</p>
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Our Services
            </h1>
          </div>
        </div>
      </div>

      <RightContentService
        title="
Web Development"
        description="Elevate your online presence with bespoke, user-centric websites.  
Captivate your audience with stunning designs that engage.  
Boost conversions effortlessly through intuitive navigation.  
Achieve higher rankings on search engines for greater visibility.  
"
        image_url="https://ik.imagekit.io/yuq4cit8f/web-development.svg"
        image_alt="Web Development"
        icon_url="https://ik.imagekit.io/yuq4cit8f/point-star-white.svg?updatedAt=1725597033557"
        icon_alt="point-star-white"
      />
      <LeftContentService
        title="Graphic Design"
        description="Transform your brand identity with captivating visuals that stand out.  
Create a memorable experience that resonates with your audience.  
Engage potential customers through striking designs and imagery.  
Leave a lasting impression that sets you apart from the competition.  
"
        image_url="https://ik.imagekit.io/yuq4cit8f/graphic-design.svg"
        image_alt="Graphic Design"
        icon_url="https://ik.imagekit.io/yuq4cit8f/bell-icon.svg?updatedAt=1725594391608"
        icon_alt="bell-icon"
      />
      <RightContentService
        title="Digital Marketing"
        description="Cut through the clutter with targeted campaigns designed for impact.  
Reach the right audience by understanding their needs and preferences.  
Deliver your message at the right time for maximum effectiveness.  
Utilize data-driven strategies to enhance your campaign’s reach.  
"
        image_url="https://ik.imagekit.io/yuq4cit8f/Marketing.svg?updatedAt=1724916724384"
        image_alt="Digital Marketing"
        icon_url="https://ik.imagekit.io/yuq4cit8f/point-star-white.svg?updatedAt=1725597033557"
        icon_alt="point-star-white"
      />
      <LeftContentService
        title="Branding"
        description="Craft a cohesive narrative that speaks to your audience's values and aspirations.  
Build an authentic brand identity that reflects your mission and vision.  
Engage customers with stories that foster emotional connections.  
 "
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
