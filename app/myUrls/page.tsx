"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import useAxios from "@/utils/useAxios";
import { FaTrash, FaCopy } from 'react-icons/fa';

interface MyURLDataProps {
  id: number;
  count: number;
  original_link: string;
  shortened_link: string;
}
  const api = useAxios();

// Delete a Link
const deleteLink = async (id: number) => {
  const response = await api.delete(`/links/${id}`);
  const data = await response.data;
  console.log(data);
}

const MyURLs = () => {
  const [myUrls, setMyUrls] = useState<MyURLDataProps[]>([]);

  const [copiedLink, setCopiedLink] = useState("");

  const copyLink = (link:any) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
  };
  // List out all links that the user has shortened
  useEffect(() => {
    const getAllLinks = async () => {
      const response = await api.get("/links/");
      const data = await response.data;
      setMyUrls(data);
    //   console.log(myUrls);
    };

    getAllLinks();
  }, []);

  return (
    <div className="w-full flex flex-col min-h-[300px] px-8 lg:px-[93px] lg:mt-[146px]">
      <div className="flex text-blackVariant pb-2 justify-center bg-white items-center lg:gap-x-4">
        <img src="/why/before.svg" alt="" className="" />
        <h4 className="font-semibold lg:text-[40px]">My URLs</h4>
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
            <tr key={url.id} className="bg-white border-b-2">
              <td className="px-4 py-2 border-r-2 ">{index + 1}.</td>
              <td className="px-4 py-2 border-r-2">{url.original_link}</td>
              <td className="px-4 py-2 border-r-2">
                <Link className="text-primaryColor italic :hover:underline" target="_blank" href={url.shortened_link}>{url.shortened_link}</Link>
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
                  onClick={() => deleteLink(url.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyURLs;

