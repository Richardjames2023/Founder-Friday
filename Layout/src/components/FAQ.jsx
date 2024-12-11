import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="border-b border-gray-200">
        <div
          className="flex justify-between items-center py-4 cursor-pointer"
          onClick={toggleDropdown}
        >
          <h3 className="text-lg font-semibold">{question}</h3>
          {isOpen ? (
            <FaChevronUp className="text-gray-600" />
          ) : (
            <FaChevronDown className="text-gray-600" />
          )}
        </div>
        {isOpen && (
          <div className="py-2 text-gray-700">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  };
  
  const FAQ = () => {
    const faqData = [
      {
        question: 'What is your return policy?',
        answer: 'You can return any item within 30 days of purchase.',
      },
      {
        question: 'How do I track my order?',
        answer: 'You will receive a tracking number via email once your order has shipped.',
      },
      {
        question: 'Can I purchase items again?',
        answer: 'Yes, you can purchase items again from your order history.',
      },
    //   {
    //     question: 'Do you ship internationally?',
    //     answer: 'Yes, we ship to select countries outside the US.',
    //   },
    ];
  
    return (
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <div className="flex justify-between items-center  max-w-7xl mx-auto text-[#000041] text-sm font-semibold">
            <div className="flex-1 sm:max-w-4xl mx-auto p-6 ">
                {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
            <div className="flex-1 sm:max-w-4xl mx-auto p-6">
                {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
      </div>
    );
  };

export default FAQ;