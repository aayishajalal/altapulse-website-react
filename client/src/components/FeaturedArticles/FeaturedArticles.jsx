import React from "react";
import { useNavigate } from "react-router-dom";
import featuredArticlesData from "../../api/FeaturedArticlesData"; // Adjust the path accordingly

const FeaturedArticles = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Define the function to handle click event
  const handleCardClick = (article) => {
    // Navigate to the individual blog page with the article id
    navigate(`/blogs/${article.id}`);
  };

  return (
    <div className="2xl:container mx-auto py-8">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-8">
          <h4 className="font-normal text-lg sm:text-xl md:text-2xl lg:text-xl">
            FEATURED ARTICLES
          </h4>
          <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Editor's Choice To Dive In
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {featuredArticlesData.map((article, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "items-start" : "md:flex-row-reverse"
              } bg-white shadow-lg rounded-lg overflow-hidden p-8 cursor-pointer`} // Reverse order for odd rows and added cursor-pointer
              onClick={() => handleCardClick(article)} // Attach click handler
            >
              <img
                src={article.imageSrc}
                alt={article.title}
                className="w-full h-48 sm:h-56 md:w-1/2 md:h-64 object-cover"
              />

              <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center text-center md:text-left">
                <h1 className="font-bold flex gap-2 text-sm sm:text-base md:text-lg lg:text-2xl">
                  {article.title}
                </h1>
                <div className="text-sm sm:text-base md:text-lg lg:text-lg text-bodytext">
                  {article.subtitle}
                </div>
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
