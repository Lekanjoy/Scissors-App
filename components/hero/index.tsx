import React from "react";
import Image from "next/image";
import Link from "next/link";
import underline from "../../public/hero/underline-illust.svg";
import arrow from "../../public/hero/arrow.svg";
import link3 from "../../public/hero/link-3.svg";
import link from "../../public/hero/link-2.svg";
import boxIllust from "../../public/hero/illust-linkBox.svg";


const HeroPage = () => {
  return (
    <section id="hero" className="relative w-full bg-heroBg pt-[130px] bg-no-repeat bg-cover bg-center text-center flex flex-col justify-center items-center px-8 lg:px-[93px] lg:pt-[146px]">
      <h1 className="text-blackVariant text-[24px] leading-[40px] mb-1 font-bold lg:text-5xl lg:mb-2 lg:leading-[96px]">
        Optimize Your Online Experience with Our{" "}
        <br className="hidden xl:block" /> Advanced{" "}
        <span className="text-[#005AE2] relative">
          URL Shortening
          <Image
            src={underline}
            width={170}
            height={20}
            alt=""
            className="absolute -bottom-3 left-8  lg:left-20"
          />
        </span>
        <span> Solution</span>
      </h1>
      <p className=" font-medium text-sm lg:text-lg lg:max-w-[780px]">
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>
      <div className="flex items-center mt-5 gap-x-5 text-sm lg:mt-8 lg:gap-x-10">
        <Link
          href="/"
          className="bg-[#005AE2] px-3 py-2  text-white rounded-[100px] lg:px-6 lg:py-3"
        >
          Learn more
        </Link>
        <Link href="/signup" className="text-[#0065FE] font-semibold">
          Sign Up
        </Link>
      </div>
      <div className="relative w-full  px-[30px] py-5 mb-[76px] mt-14 z-[10 flex flex-col justify-center items-center  rounded-3xl text-center border-[0.5px] border-[#005AE2] bg-[rgba(254,_254,_254,_0.1)] lg:max-w-[505px] lg:mt-20  lg:px-[60px] lg:py-10">
        <div className="flex max-w-full  items-center justify-between gap-x-2  mb-2 lg:gap-x-6 lg:mb-4">
          <div className="w-full">
            <Image src={link3} alt="Three link " />
          </div>
          <div className="w-full">
            <Image src={arrow} alt="arrow-right" />
          </div>
          <div className="w-full">
            <Image src={link} alt="one link" />
          </div>
        </div>
        <p className="text-blackVariant text-sm font-medium lg:text-base">
          Seamlessly transform your long URLs into concise and shareable links
          with just few clicks.
        </p>
        <div className="hidden lg:block">
          <Image
            src={boxIllust}
            alt=""
            className=" absolute -left-[8rem] -top-[1rem] -z-[10]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
