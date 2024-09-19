import React from "react";
import featuredArticlesData from "../../api/FeaturedArticlesData"; // Adjust the path accordingly

const FeaturedArticles = () => {
  return (
    <div className="2xl:container mx-auto py-8">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-8">
          <h4 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
            FEATURED ARTICLES
          </h4>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            EDITOR'S CHOICE TO DIVE IN
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {featuredArticlesData.map((article, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "items-start" : "md:flex-row-reverse"
              } bg-white shadow-lg rounded-lg overflow-hidden p-8`} // Reverse order for odd rows
            >
                            <img
                  src={article.imageSrc}
                  alt={article.title}
                  className="w-full h-48 sm:h-56 md:w-1/2 md:h-64 object-cover"
                />

              <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-lg md:text-3xl font-bold text-black mb-2">
                  {article.title}
                </h1>
                <h3 className="text-sm md:text-base text-gray-700">
                  {article.subtitle}
                </h3>
                <p className="text-xl md:text-2xl font-bold text-[#0B0366] mb-2">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
