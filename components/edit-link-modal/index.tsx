import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxios from "@/utils/useAxios";

interface EditLinkModalProp {
  url: {
    id: number;
    count: number;
    original_link: string;
    shortened_link: string;
  };
  setShowEditModal: (prevState: boolean) => void;
  isLoading: boolean;
  setIsLoading: (prevState: boolean) => void;
}

const EditLinkModal = ({
  url,
  setShowEditModal,
  isLoading,
  setIsLoading,
}: EditLinkModalProp) => {
  // Custom link state
  const [customLink, setCustomLink] = useState<string>("");

  // Axios instance
  const api = useAxios();

  // Edit Link
  const editShortenedLink = async (id: number, customLink: string) => {
    try {
      const editEndpoint = process.env.NEXT_PUBLIC_URL_REQUESTS_ENDPOINT;
      if (!editEndpoint) {
        toast.error("Internal server error, please try again later!");
        return;
      }
      setIsLoading(true);
      const reqDomain = process.env.NEXT_PUBLIC_BASE_API_ENDPOINT;
      if (!reqDomain) {
        toast.error("Internal server error, please try again later!");
        return;
      }
      const response = await api.put(`${editEndpoint}${id}/`, {
        shortened_link: reqDomain + "/" + customLink,
      });
      await response.data;
      setIsLoading(false);
      setCustomLink("");
      setShowEditModal(false);
      toast.success("Link Edited successfully!", {});
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error("An error occurred!", {});
    }
  };

  return (
    <div
      className={`fixed z-[200] inset-0 items-center justify-center px-4 md:px-10 flex`}
    >
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="relative w-full z-10 bg-white rounded-lg shadow-lg p-6 lg:max-w-[550px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-primaryColor font-semibold">Edit Link</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => {
              setShowEditModal(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-y-3 w-full p-4 rounded-lg mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 placeholder-[#3284FF] border border-[#3284FF] rounded cursor-not-allowed"
            value={url.shortened_link}
            disabled
          />
          <input
            type="url"
            className="w-full px-3 py-2 placeholder-[#3284FF] border border-[#3284FF] rounded focus-within:outline-primaryColor"
            placeholder="e.g myBrandName"
            value={customLink}
            onChange={(e) => setCustomLink(e.target.value)}
          />
          <button
            className={`flex items-center justify-center gap-x-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600
            ${isLoading && "cursor-not-allowed"}`}
            disabled={isLoading}
            onClick={() => editShortenedLink(url.id, customLink)}
          >
            <FaEdit />
            {isLoading ? "Editing..." : "Customize Link"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLinkModal;
