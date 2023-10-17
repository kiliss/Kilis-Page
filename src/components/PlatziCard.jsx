import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import ConfettiExplosion from "react-confetti-explosion";

import certificated from "@/assets/images/ej.webp";
import { MdOpenInNew } from "react-icons/md";

export default function PlatziCard() {
  const [t, i18n] = useTranslation("global");
  const [isExploding, setIsExploding] = React.useState(false);

  const handleHover = () => {
    setIsExploding(true);
  };

  return (
    <a
      href="https://certificates.soyhenry.com/cert?id=9ea7606b-e398-4823-82fd-2fd37ca8fcff"
      target="_blank"
      rel="noopener noreferrer"
      id="container"
      onMouseEnter={handleHover}
      className="relative flex items-center gap-4 p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-1 col-span-1 row-span-1 overflow-hidden bg-[#FFFF01] hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <div className="absolute w-full h-full z-20 left-0 flex justify-center items-center pointer-events-none">
        {isExploding && (
          <ConfettiExplosion
            className="absolute left-auto top-auto"
            width={1600}
            force={0.8}
            onComplete={() => setIsExploding(false)}
          />
          )}
      </div>
      <MdOpenInNew color="black" className="absolute right-2 top-2 md:right-8 md:top-8 text-xl text-black dark:text-[#ffffffaa]"/>
      <div className="w-full">
          <Image src={certificated} className="" alt=""/>
        <p className="text-xs md:text-3xl font-bold text-black capitalize">
          {t("certificates.henry")}
        </p>
        <p></p>
        <p className="text-black text-xs md:text-xl">Henry - 2022</p>
      </div>
    </a>
  );
}
