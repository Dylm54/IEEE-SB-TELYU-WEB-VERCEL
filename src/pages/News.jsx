import Fotang from "../assets/FotoAnggotaIEEE.jpeg"
import WhiteNav from "../components/WhiteNav";
import Footer from "../components/Footer";
import Reveal from "../components/RevealAnimation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const News = () => {
    const { kategori } = useParams()
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const currentDate = new Date()
    const dates = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const [allData, setAllData] = useState()
    const { pathname } = useLocation();

    const nth = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    const categories = ["All", "News", "Event"]

    useEffect(() => {
        const getAllNews = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/news`)
                const data = await response.data
                const reversedData = [...data].reverse()
                setAllData(reversedData)
            } catch (err) {
                console.log(err)
            }
        }
        const getNewsByCategory = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/news/category/${kategori}`)
                const data = await response.data
                const reversedData = [...data].reverse()
                setAllData(reversedData)
            } catch (err) {
                console.log(err)
            }
        }
        if (kategori === "All") {
            getAllNews()
        } else {
            getNewsByCategory()
        }
        
    }, [pathname])

    const changeCategory = (category) => {
        window.location.href = `#/News/${category}`
    }

    return (
        <div>
            <Helmet>
                <title>News - IEEE SB Telkom University</title>
                <meta name="description" content="IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale." />
                <meta property="og:title" content="News - IEEE SB Telkom University" />
                <meta property="og:description" content="IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale." />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="./src/assets/IEEE_Thumbnail.jpeg" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <WhiteNav />

            <section className="min-[1600px]:pt-[240px] min-[576px]:pt-[calc((60px+(6000vw-34560px)/1024)*2)] pt-[120px]">
                <div className="hidden md:flex justify-start top-[80rem] -ml-[15rem] md:-ml-[18rem]">
                    <div className="colour-effect-purple"></div>
                </div>
                <div className="min-[1600px]:px-[90px] min-[576px]:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">

                    <Reveal>
                        <div className="text-center">
                            <h1 className="min-[1600px]:text-[5.625vw] min-[1600px]:mb-[32px] min-[576px]:text-[calc(40px+50*(100vw-576px)/1024)] min-[576px]:mb-[calc(16px+16*(100vw-576px)/1024)] mb-[16px] leading-[1.15] font-[590] text-center overflow-hidden text-[40px]">Articles from: <span className="md:text-transparent moving-gradient">{kategori === "All" ? "News" : kategori}</span></h1>
                            <div className="min-[1600px]:text-[2.5vw] min-[1600px]:mt-[48px] min-[576px]:text-[calc(24px+16*(100vw-576px)/1024)] min-[576px]:mt-[calc(16px+32*(100vw-576px)/1024)] text-[24px] mt-[16px] leading-[1.4] font-[590] overflow-hidden">
                                Today is
                                <span className="text-[#9072D3]">{`  ${dates}`}<sup>{`${nth(dates)}`}</sup> {`${monthsName[month]} ${year}`}</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <section className="min-[1600px]:py-[3.75vw] min-[576px]:py-[calc(24px+36*(100vw-576px)/1024)] py-[24px] ">
                <div className="min-[1600px]:px-[90px] min-[576px]:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                    <div className="min-[1600px]:max-w-[50vw] min-[1025px]:max-w-[800px] min-[1025px]:m-auto ">
                        <div className="flex justify-center md:h-auto rounded-[16px]">
                            <Reveal width="fit">
                                <div className="min-[1600px]:gap-[1rem] min-[576px]:gap-[calc(8px+8*(100vw-576px)/1024)] gap-[0.5rem] flex flex-wrap items-center">
                                    {categories.map(category => {
                                        if (kategori !== category) {
                                            return <a href={`#/News/${category}`} className="px-[24px] font-medium border border-solid border-[#71777e] inline-flex rounded-[100px] cursor-pointer relative h-[40px] items-center justify-center overflow-hidden no-underline gap-[0.5rem] text-black hover:bg-black hover:text-white transition">{category}</a>
                                        } else {
                                            return <a href={`#/News/${category}`} className="px-[24px] font-medium border border-solid border-[#71777e] inline-flex rounded-[100px] cursor-pointer relative h-[40px] items-center justify-center overflow-hidden no-underline gap-[0.5rem] text-white bg-black">{category}</a>
                                        }
                                        
                                    })}
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <section className="2xl:pb-[7.5vw] sm:pb-[calc(60px+60*(100vw-576px)/1024)] pb-[60px]">
                <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                    <div className="2xl:mb-[20px] 2xl:gap-[40px] sm:mb-[calc(20px+20*(100vw-576px)/1024)] sm:gap-[calc(20px+20*(100vw-576px)/1024)] mb-[20px] gap-[20px] 2xl:grid-cols-[1fr,1fr,1fr] md:grid-cols-[1fr,1fr] grid">
                        {allData?.map((data, i) => (
                            <div className="" key={i}>
                                <div className="h-full text-[#fff] 2xl:rounded-[32px] xl:aspect-[0.96] lg:aspect-[1.16] md:aspect-[1.16] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] overflow-hidden relative aspect-[1] rounded-[16px] w-full">
                                    <a href={`#/DetailNews/${data.id}`} className="2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
                                    <div className="2xl:p-[2.5vw] sm:p-[calc(24px+16*(100vw-576px)/1024)] z-[2] p-[24px] h-full relative flex flex-col justify-between gap-[24px]">
                                        <div className="flex flex-col justify-between gap-[24px]">
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="">
                                            <div className="2xl:gap-[1rem] sm:gap-[calc(8px+8*(100vw-576px)/1024)] flex flex-col gap-[0.5rem] ">
                                                <div className="2xl:max-w-[52.5vw] max-w-[840px]">
                                                    <div className="2xl:text-[2vw] sm:text-[calc(24px+8*(100vw-576px)/1024)] text-[24px] leading-[1.4] font-[590] overflow-hidden">{data.title}</div>
                                                </div>
                                                <div className="2xl:gap-[1rem] sm:gap-[calc(8px+8*(100vw-576px)/1024)] gap-[0.5rem] flex-wrap flex items-center">
                                                    <div className="backdrop-blur-[15px] py-0 px-[24px] font-medium border-[1px] border-solid border-[#71777e] inline-flex rounded-[100px] relative h-[40px] items-center justify-center overflow-hidden gap-[0.5rem] appearance-none">
                                                        <span className="flex items-center relative overflow-hidden z-[2] h-full font-medium">{data.kategori}</span>
                                                    </div>
                                                    <div>
                                                        {data.date}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bgShadow 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] absolute w-full h-full top-0 left-0 z-[1] flex justify-center items-center rounded-[16px] overflow-hidden">
                                        <figure className="flex items-center w-full h-full object-cover aspect-[1]">
                                            <img src={`${import.meta.env.VITE_API_URL}/uploads/${data.thumbnail}`} alt="image" className="w-full h-full object-cover scale-[1.15] overflow-clip" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default News;