"use client";
import { useState } from "react";
import Image from "next/image";
import { plans } from "@/utils/pricing-data";

const PricingCard = () => {

  return (
    <>
      {plans.map((plan, id) => {
        return (
          <div onMouseEnter={() => getCurrentPlan(plan.id, id)}  key={plan.id} className={` flex flex-col justify-center border border-primaryColor bg-white shadow-[0px_4px_8px] shadow-[rgba(0,_0,_0,_0.05)] rounded-xl py-6 px-4 duration-300 lg:pl-[87px]  hover:scale-110 hover:z-40`}>
            <p className=" lg:text-2xl lg:mb-[34px]">{plan.title}</p>
            <p className=" lg:text-[40px] lg:font-bold lg:mb-2">{plan.price}</p>
            <p className="lg:text-xl lg:mb-4">{plan.description}</p>
            <div className="flex flex-col lg:gap-y-6">
              {plan.features.map((feature, id) => {
                return (
                  <div key={id} className="flex items-center gap-x-2">
                    <Image
                      src={feature.icon}
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
