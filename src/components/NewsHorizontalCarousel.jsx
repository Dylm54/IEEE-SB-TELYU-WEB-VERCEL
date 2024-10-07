import { Button } from "@nextui-org/react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HorizontalScrollCarousel = ({ cards }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden py-[60px] sm:py-[calc(60px+60*(100vw-576px)/1024)] 2xl:py-[120px]">

                <motion.div style={{ x }} className="flex 2xl:max-h-[37.5vw] lg:max-h-[600px] lg:h-full gap-[2.5vw] px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px]">
                    <div className="2xl:py-[2rem] sm:py-[calc(24px+8*(100vw-576px)/1024)] py-[24px] lg:aspect-[1.46] lg:h-full lg:min-w-[32.5625vw] lg:max-w-[32.5625vw]">
                        <div className="flex flex-col justify-between items-start h-full">
                            <div className="flex flex-col 2xl:max-w-[20vw] lg:max-w-[320px]">
                                <div className="flex 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] font-[590] leading-[1.4]">News</div>
                                <div className="flex leading-[1.4] lg:max-w-full sm:max-w-[260px] 2xl:text-[1.5vw] 2xl:mt-[16px] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:mt-[calc(8px+8*(100vw-576px)/1024)] text-[16px] mt-[8px] font-normal">Check out our latest news happening inside and outside IEEE SB Telkom University.</div>
                            </div>
                            <div>
                                <a href="#/News/All">
                                    <Button variant="ghost" color="secondary" className="!border-[1px] min-w-max 2xl:text-[1.5rem] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] h-[40px] sm:h-[calc(40px+32*(100vw-576px)/1024)] 2xl:h-[72px] px-[24px] sm:px-[calc(10.5px+2.34375vw)] 2xl:px-[48px] font-medium text-black" radius="full">
                                        See More
                                    </Button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {cards.map((card, index) => {
                        return <Card card={card} key={card.id} index={index} />;
                    })}
                    <div className="2xl:py-[2rem] sm:py-[calc(24px+8*(100vw-576px)/1024)] py-[24px] lg:aspect-[1.46] lg:h-full lg:min-w-[32.5625vw] lg:max-w-[32.5625vw]">
                        <div className="flex flex-col justify-center items-center h-full gap-[1.5rem]">
                            <div className="flex flex-col 2xl:max-w-[20vw] lg:max-w-[320px] items-center">
                                <div className="flex 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] font-[590] leading-[1.4]">View More</div>
                            </div>
                            <div>
                                <a href="#/News/All">
                                    <Button variant="ghost" color="secondary" className="!border-[1px] min-w-max 2xl:text-[1.5rem] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] h-[40px] sm:h-[calc(40px+32*(100vw-576px)/1024)] 2xl:h-[72px] px-[24px] sm:px-[calc(10.5px+2.34375vw)] 2xl:px-[48px] font-medium text-black" radius="full">
                                        News
                                    </Button>
                                </a>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card, index }) => {
    return (
        <div
            key={card.id}
            className="group relative 2xl:max-h-[37.5vw] lg:min-w-[43.125vw] lg:max-h-[600px] lg:h-full 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] overflow-hidden bg-neutral-200 hoverCard"
        >
            <a href={`#/DetailNews/${card.id}`} className="w-full h-full absolute cursor-pointer z-[3]"></a>
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
                            {card.kategori}
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute flex w-full h-full justify-center items-center overflow-hidden z-[1] bgShadow top-0 left-0">
                <figure className="flex items-center w-full h-full object-cover aspect-[1]">
                    <img src={`${import.meta.env.VITE_API_URL}/uploads/${card.thumbnail}`} alt="image" className="w-full h-full object-cover scale-100" />
                </figure>
            </div>
        </div>
    );
};

const ResponsiveCard = ({ card, index }) => {
    return (
        <div key={card.id} className="aspect-[1.25] max-h-[600px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] relative overflow-hidden w-full">
            <a href={`#/DetailNews/${card.id}`} className="sm:rounded-[calc(16px+16*(100vw-576px)/1024)] hoverCard absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
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
                                {card.kategori}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex w-full h-full justify-center items-center overflow-hidden z-[1] bgShadow top-0 left-0">
                <figure className="flex items-center w-full h-full object-cover aspect-[1]">
                    <img src={`${import.meta.env.VITE_API_URL}/uploads/${card.thumbnail}`} alt="image" className="w-full h-full object-cover scale-100" />
                </figure>
            </div>
        </div>
    )
}

export const ResponsiveNews = ({ cards }) => {
    return (
        <div className="min-h-[100vh] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px] overflow-hidden">
            <div className="flex flex-col sm:grid sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px] grid-cols-[1fr,1fr] gap-[1.5rem]">
                <div className="sm:py-[calc(24px+8*(100vw-576px)/1024)] py-[1.5rem] overflow-hidden w-full relative">
                    <div className="flex justify-center pr-[calc(20px+70*(100vw-576px)/1024)] items-start gap-[1.5rem] h-full flex-col">
                        <div>
                            <div className="flex items-center gap-[1rem] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">News</div>
                            <div className="sm:max-w-[260px] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:mt-[calc(8px+8*(100vw-576px)/1024)] text-[16px] mt-[18px] font-normal leading-[1.4] overflow-hidden">
                                Check out our latest news happening inside and outside IEEE SB Telkom University.
                            </div>
                        </div>
                        <div>
                            <a href="#/News/All">
                                <Button variant="ghost" color="secondary" className="!border-[1px] min-w-max sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] h-[40px] sm:h-[calc(40px+32*(100vw-576px)/1024)] px-[24px] sm:px-[calc(10.5px+2.34375vw)] font-medium text-black" radius="full">
                                    See More
                                </Button>
                            </a>

                        </div>
                    </div>
                </div>
                {cards.map((card, index) => {
                    return <ResponsiveCard card={card} key={card.id} index={index} />;
                })}
                <div className="col-start-1 col-end-3 sm:py-[calc(24px+8*(100vw-576px)/1024)] py-[1.5rem] overflow-hidden w-full relative">
                    <div className="justify-center flex items-center flex-col gap-[1.5rem] h-full">
                        <div>
                            <div className="text-center sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">View More</div>
                        </div>
                        <div>
                            <a href="#/News/All">
                                <Button variant="ghost" color="secondary" className="!border-[1px] min-w-max sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] h-[40px] sm:h-[calc(40px+32*(100vw-576px)/1024)] px-[24px] sm:px-[calc(10.5px+2.34375vw)] font-medium text-black" radius="full">
                                    News
                                </Button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




