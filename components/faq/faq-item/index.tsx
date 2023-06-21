"use client";
import React, { useState } from "react";

interface FAQItemProps {
    faq: {
        id: number;
        question: string;
        answer: string;
    };
}

const FAQItem = ({ faq }: FAQItemProps) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="border-b border-[#D6D6D6] ease-out duration-300  lg:max-w-[795px] lg:pb-4 ">
      <div className="flex justify-between items-center lg:gap-x-4">
        <h5 className=" font-normal  lg:text-[24px] 2xl:text-[32px]">
          {faq.question}
        </h5>
        {!active ? (
          <img
            onClick={toggleAccordion}
            src="/FAQ/plus.svg"
            alt="Expand icon"
            className="cursor-pointer z-10"
          />
        ) : (
          <img
            onClick={toggleAccordion}
            src="/FAQ/minus.svg"
            alt="Collapse icon"
            className="cursor-pointer z-10"
          />
        )}
      </div>
      {active && (
        <p className="lg:mt-4 lg:leading-8 lg:text-sm">{faq.answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
