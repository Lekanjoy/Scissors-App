"use client";
import { useState } from "react";
import Image from "next/image";
import { plans } from "@/utils/pricing-data";
import check from "../../public/pricing/check-circle-white.svg";

const PricingCard = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const handlePlanClick = (planId: number) => {
    setSelectedPlan(planId);
  };

  return (
    <>
      {plans.map((plan) => {
        return (
          <div
            onClick={() => handlePlanClick(plan.id)}
            key={plan.id}
            className={`${
              plan.id === selectedPlan
                ? "planBg  text-white scale-110 z-40 duration-300 ease-in-out"
                : "bg-white scale-100"
            } flex flex-col justify-center cursor-pointer border border-primaryColor  shadow-[0px_4px_8px] shadow-[rgba(0,_0,_0,_0.05)] rounded-xl py-6 px-4  lg:pl-[87px]`}
          >
            <p className=" lg:text-2xl lg:mb-[34px] ">{plan.title}</p>
            <p className=" lg:text-[40px] lg:font-medium lg:mb-2">
              {plan.price}
            </p>
            <p className="lg:text-xl lg:mb-4">{plan.description}</p>
            <div className="flex flex-col lg:gap-y-6">
              {plan.features.map((feature, id) => {
                return (
                  <div key={id} className="flex items-center gap-x-2">
                    <Image
                      src={plan.id === selectedPlan ? check : feature.icon}
                      alt="Check circle"
                      className="w-fit"
                    />
                    <p className="lg:text-sm">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PricingCard;
