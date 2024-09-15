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
        <div className="w-[90%] mx-auto gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="font-medium text-1xl">CASE STUDIES</div>
            <div className="font-bold text-4xl">DISCOVER MORE TOPICS</div>
          </div>

          <div className="mb-10">
            <ul className="flex space-x-4 justify-center mt-10">
              <li
                onClick={() => handleCategoryChange("All")}
                className="w-auto p-4 border-2 border-grey rounded-lg hover:bg-gray-100 hover:border-gray-300 cursor-pointer"
              >
                All
              </li>
              <li
                onClick={() => handleCategoryChange("Code")}
                className="w-auto p-4 border-2 border-grey rounded-lg hover:bg-gray-100 hover:border-gray-300 cursor-pointer"
              >
                Code
              </li>
              <li
                onClick={() => handleCategoryChange("Design")}
                className="w-auto p-4 border-2 border-grey rounded-lg hover:bg-gray-100 hover:border-gray-300 cursor-pointer"
              >
                Design
              </li>
              <li
                onClick={() => handleCategoryChange("Marketing")}
                className="w-auto p-4 border-2 border-grey rounded-lg hover:bg-gray-100 hover:border-gray-300 cursor-pointer"
              >
                Marketing
              </li>
            </ul>
          </div>

          <div>
            <BlogCard selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsGlimpse;
