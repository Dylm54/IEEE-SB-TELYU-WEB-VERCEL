import React from "react";
import Nav from "../components/Nav";
import { Button, ButtonGroup } from "@nextui-org/react";
import Footer from "../components/Footer";
import "../index.css";
import AccordionFAQ from "../components/AccordionFAQ";
import Reveal from "../components/RevealAnimation";
import { useEffect } from "react";

function FAQ() {

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Nav/>
      <div className="purple bg-black w-[100%] pt-[120px] pb-[60px] sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] sm:pb-[calc(60px+60*(100vw-576px)/1024)] 2xl:pt-[240px] 2xl:pb-[7.5vw] px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px] flex items-center justify-center flex-col max-sm:h-[90vh]">
        <div className="text-center capitalize sm:text-[6.65vw] text-[40px] text-white text-wrap font-[590] flex items-center justify-center ">
          <div className="w-[973px] 2xl:w-[1080px] max-sm:w-auto">
            <Reveal>
            <h1 className="mb-[16px]">Frequently Asked Questions</h1>
            </Reveal>
          </div>
        </div>
      </div>
      <div id="Topics-FAQ-ID">
        <AccordionFAQ/>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
