"use client";
import React, { useState, useRef } from "react";

const getShortenedLink = async (original_link: string) => {
  const response = await fetch("https://nwa.pythonanywhere.com/links/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ original_link: original_link }),
  });
  const data = await response.json();
  return data.shortened_link;
};

const LinkShortenerForm =  () => {
const [originalLink, setOriginalLink] = useState("");
  const shortenedRef = useRef<HTMLInputElement>(null);

  

  const shortenedLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getShortenedLink(originalLink);
    console.log(data);
    return data;
  }; 
 
  

  return (
    <div className="shorten lg:min-h-523px lg:py-[84px]">
      <form onSubmit={shortenedLink} className="max-w-xs mx-auto p-4 bg-white rounded shadow ">
        <h2 className="text-xl font-semibold mb-4">Link Shortener</h2>
        <div className="mb-4">
          <label htmlFor="originalLink" className="block mb-1 font-medium">
            Original Link
          </label>
          <input
            type="text"
            id="originalLink"
            value={originalLink}
            onChange={(e) => setOriginalLink(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shortenedLink" className="block mb-1 font-medium">
            Shortened Link
          </label>
          <input
            type="text"
            id="shortenedLink"
            ref={shortenedRef}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          
        >
          Shorten Link
        </button>
      </form>
    </div>
  );
};

export default LinkShortenerForm;
