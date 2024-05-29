"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import hiker from "@/data/hiker";
import navSection from "@/data/navsection";

config.autoAddCss = false;

export default function FirstSection(props) {
  const { scrollValue } = props;

  let change;
  let changeValue = Math.ceil(scrollValue / 100);

  if(changeValue < 5){
        change = 1
  }else if(changeValue <= 14 ){
        change = 2
  }else if(changeValue <= 21 ){
        change = 3
  }else if(changeValue > 21){
        change = 4
  }

  console.log(changeValue)

  let scroll = false;

  if (scrollValue > 100) {
    scroll = true;
  } else {
    scroll;
  }
  const navElements = navSection.map((page) => {
    return (
      <>
        <li key={page.id} className="flex justify-end items-center">
          <a href={page.link} className="py-2">{page.name}</a>
          <div className={`w-0.5 h-14 bg-white ml-4 duration-300 ${(change == page.id) ? "opacity-[1]" : "opacity-[0.5]"}`}></div>
        </li>
      </>
    );
  });

  return (
    <section
      className={`w-full h-full min-h-screen bg-[url('/images/background-cloud.png')] bg-no-repeat bg-cover
        flex flex-col justify-between pt-20 lg:pt-40`}
      id="0"
    >
      <div 
        className={`px-8 pt-36 
            lg:h-[50%] `}
      >
        <div className="lg:flex lg: justify-between lg:w-11/12 lg:mx-auto relative">
          <div className={`lg:flex lg:justify-center lg:w-full relative duration-[1s] z-20 
            ${
                scroll
                  ? "translate-y-[150%] lg:translate-y-[300%] opacity-0"
                  : "translate-y-0 opacity-1"
              } 
          `}>
            <div className="hidden lg:flex gap-4 rotate-90 text-white lg:items-end w-2/12 justify-center ">
              <h2>Follow us</h2>
              <div>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} className="ml-4" />
              </div>
            </div>
            <div className="lg:w-6/12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-0.5 bg-[#FBD784]"></div>
                <h2 className="text-[#FBD784]">A HIKING GUIDE</h2>
              </div>
              <div className="text-white">
                <h2 className="text-4xl py-10 text-white lg:text-7xl font-['PlayfairDisplay']">
                  Be Prepared For The Mountains And Beyond!
                </h2>
                <div className="flex items-center gap-2 animate-bounce">
                  <p>scroll down</p>
                  <FontAwesomeIcon icon={faArrowDownLong} />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:text-right lg:w-3/12 fixed top-[20rem] right-[10%] z-50">
            <div className="">
              <ul className="text-xl text-white">
                {navElements}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:h-[50%]">
        <div
          className={`absolute bottom-0 z-10 duration-[1s] w-full lg:top-[-10rem]
           ${scroll ? "translate-y-[-20%]" : "translate-y-0 "}`}
        >
          <img src="../images/mountain-2.png" className="w-full " />
        </div>
        <div
          className={`relative z-30 duration-[1s] lg:h-[250px]
          ${scroll ? "w-[120%]" : "w-[100%] "}`}
        >
          <img src="../images/mountain-1.png" className="w-full" />
        </div>
      </div>
    </section>
  );
}
