// IndvBlogs.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../api/indvBlogs"; // Adjust the path as necessary

const IndvBlogs = () => {
  const { id } = useParams(); // Get the ID from the URL
  const blog = getBlogById(id); // Retrieve the blog using the function from blogApi.js

  if (!blog) {
    return <p>Blog not found</p>; // Handle case where blog isn't found
  }

  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          {" "}
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-8 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h2>
            <img
              src={blog.imageSrc} // Use the image source
              alt={blog.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              {blog.subtitle} {/* Use the subtitle */}
            </h4>
            <p className="text-gray-600 mb-4">
              {blog.description} {/* Use the description */}
            </p>
            {/* Display each paragraph in the content array */}
            {blog.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndvBlogs; // Ensure this line is present
