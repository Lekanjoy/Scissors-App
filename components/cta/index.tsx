import Image from "next/image";
import illustRight from "@/public/CTA/right-illust.svg";
import illustLeft from "@/public/CTA/left-illust.svg";

const CTA = () => {
  
  return (
    <section className="relative shorten w-full text-white flex flex-col justify-center items-center lg:gap-y-8 lg:min-h-[300px]">
      <Image
        src={illustRight}
        alt=""
        className="absolute max-w-full max-h-full bottom-0 right-0"
      />
      <Image
        src={illustLeft}
        alt=""
        className="absolute max-w-full max-h-full top-0 left-0"
      />
      <h4 className=" lg:text-4xl xl:text-[40px]">
        Revolutionizing Link Optimization
      </h4>
      <button className="lg:py-[18px] lg:px-[56px] bg-primaryColor rounded-full">
        Get Started
      </button>
    </section>
  );
}

export default CTA