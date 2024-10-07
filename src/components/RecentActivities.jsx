import { Button } from "@nextui-org/react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";

export const RecentActivities = ({ cards }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black ">
            <div className="purpleForRecent sticky top-[0.1875px] left-0 flex flex-col h-screen overflow-hidden py-[60px] sm:py-[calc(60px+60*(100vw-576px)/1024)] 2xl:py-[120px]">
                <div className="px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px]">
                    <div className="sm:items-center flex flex-col sm:flex-row sm:justify-between gap-[1rem]">
                        <div>
                            <h2 className="2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] text-white font-[590] leading-[1.4]">Recent Activities</h2>
                        </div>
                        <div className="lg:flex text-[#71777e] hidden gap-[1rem] items-center justify-center">
                            <Spinner color="default" />
                            <div className="2xl:text-[24px] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px]">Keep scrolling</div>
                        </div>
                    </div>
                </div>
                <motion.div style={{ x }} className="2xl:my-[3.75vw] flex lg:flex-row lg:my-[60px] ml-[40px]">
                    {cards.map((card, index) => {
                        return <Card card={card} key={card.id} index={index} />;
                    })}

                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card, index }) => {
    return (
        <div
            key={card.id}
            className="!aspect-[1.46] relative lg:ml-[2.5vw] lg:min-w-[43.125vw] lg:h-full 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] w-full overflow-hidden bg-neutral-200"
        >
            <div className="2xl:p-[2.5vw] sm:p-[calc(24px+16*(100vw-576px)/1024)] p-[24px] z-[2] relative flex flex-col justify-between h-full gap-[24px]">
                <div className="flex justify-end">
                    <div style={{ display: index === 0 ? "flex" : "none" }} className="bg-[#6B0DE3] text-white px-[24px] h-[40px] relative items-center justify-center font-medium text-[1rem] rounded-[100px]">Latest</div>
                </div>
                <div className="2xl:gap-[1rem] sm:gap-[calc(8px+8*(100vw-576px)/1024)] gap-[8px] flex flex-col justify-start">
                    <div className="2xl:max-w-[52.5vw] sm:max-w-[840px]">
                        <div className="2xl:text-[2.5vw] sm:text-[calc(24px+16*(100vw-576px)/1024)] text-[24px] leading-[1.4] font-[590] overflow-hidden text-white">{card.title}</div>
                    </div>
                    <div className="flex justify-start">
                        <div className="text-white inline-flex relative justify-center items-center overflow-hidden backdrop-blur-[15px] px-[24px] font-normal border-[1px] border-solid border-[#71777e] rounded-[100px] h-[40px]">
                            {card.tanggal}
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute flex w-full h-full justify-center items-center overflow-hidden z-[1] bgShadow top-0 left-0">
                <figure className="flex items-center w-full h-full object-cover aspect-[1]">
                    <img src={`${import.meta.env.VITE_API_URL}/uploads/${card.gambar}`} alt="image" className="w-full h-full object-cover scale-100" />
                </figure>
            </div>
        </div>
    );
};

const ResponsiveCard = ({ card, index }) => {
    return (
        <div key={card.id} className="aspect-[1.25] max-h-[600px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] relative overflow-hidden w-full">
            <a href="" className="sm:rounded-[calc(16px+16*(100vw-576px)/1024)] absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
            <div className="sm:p-[calc(24px+16*(100vw-576px)/1024)] z-[2] p-[24px] h-full relative flex flex-col justify-between gap-[24px]">
                <div className="flex flex-row gap-[24px] justify-end">
                    <div className="sm:gap-[calc(16px+48*(100vw-576px)/1024)] gap-[1rem] flex items-center">
                        <div style={{ display: index === 0 ? "flex" : "none" }} className="bg-[#6B0DE3] text-white px-[24px] h-[40px] relative items-center justify-center font-medium text-[1rem] rounded-[100px]">Latest</div>
                    </div>
                </div>
                <div>
                    <div className="sm:gap-[calc(8px+8*(100vw-576px)/1024)] gap-[8px] flex flex-col justify-start">
                        <div className="sm:max-w-[840px]">
                            <div className="sm:text-[calc(24px+16*(100vw-576px)/1024)] text-[24px] leading-[1.4] font-[590] overflow-hidden text-white">{card.title}</div>
                        </div>
                        <div className="flex justify-start">
                            <div className="text-white inline-flex relative justify-center items-center overflow-hidden backdrop-blur-[15px] px-[24px] font-normal border-[1px] border-solid border-[#71777e] rounded-[100px] h-[40px]">
                                {card.tanggal}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex w-full h-full justify-center items-center overflow-hidden z-[1] bgShadow top-0 left-0">
                <figure className="flex items-center w-full h-full object-cover aspect-[1]">
                    <img src={`${import.meta.env.VITE_API_URL}/uploads/${card.gambar}`} alt="image" className="w-full h-full object-cover scale-100" />
                </figure>
            </div>
        </div>
    )
}

export const ResponsiveRecentActivities = ({ cards }) => {
    return (
        <div className="min-h-[100vh] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px] overflow-hidden purpleForRecent bg-black">
            <div className="sm:pb-[calc(24px+8*(100vw-576px)/1024)] pb-[1.5rem] overflow-hidden w-full relative sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                    <div className="flex justify-center pr-[calc(20px+70*(100vw-576px)/1024)] items-start gap-[1.5rem] h-full flex-col">
                        <div>
                            <div className="flex items-center gap-[1rem] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden text-white">Recent Activities</div>
                        </div>
                    </div>
                </div>
            <div className="flex flex-col sm:grid sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px] grid-cols-[1fr,1fr] gap-[1.5rem] mt-[2rem]">
                
                {cards.map((card, index) => {
                    return <ResponsiveCard card={card} key={card.id} index={index} />;
                })}
                
            </div>
        </div>
    )
}




