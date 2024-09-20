import React from "react";
import { faqData } from "../../api/faqData";

const FAQ = () => {
  return (
    <div className="2xl:container mx-auto px-4 py-8">
      <div className="w-full mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 md:p-8 shadow-md rounded-md hover:shadow-lg transition-shadow duration-300 
                ${index % 2 === 0 ? 'bg-blue-900 text-white' : 'bg-white text-gray-700'}`}
            >
              <h1 className="font-semibold flex gap-2 text-base sm:text-base md:text-xl lg:text-2xl">{faq.question}</h1>
              <p className="text-sm sm:text-base md:text-sm lg:text-base text-bodytext">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
