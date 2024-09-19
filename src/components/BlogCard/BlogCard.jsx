import React from "react";
import BlogsCardData from "../../api/BlogsCardData"; 

const BlogCard = ({ selectedCategory }) => {
  const filteredBlogs = BlogsCardData.filter((data) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Code") return data.title === "Web Development";
    if (selectedCategory === "Design") return data.title === "Graphic Design";
    if (selectedCategory === "Marketing") return (
      data.title === "Digital Marketing" || data.title === "Branding"
    );
    return false;
  });

  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-9 py-10">
            {filteredBlogs.map((data, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={data.imageSrc}
                  alt={data.title}
                  className="w-full h-48 md:h-60 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl md:text-2xl font-bold text-[#0B0366] mb-2">
                  {data.title}
                </h2>
                <h4 className="text-lg md:text-3xl font-bold text-black mb-2">
                  {data.subtitle}
                </h4>
                <p className="text-sm md:text-base text-gray-700">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
