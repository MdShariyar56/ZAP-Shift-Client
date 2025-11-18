import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does this posture corrector work?",
      a: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
    },
    {
      q: "Is it suitable for all ages and body types?",
      a: "Yes, it is designed to suit a wide range of ages and different body shapes."
    },
    {
      q: "Does it really help with back pain and posture improvement?",
      a: "Consistent use helps reduce back pain and improve posture over time."
    },
    {
      q: "Does it have smart features like vibration alerts?",
      a: "Some advanced models come with vibration reminders when you slouch."
    },
    {
      q: "How will I be notified when the product is back in stock?",
      a: "You can subscribe with your email and get notified instantly."
    }
  ];

  return (
    <div className="bg-[#ECF0EF] py-16 px-4 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#003E3E]">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-gray-600 mt-3">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment,
          reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`collapse collapse-arrow border rounded-xl ${
              openIndex === index ? "bg-[#DFF0EF] border-[#509E9B]" : "bg-white"
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <input type="radio" name="faq-accordion" checked={openIndex === index} readOnly />
            <div className="collapse-title text-lg font-medium text-[#003E3E]">
              {item.q}
            </div>
            {openIndex === index && (
              <div className="collapse-content text-gray-700">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn bg-[#C9E86C] hover:bg-[#B7DB5E] text-black rounded-full px-8 font-semibold">
          See More FAQ’s
          <span className="bg-black text-white rounded-full p-2 ml-2">
            ➜
          </span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
