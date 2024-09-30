import React from "react";
import { testimonialsData } from "../../api/testimonialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";

const Testimonials = () => {
  return (
    <>
      <div className="2xl:container mx-auto py-8">
        {/* Content Wrapper */}
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center space-y-4 text-center px-4 md:px-8">
            <p className="text-secondary tracking-widest text-sm sm:text-sm md:text-base lg:text-base">
              TESTIMONIALS
            </p>
            <h1 className="text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              What Our Clients Say About Us?
            </h1>
          </div>

          {/* Grid layout for Image and Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 md:pl-24 flex items-center justify-center">
              <img
                src="https://ik.imagekit.io/yuq4cit8f/testimonial?updatedAt=1726389462276"
                alt="Testimonial"
                className="h-72 md:h-[32rem] lg:h-[34rem] "
              />
            </div>

            {/* Carousel */}
            <div className="order-2 md:order-1">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 5000 }}
                className="swiper-container w-full"
              >
                {testimonialsData.map((review) => (
                  <SwiperSlide key={review.id} className="mb-10">
                    <ReviewsCard
                      name={review.name}
                      title={review.title}
                      description={review.description}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
