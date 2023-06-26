import Image from "next/image";
import before from "../../public/why/before.svg";
import PricingCard from "../pricing-card";

const Pricing = () => {
  return (
    <section id='pricing' className="w-full px-8 text-blackVariant lg:px-[93px] lg:pt-[42px] lg:pb-[112px]">
      <div className="text-center flex flex-col justify-center items-center  lg:mb-[68px]">
        <div className="flex lg:gap-x-4">
          <Image src={before} alt="" className="" />
          <h4 className="lg:text-[40px]">
            A <span className="text-primaryColor">price perfect</span> for your
            needs.
          </h4>
        </div>
        <p className="text-base lg:mt-2 lg:w-[560px]">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-x-2 lg:mb-[68px]">
        <PricingCard />
      </div>
      <div className="flex items-center justify-center lg:gap-x-3">
        <button className="text-[#0065FE]   px-6 py-3 border border-[#0065FE] rounded-[100px]">
          Get Custom Pricing
        </button>
        <button className="bg-[#005AE2]  px-6 py-3 text-white rounded-[100px]">
          Select Pricing
        </button>
      </div>
    </section>
  );
};

export default Pricing;
