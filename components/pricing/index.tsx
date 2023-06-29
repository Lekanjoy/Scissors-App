import Image from "next/image";
import before from "../../public/why/before.svg";
import PricingCard from "../pricing-card";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full text-blackVariant pt-[42px] pb-14 px-4 md:px-10 lg:px-[93px]  lg:pb-[112px]"
    >
      <div className="text-center flex flex-col justify-center items-center mb-8  lg:mb-[68px]">
        <div className="flex gap-x-4">
          <Image src={before} alt="" className="" />
          <h4 className="text-2xl lg:text-[40px]">
            A <span className="text-primaryColor">price perfect</span> for your
            needs.
          </h4>
        </div>
        <p className="text-sm lg:mt-2 lg:w-[560px]">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>

      <div className="grid gap-y-6 grid-cols-1 lg:grid-cols-3 mb-12 lg:gap-x-2 lg:mb-[68px]">
        <PricingCard />
      </div>
      <div className="flex items-center justify-center gap-x-2 lg:gap-x-3">
        <button className="text-[#0065FE] px-4 py-2 border text-sm border-[#0065FE] rounded-[100px] lg:text-base lg:px-6 lg:py-3 ">
          Get Custom Pricing
        </button>
        <button className="bg-[#005AE2]  px-4 text-sm  py-2 text-white rounded-[100px] lg:text-base  lg:px-6 lg:py-3">
          Select Pricing
        </button>
      </div>
    </section>
  );
};

export default Pricing;
