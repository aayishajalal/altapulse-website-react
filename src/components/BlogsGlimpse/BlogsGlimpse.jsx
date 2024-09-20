import React, { useState } from "react";
import BlogCard from "../BlogCard/BlogCard";

const BlogsGlimpse = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center py-10 space-y-2">
            <p className="font-normal text-lg sm:text-xl md:text-2xl lg:text-xl">
              CASE STUDIES
            </p>
            <div className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Discover More Topics
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-10">
            <ul className="flex flex-wrap justify-center gap-4 mt-10">
              <li
                onClick={() => handleCategoryChange("All")}
                className="w-auto p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
              >
                All
              </li>
              <li
                onClick={() => handleCategoryChange("Code")}
                className="w-auto p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
              >
                Code
              </li>
              <li
                onClick={() => handleCategoryChange("Design")}
                className="w-auto p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
              >
                Design
              </li>
              <li
                onClick={() => handleCategoryChange("Marketing")}
                className="w-auto p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
              >
                Marketing
              </li>
            </ul>
          </div>

          {/* Blog Cards */}
          <div>
            <BlogCard selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsGlimpse;