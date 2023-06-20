"use client";
import React, { useState, useRef } from "react";
import useAxios from "@/utils/useAxios";

const LinkShortenerForm = () => {
  const api = useAxios();
  const [originalLink, setOriginalLink] = useState<string>("");
  const shortenedRef = useRef<HTMLInputElement>(null);

  // const getAllLinks = async (e) => {
  //   e.preventDefault();
  //   const response = await api.get("/links/");
  //   const data = await response.data;
  //   console.log(data);
  // };

  // Shortened link function
  const shortenedLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await api.post("/links/", {
      original_link: originalLink,
    });
    const data = await response.data;
    console.log(data);
    shortenedRef.current.value = data.shortened_link;
  };

  return (
    <div className="shorten relative lg:min-h-523px lg:py-[84px]">
      <img
        src="/form/illust-right.svg"
        alt=""
        className="absolute max-w-full max-h-full bottom-0 right-0"
      />
      <img
        src="/form/illust-left.svg"
        alt=""
        className="absolute max-w-full max-h-full top-0 left-0"
      />
      <form
        onSubmit={shortenedLink}
        className="min-w-[476px] z-50  mx-[480px] text-[#3284FF] text-sm px-[42px] pb-[52px] pt-[42px] bg-white rounded-xl "
      >
        <div className="mb-4 w-full relative">
          <input
            type="text"
            value={originalLink}
            onChange={(e) => setOriginalLink(e.target.value)}
            className="w-full px-3 py-2 placeholder-[#3284FF] border border-[#3284FF] rounded-xl focus-within:outline-primaryColor"
            placeholder="Paste URL here.."
          />
        </div>
        <div className="mb-4 flex gap-x-3 w-full">
          <div className="relative w-1/2 ">
            <input
              type="text"
              ref={shortenedRef}
              className="w-full px-3 py-2 placeholder-[#3284FF] text-sm border  border-[#3284FF] rounded-xl  focus-within:outline-primaryColor"
              placeholder="Choose Domain"
            />
            <img
              src="/form/chevron-down.svg"
              alt="Chevron down icon"
              className="absolute cursor-pointer max-w-full max-h-full top-[35%] right-[15px]"
            />
          </div>
        <div className="mb-4 w-1/2 relative">
          <input
            type="text"
            className="w-full px-3 py-2 placeholder-[#3284FF] text-sm border  border-[#3284FF] rounded-xl  focus-within:outline-primaryColor"
            placeholder="Type Alias here"
          />
          </div>
        </div>
        <button
          type="submit"
          className="relative w-full flex justify-center items-center gap-x-[14px] mb-[22px] px-6 py-3  text-sm bg-primaryColor rounded-full text-white  hover:bg-blue-600"
        >
          Trim URL
          <img src="/form/magic wand.svg" alt="" className="" />
        </button>
        <p className="text-sm text-[#4991FF]">
          By clicking TrimURL, I agree to the{" "}
          <span className="text-[#3284FF] font-medium">
            Terms of Service, Privacy Policy{" "}
          </span>
          and Use of Cookies.
        </p>
      </form>
    </div>
  );
};

export default LinkShortenerForm;
