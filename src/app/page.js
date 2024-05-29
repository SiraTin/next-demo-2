'use client'
import { useState, useEffect } from "react";
import Navbar from "./components/layouts/navbar";
import FirstSection from "./components/section-1/section-1";
import SecondSection from "./components/section-2/section-2";
import Footer from "./components/layouts/footer";

export default function Home() {
  const [scrollValue, setScrollValue] = useState();

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      setScrollValue(window.scrollY);
    });
  });


  return (
    <>
        <Navbar scrollValue={scrollValue}/>
        <main className="w-full overflow-hidden bg-[rgba(11,29,38,1)]">
            <FirstSection scrollValue={scrollValue}/>
            <SecondSection scrollValue={scrollValue}/>
        </main>
        <Footer/>
    </>

  );
}
