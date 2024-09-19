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
            <div className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
              CASE STUDIES
            </div>
            <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              DISCOVER MORE TOPICS
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
