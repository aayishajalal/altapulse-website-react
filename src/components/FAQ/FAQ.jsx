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
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">{faq.question}</h1>
              <h5 className="text-base sm:text-lg md:text-xl">{faq.answer}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
