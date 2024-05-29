"use client";
import { useState } from "react";
import hiker from "@/data/hiker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SecondSection(props) {
  const { scrollValue } = props;

  let effect;
  let changeValue = Math.ceil(scrollValue / 100);

  if (changeValue < 7) {
    effect = 1;
  } else if (changeValue <= 14) {
    effect = 2;
  } else if (changeValue <= 21) {
    effect = 3;
  } else if (changeValue > 21) {
    effect = 4;
  }

  const hikerElements = hiker.map((item) => {
    return (
      <div
        key={item.id}
        className={`py-10 items-center ${
          item.id == 2 ? "md:flex" : "md:flex md:flex-row-reverse"
        } lg:w-8/12 mx-auto `}
        id={item.id}
      >
        <div className="w-full px-8 md:w-6/12">
          <img src={item.image} className={`w-full rounded-lg lg:rounded-none duration-500 ${(effect == item.id) ? "lg:translate-x-[20%] lg:opacity-0" : "lg:translate-x-[0] lg:opacity-1"}`} />
        </div>
        <div className={`px-10 pt-8 text-white md:w-6/12 duration-500 ${(effect == item.id) ? "lg:opacity-0":"lg:opacity-1"}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-[#FBD784]"></div>
            <h2 className="text-[#FBD784] lg:text-2xl">
              {item.heading.toUpperCase()}
            </h2>
          </div>
          <h2 className="py-4 lg:text-4xl">{item.subHeading}</h2>
          <p>{item.description}</p>
          <div className="pt-8 text-[#FBD784]">
            <a href={item.link} className="text-xl">
              Read more
              <span className="ml-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      className="w-full h-full min-h-screen relative lg:top-[10rem] z-[45] pt-24
        bg-gradient-to-b from-[rgba(11,29,38,0.1)] from-[0%] to-[rgba(11,29,38,1)] to-[10%]"
    >
      <div>{hikerElements}</div>
    </section>
  );
}
