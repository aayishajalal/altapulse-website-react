import React from "react";
import { faqData } from "../../api/faqData";

const FAQ = () => {
  return (
    <>
      <div className="2xl:container mx-auto px-4 py-8">
        <div className="w-[90%] mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 auto-rows-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`p-6 shadow-md rounded-md hover:shadow-lg transition-shadow duration-300 
                  ${index % 2 === 0 ? 'bg-blue-900 text-white' : 'bg-white text-gray-700'}`}
              >
                <h1 className="text-3xl font-semibold mb-2">{faq.question}</h1>
                <h5 className="text-1xl">{faq.answer}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
