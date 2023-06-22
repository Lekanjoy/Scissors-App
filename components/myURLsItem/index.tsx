 'use client'
import { FaTrash, FaCopy } from "react-icons/fa";
import Link from "next/link";

type MyURLsItemProps = {
  url: {
    id: number;
    count: number;
    original_link: string;
    shortened_link: string;
  };
  index: number;
  copiedLink: string;
  setShowModal: (prevState: boolean) => void;
  copyLink: (link: string) => void;
};

const MyURLsItem = ({
  url,
  index,
  copiedLink,
  setShowModal,
  copyLink,
}: MyURLsItemProps) => {
  
  return (
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
      <td className="px-4 py-2 border-r-2  flex gap-x-2">
        <button
          className={`bg-primaryColor text-sm text-white font-semibold py-1 px-2 rounded hover:bg-blue-500 ${
            copiedLink === url.shortened_link ? "bg-green-700" : ""
          }`}
          onClick={() => copyLink(url.shortened_link)}
        >
          {copiedLink === url.shortened_link ? "✔" : <FaCopy />}
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => setShowModal(true)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default MyURLsItem