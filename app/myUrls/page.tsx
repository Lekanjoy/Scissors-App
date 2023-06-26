"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import useAxios from "@/utils/useAxios";
import MyURLsItem from "@/components/myURLsItem";
import ConfirmationModal from "@/components/confirmation-modal";
import GenerateQRCodeModal from "@/components/generate-qr-modal";
import before from "@/public/why/before.svg";
import EditLinkModal from "@/components/edit-link-modal";

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
  const [showQRCodeModal, setShowQRCodeModal] = useState<boolean>(false);
  const [QRCodeImageLink, setQRCodeImageLink] = useState<string>('')
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
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


  // Generate Unique QRcode
  const generateQRCode = async (url:string) => {
    try{
      const response = fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`)
      const QRcode = await response.then(res => res.url)
      setQRCodeImageLink(QRcode);
      toast.success("QR Code generated successfully!", {});
    } catch(error){
      console.error(error);
      toast.error("Error generating QRcode", {});
    }
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
        <Image src={before} alt="" className="" />
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
          {myUrls.length < 1 && <p className='w-full p-4 flex justify-center items-center text-xl'>YOU HAVE NO LINKS YET</p>}
          {myUrls.map((url, index) => (
            <>
              <MyURLsItem
                key={url.id}
                url={url}
                index={index}
                setShowModal={setShowModal}
                setShowQRCodeModal={setShowQRCodeModal}
                setShowEditModal={setShowEditModal}
                generateQRCode={generateQRCode}
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
              <GenerateQRCodeModal
                showQRcodeModal={showQRCodeModal}
                setShowQRCodeModal={setShowQRCodeModal}
                QRCodeImageLink={QRCodeImageLink}
              />
              <EditLinkModal
                url={url}
                showEditModal={showEditModal}
                setShowEditModal={setShowEditModal}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyURLs;
