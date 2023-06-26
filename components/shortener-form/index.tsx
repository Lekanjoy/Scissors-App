"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";
import useAxios from "@/utils/useAxios";
import illustRight from "@/public/form/illust-right.svg";
import illustLeft from "@/public/form/illust-left.svg";
import chevronDownIcon from "@/public/form/chevron-down.svg";
import wand from "@/public/form/magic wand.svg";

const LinkShortenerForm = () => {
  const router = useRouter();
  const api = useAxios();
  const [originalLink, setOriginalLink] = useState<string>("");
  const [isShortening, setIsShortening] = useState<boolean>(false);
  const domainOptionsRef = useRef<HTMLInputElement>(null);
  const aliasRef = useRef<HTMLInputElement>(null);
  const [toggleShowDomain, setToggleShowDomain] = useState<boolean>(false);

  // Shortened link function
  const shortenedLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if the user has entered a link
    if (!originalLink) {
      toast.error("Please enter a link!", {});
      return;
    }
    // Check if original link is valid link
    const regex =
      /^(https?|ftp):\/\/([^\s/$.?#].[^\s]*|www\.[^\s/$.?#].[^\s]*)$/;
    if (!regex.test(originalLink)) {
      toast.error("Please enter a valid link!", {});
      return;
    }
    // Send the user's link to the backend
    setIsShortening(true);
    try {
      const response = await api.post("/links/", {
        original_link: originalLink,
      });
      await response.data;
      toast.success("Link shortened successfully!", {});
      setOriginalLink("");
      setIsShortening(false);
      // Redirect the user to the myUrls page
      router.push("/myUrls");
    } catch (error: unknown) {
      setIsShortening(false);
      console.error(error);
      axios.isAxiosError(error) &&
        toast.error(`${error?.response?.data || error.message}`);
    }
  };

  const handleDomainValue = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const value = e.currentTarget.innerText;
    domainOptionsRef.current!.value = value;
    // Disable the alias input field if the user selects the scissor.com domain
    if (value === "Scissor.com") {
      aliasRef.current!.disabled = true;
      aliasRef.current!.value = "";
    } else {
      aliasRef.current!.disabled = false;
      aliasRef.current!.focus();
    }
    // Hide the domain options
    setToggleShowDomain(false);
  };

  return (
    <div className="shorten w-full flex justify-center items-center relative lg:min-h-523px lg:py-[84px]">
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
      <form
        onSubmit={shortenedLink}
        className="min-w-[476px] z-50 max-w-[480px] text-[#3284FF] text-sm px-[42px] pb-[52px] pt-[42px] bg-white rounded-xl "
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
              ref={domainOptionsRef}
              className={`w-full px-3 py-2 placeholder-[#3284FF] text-sm border  border-[#3284FF] focus-within:outline-primaryColor ${
                toggleShowDomain ? "rounded-t-xl" : "rounded-xl"
              }`}
              placeholder="Choose Domain"
              disabled
            />
            {toggleShowDomain && (
              <div className="absolute cursor-pointer flex items-center justify-center  flex-col bg-white w-full z-10 rounded-b-md shadow-md">
                <p
                  onClick={handleDomainValue}
                  className="w-full p-[10px]  border-b border-[#3284FF] hover:text-white hover:bg-blue-600 "
                >
                  Scissor.com
                </p>
                <p
                  onClick={handleDomainValue}
                  className="w-full p-[10px]  border-b border-[#3284FF] hover:text-white hover:bg-blue-600 hover:rounded-b-md"
                >
                  Enter Domain
                </p>
              </div>
            )}
            <Image
              onClick={() => setToggleShowDomain(!toggleShowDomain)}
              src={chevronDownIcon}
              alt="Chevron down icon"
              className="absolute cursor-pointer max-w-full max-h-full top-[25%] right-[15px]"
            />
          </div>
          <div className="mb-4 w-1/2 relative">
            <input
              ref={aliasRef}
              type="text"
              className="w-full px-3 py-2 placeholder-[#3284FF] text-sm border  border-[#3284FF] rounded-xl  focus-within:outline-primaryColor"
              placeholder="Type Alias here"
            />
          </div>
        </div>
        <button
          disabled={isShortening}
          type="submit"
          className={`relative w-full flex justify-center items-center gap-x-[14px] mb-[22px] px-6 py-3  text-sm bg-primaryColor rounded-full text-white  hover:bg-blue-600
          ${isShortening ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          {isShortening ? "Trimming URL..." : "Trim URL"}
          <Image src={wand} alt="" className="" />
        </button>
        <p className="text-sm text-[#4991FF]">
          By clicking Trim URL, I agree to the{" "}
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
