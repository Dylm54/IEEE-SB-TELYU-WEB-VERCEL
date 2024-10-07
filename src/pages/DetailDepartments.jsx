import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Reveal from "../components/RevealAnimation"
import FotoRifki from "../assets/FotoRifki.png"
import { CarouselForDepartmentsOfficers } from "../components/CarouselForDepartmentsOfficers"
import { DataDepartments } from "../utils/DataDepartments"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const DetailDepartments = () => {
    const indexData = useParams()
    const indexPage = indexData.index

    return (
        <div>
            <Nav />
            <section className="bg-black pt-[120px] pb-[60px] sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] sm:pb-[calc(60px+60*(100vw-576px)/1024)] 2xl:pt-[240px] 2xl:pb-[7.5vw]">
                <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                    <Reveal>
                        <div className="flex justify-center items-center m-auto text-center sm:pb-[calc(24px+8*(100vw-576px)/1024)] pb-[1.5rem]">
                            <h1 className="reverse-moving-gradient text-transparent 2xl:mb-[48px] sm:text-[80px] sm:mb-[calc(32px+32*(100vw-576px)/1024)] text-[40px] mb-[32px] leading-[1.15] font-[590] overlow-hidden text-center">
                                {DataDepartments[indexPage]?.name}
                            </h1>
                        </div>
                    </Reveal>
                    <Reveal>
                        <CarouselForDepartmentsOfficers photos={DataDepartments[indexPage]?.photos} />
                    </Reveal>
                    <div className="flex w-full justify-center items-center flex-col mb-[100px]">
                        {DataDepartments[indexPage]?.desc.map((data, i) => (
                            <Reveal>
                                <div className="flex w-full justify-center items-center">
                                    <p key={i} className="max-w-[1024px] text-center text-[#A1A1A6] 2xl:text-[2vw] 2xl:mb-[32px] 2xl:mt-[48px] sm:mb-[calc(8px+24*(100vw-576px)/1024)] sm:mt-[calc(16px+32*(100vw-576px)/1024)] sm:text-[calc(16px+16*(100vw-576px)/1024)] mt-[16px] mb-[8px] text-[16px]">{data}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal>
                        <div className="flex justify-center items-center m-auto text-center sm:pb-[calc(24px+8*(100vw-576px)/1024)] pb-[1.5rem]">
                            <h1 className="reverse-moving-gradient text-transparent 2xl:mb-[48px] sm:text-[80px] sm:mb-[calc(32px+32*(100vw-576px)/1024)] text-[40px] mb-[32px] leading-[1.15] font-[590] overlow-hidden text-center">
                                Work Programs
                            </h1>
                        </div>
                    </Reveal>
                    <Reveal>
                    <div className="flex w-full flex-wrap justify-center gap-12 mb-[60px]">
                        {DataDepartments[indexPage]?.workPrograms.map((wp, i) => (
                            
                                <div key={i} className="gradientBgOfficerCard purpleBoxShadow w-[480px] 2xl:rounded-[32px] rounded-[16px] lg:p-[3vw] md:p-[2rem] p-[1.5rem]">
                                    <h2 className="text-center sm:text-[30px] text-[20px] leading-[1.15] font-[590] text-[#C0A2FE] mb-[1.5rem]">{wp.name}</h2>
                                    <p className="text-center 2xl:text-[25px] sm:text-[20px] text-[#9575D7] text-[16px] leading-[1.4] overflow-hidden">{wp.desc}</p>
                                </div>
                            
                        ))}
                    </div>
                    </Reveal>
                </div>
            </section>
            <Footer />
        </div>
    )
}
