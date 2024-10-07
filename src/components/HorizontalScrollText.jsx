import { motion, useTransform, useScroll } from "framer-motion";
import { useRef} from "react";

export const HorizontalScrollText = () => {
    // const targetRef2 = useRef(null);
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], window.innerWidth >= 768 ? ["230%", "-200%"] : ["430%", "-400%"]);

    return (
        <section className="2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px]">
            <div className="overflow-hidden">
                <motion.div style={{ x }} className="whitespace-nowrap flex w-auto items-center 2xl:gap-[5rem] sm:gap-[calc(24px+56*(100vw-576px)/1024)] gap-[1.5rem] pl-[20vw]">
                    <div>
                        <div className="2xl:ml-[6vw] sm:ml-[calc(32px+64*(100vw-576px)/1024)] ml-[2rem]"></div>
                    </div>
                    <div>
                        <h2 className="2xl:text-[9.375vw] sm:text-[calc(40px+110*(100vw-576px)/1024)] text-[40px] leading-[1.15] font-[590] overflow-hidden">
                            Shine in the digital world
                        </h2>
                    </div>
                    <div>
                        <div className="2xl:ml-[6vw] sm:ml-[calc(32px+64*(100vw-576px)/1024)] ml-[2rem]"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}