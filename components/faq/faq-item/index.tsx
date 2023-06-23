"use client";
import React, { useState } from "react";
import Image from "next/image"; 
import plusIcon from "@/public/FAQ/plus.svg";
import minusIcon from "@/public/FAQ/minus.svg"; 

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
          <Image
            onClick={toggleAccordion}
            src={plusIcon}
            alt="Expand icon"
            className="cursor-pointer z-10"
          />
        ) : (
          <Image
            onClick={toggleAccordion}
            src={minusIcon}
            alt="Collapse icon"
            className="cursor-pointer z-10"
          />
        )}
      </div>
      {active && (
        <p className="lg:mt-4 lg:leading-8 lg:text-base">{faq.answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
