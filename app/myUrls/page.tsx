"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useAxios from "@/utils/useAxios";
import MyURLsItem from "@/components/myURLsItem";
import ConfirmationModal from "@/components/confirmation-modal";

interface MyURLDataProps {
  id: number;
  count: number;
  original_link: string;
  shortened_link: string;
}

const MyURLs = () => {
  const [myUrls, setMyUrls] = useState<MyURLDataProps[]>([]);
  const [copiedLink, setCopiedLink] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Axios instance
  const api = useAxios();

  // Delete a Link
  const deleteLink = async (id: number) => {
    setIsLoading(true);
    const response = await api.delete(`/links/${id}/`);
    await response.data;
    setIsLoading(false);
    setShowModal(false);
    toast.success("Link deleted successfully!", {});
  };

  // Copy a link to clipboard
  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
    toast.success("Link Copied!", {});
  };

  // List out all links that the user has shortened
  useEffect(() => {
    const getAllLinks = async () => {
      const response = await api.get("/links/");
      const data = await response.data;
      setMyUrls(data);
    };

    getAllLinks();
  }, [isLoading]);

  return (
    <div className="w-full flex flex-col min-h-[300px] px-8 lg:px-[93px] lg:mt-[146px]">
      <div className="flex text-blackVariant mb-6 justify-center bg-white items-center lg:gap-x-4">
        <img src="/why/before.svg" alt="" className="" />
        <h4 className="font-semibold text-primaryColor italic lg:text-[40px]">
          My URLs
        </h4>
      </div>
      <table className=" w-full">
        <thead className="shorten text-white h-16 ">
          <tr>
            <th className="border-r-2 ">S/N</th>
            <th className="border-r-2">Original Link</th>
            <th className="border-r-2">Shortened Link</th>
            <th className="border-r-2">Clicks</th>
            <th className="px-4 border-r-2">Actions</th>
          </tr>
        </thead>
        <tbody className="mt-20">
          {myUrls.map((url, index) => (
            <>
              <MyURLsItem
                key={url.id}
                url={url}
                index={index}
                setShowModal={setShowModal}
                copiedLink={copiedLink}
                copyLink={copyLink}
              />
              <ConfirmationModal
                showModal={showModal}
                setShowModal={setShowModal}
                deleteLink={deleteLink}
                url={url}
                isLoading={isLoading}
              />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyURLs;
