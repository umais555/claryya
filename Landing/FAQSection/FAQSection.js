"use client";

import { useState } from 'react';
import { faqs } from '@/data/faqData'; // ✅ Importing the data from the new file


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-12 md:px-8 lg:px-20  mb-20">
      {/* ✅ Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900">
          Frequently <span className="text-[#009199]">Asked</span> Questions
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-[900px] mx-auto">
          Find answers to common questions about our email verification tool, how it<br/> works, 
          and how it helps improve your email deliverability.
        </p>
      </div>

      {/* ✅ Full-Width FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              className={`w-full text-left px-4 py-3 text-sm sm:text-base md:text-lg font-medium flex justify-between items-center
                ${openIndex === index ? 'text-[#009199]' : 'bg-white text-[#009199]'}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
              className={`text-xl ${
                openIndex === index ? 'text-[#009199]' : 'text-[#494949]'
              }`}
              >
  {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 text-sm sm:text-base md:text-lg bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
