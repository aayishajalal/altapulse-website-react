import React from "react";
import featuredArticlesData from "../../api/FeaturedArticlesData"; // Adjust the path accordingly

const FeaturedArticles = () => {
  return (
    <div className="2xl:container mx-auto py-8">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold text-gray-500">Featured Articles</h4>
          <h1 className="font-bold text-4xl">EDITOR'S CHOICE TO DIVE IN</h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {featuredArticlesData.map((article, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'items-start' : 'md:flex-row-reverse'} bg-white shadow-lg rounded-lg overflow-hidden`} // Reverse order for odd rows
            >
              <img
                src={article.imageSrc}
                alt={article.title}
                className="w-full md:w-1/2 object-cover"
                style={{ height: '200px' }} // Set desired height for the image
              />
              <div className="p-6 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-2xl font-bold text-[#0B0366]">{article.title}</h1>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{article.subtitle}</h3>
                <p className="text-xl font-medium text-black-900">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;