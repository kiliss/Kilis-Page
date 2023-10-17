import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function LinkedinCard() {
  return (
    <a
      href="https://www.linkedin.com/in/fabriciocuevas/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin"
      className="flex flex-col justify-center items-center bg-[#1178ff9c] dark:bg-[#49a7ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <MdOpenInNew className="absolute right-2 top-2 md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
      <FaLinkedinIn className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]" />
    </a>
  );
}
