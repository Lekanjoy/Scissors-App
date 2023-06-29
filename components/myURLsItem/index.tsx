"use client";
import { FaTrash, FaCopy, FaQrcode, FaEdit } from "react-icons/fa";
import Link from "next/link";
import ConfirmationModal from "../confirmation-modal";
import { useState } from "react";
import EditLinkModal from "../edit-link-modal";

type MyURLsItemProps = {
  url: {
    id: number;
    count: number;
    original_link: string;
    shortened_link: string;
  };
  index: number;
  copiedLink: string;
  setShowQRCodeModal: (prevState: boolean) => void;
  generateQRCode: (url: string) => void;
  copyLink: (link: string) => void;
  deleteLink: (id: number) => void;
  isLoading: boolean;
  setIsLoading: (prevState: boolean) => void;
};

const MyURLsItem = ({
  url,
  index,
  copiedLink,
  setShowQRCodeModal,
  generateQRCode,
  copyLink,
  deleteLink,
  isLoading,
  setIsLoading,
}: MyURLsItemProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const toggleEditModal = () => {
    setShowEditModal(true);
  };

  const toggleDeleteModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <tr className="bg-white border-b-2">
        <td className="px-4 py-2 border-r-2 ">{index + 1}.</td>
        <td className="px-4 py-2 border-r-2">{url.original_link}</td>
        <td className="px-4 py-2 border-r-2">
          <Link
            className="text-primaryColor italic hover:underline"
            target="_blank"
            href={url.shortened_link}
          >
            {url.shortened_link}
          </Link>
        </td>
        <td className="px-4 py-2 border-r-2">{url.count}</td>
        <td className="px-4 py-2  flex items-center justify-center gap-x-2">
          <button
            className={`bg-gray-600 text-sm text-white font-semibold py-1 px-2 rounded hover:bg-gray-400 ${
              copiedLink === url.shortened_link ? "bg-green-700" : ""
            }`}
            onClick={() => copyLink(url.shortened_link)}
          >
            {copiedLink === url.shortened_link ? "✔" : <FaCopy />}
          </button>
          <button
            className="bg-primaryColor text-white font-bold py-1 px-2 rounded hover:bg-blue-500"
            onClick={toggleEditModal}
          >
            <FaEdit />
          </button>
          <button
            className="shorten text-white font-bold py-1 px-2 rounded hover:bg-blue-500"
            onClick={() => {
              setShowQRCodeModal(true);
              generateQRCode(url.original_link);
            }}
          >
            <FaQrcode />
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            onClick={toggleDeleteModal}
          >
            <FaTrash />
          </button>
        </td>
      </tr>

      {showEditModal && (
        <EditLinkModal
          url={url}
          setShowEditModal={setShowEditModal}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}

      {showModal && (
        <ConfirmationModal
          url={url}
          setShowModal={setShowModal}
          deleteLink={deleteLink}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default MyURLsItem;
