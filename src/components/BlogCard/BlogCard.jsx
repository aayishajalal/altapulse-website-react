import React from "react";
import BlogsCardData from "../../api/BlogsCardData"; 

const BlogCard = () => {
  return (
    <>
     <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9">
                      {BlogsCardData.map((data, index) => (
                            <div 
                              key={index} 
                              className="card bg-white p-4 rounded-lg shadow-md"
                            >
                              <img 
                                src={data.imageSrc} 
                                alt={data.title} 
                                className="card-image w-full h-60 object-cover rounded-md mb-4" 
                              />
                              <h2 className="card-title text-2xl font-bold text-[#0B0366] mb-2">
                                {data.title}
                              </h2>
                              <h4 className="card-subtitle text-3xl font-bold text-black mb-2">
                                {data.subtitle}
                              </h4>
                              <p className="card-description text-1xl text-gray-700">
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
