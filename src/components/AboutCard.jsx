import React from "react";
import styles from "@/styles/AboutCard.module.css";
import Image from "next/image";

import me from "@/assets/images/me.webp";
import { useTranslation } from "react-i18next";

export default function AboutCard() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#50638c] dark:bg-[#111827] rounded-3xl overflow-hidden">
      <div className={styles.water}></div>
      <Image
        src={me}
        alt="Fabricio Cuevas"
        className="absolute bottom-0 -right-20 w-6/12 md:auto object-cover -z-0 hidden md:flex"
        width="512"
        height="512"
        draggable="false"
        placeholder="blur"
        loading="eager"
        priority
      />
      <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex-col flex justify-center">
        <h1 className="text-xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
          👋 {i18n.language === "es" ? "Hola Mundo!, soy" : "Hello World!, I'm"} Fabricio Cuevas
        </h1>
        <p className="text-md md:text-lg lg:text-2xl text-white">
          {i18n.language === "es" ? (
            <>
              Soy <b>desarrollador Full Stack</b> de Argentina. Tengo experiencia en <b>React</b> y <b>Angular</b>, así como en Typescript y actualmente paso mi tiempo con el maravilloso equipo de Absti.
              Me encanta aprender cosas nuevas y experimentar
              con nuevas tecnologías. Tengo buen ojo para los detalles y siempre
              pongo todo de mi en mi trabajo.
            </>
          ) : (
            <>
              I am a <b>Full Stack developer</b> from Argentina. I have experience in <b>React</b> and <b>Angular</b>, as well as in Typescript, and currently, I spend my time with the wonderful Absti team. I love learning new things and experimenting with new technologies. I have a keen eye for details and always put my all into my work.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
