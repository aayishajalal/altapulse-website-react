import React from "react";
import featuredArticlesData from "../../api/FeaturedArticlesData"; // Adjust the path accordingly

const FeaturedArticles = () => {
  return (
    <div className="2xl:container mx-auto py-8">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold text-gray-500">Featured Articles</h4>
          <h1 className="text-3xl font-bold text-gray-800">Editor's Choice to Dive In</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticlesData.map((article, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={article.imageSrc}
                alt={article.title}
                className="w-full md:w-1/2 h-48 md:h-auto object-cover"
              />
              <div className="p-6 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{article.title}</h3>
                <h1 className="text-2xl font-bold text-gray-900">{article.subtitle}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
