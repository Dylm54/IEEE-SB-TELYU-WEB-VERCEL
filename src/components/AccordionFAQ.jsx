import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DataFAQ from "../utils/DataFAQ";
import Reveal from "./RevealAnimation";

function AccordionFAQ() {
  
return (
    <div className="px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px] py-[60px] sm:py-[calc(60px+60*(100vw-576px)/1024)] 2xl:py-[120px]">
      <Reveal>
      <h1 className="capitalize text-6xl pb-[70px] max-sm:text-4xl font-semibold">topics</h1>
      </Reveal>
      <Reveal>
      <div>
        <Accordion selectionMode="multiple" className="gap-5 noPx">
          {DataFAQ.map((item, index) => (

            <AccordionItem
              key={index}
              aria-label={`Question ${index + 1}`}
              title={<span className="capitalize text-2xl font-[590] max-sm:text-xl">{item.title}</span>}
              className="mb-5"
            >
              <p className="mb-5">{item.isi}</p>
            </AccordionItem>
            
          ))}
        </Accordion>
      </div>
      </Reveal>
    </div>
  );
}

export default AccordionFAQ;

