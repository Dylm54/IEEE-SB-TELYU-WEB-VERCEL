import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { Button } from "@nextui-org/react";
import Reveal from "../components/RevealAnimation";
import { useState, useEffect } from "react";
import Fotbar from "../assets/FotoOfficerEnhanced.jpeg"
import Fotang from "../assets/FotoAnggotaIEEE.jpeg"
import Fotvice from "../assets/FotoAchievementDaffa.png"
import { FaArrowRight } from "react-icons/fa";
import { HorizontalScrollCarousel, ResponsiveNews } from "../components/NewsHorizontalCarousel";
import { HorizontalScrollText } from "../components/HorizontalScrollText";
import { CarouselAch } from "../components/CarouselAch";
import { RecentActivities, ResponsiveRecentActivities } from "../components/RecentActivities";
import { CountAnimation } from "../components/CountAnimation";
import axios from "axios";
import { Helmet } from 'react-helmet-async';

const AchievementsTempData = [
    {
        id: 1,
        name: "Iki Tayubi",
        photo: Fotvice,
        achievement: "Intern at IEEE R10 YP GEMS",
        link: "",
    },
    {
        id: 2,
        name: "Muhammad Daffa Fadillah",
        photo: Fotvice,
        achievement: "Intern at IEEE R10 YP GEMS",
        link: "",
    },
    {
        id: 3,
        name: "Muhammad Daffa Fadillah",
        photo: Fotvice,
        achievement: "Intern at IEEE R10 YP GEMS",
        link: "",
    },
    {
        id: 4,
        name: "Iki Tayubi",
        photo: Fotvice,
        achievement: "Intern at IEEE R10 YP GEMS",
        link: "",
    },
    {
        id: 5,
        name: "Iki Tayubi",
        photo: Fotvice,
        achievement: "Intern at IEEE R10 YP GEMS",
        link: "",
    },
];




const Home = () => {

    const [isScrolling, setIsScrolling] = useState(false);
    const [fiveNews, setFiveNews] = useState([]);
    const [fiveActivities, setFiveActivities] = useState([]);
    const [fiveAch, setFiveAch] = useState()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsScrolling(false);
            }, 300);
        };

        let timeoutId;
        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const getAllNews = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/news`)
                const data = await response.data
                const fiveData = data.slice(-5)
                const reversedData = [...fiveData].reverse()
                setFiveNews(reversedData)
            } catch (err) {
                console.log(err)
            }
        }
        getAllNews()
    }, [])

    useEffect(() => {
        const getAllActivities = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/activities`)
                const data = await response.data
                const fiveData = data.slice(-5)
                const reversedData = [...fiveData].reverse()
                setFiveActivities(reversedData)
            } catch (err) {
                console.log(err)
            }
        }
        getAllActivities()
    }, [])

    useEffect(() => {
        const getAllAchievements = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/achievements`)
                const data = await response.data
                const fiveData = data.slice(-5)
                const reversedData = [...fiveData].reverse()
                setFiveAch(reversedData)
            } catch (err) {
                console.log(err)
            }
        }
        getAllAchievements()
    }, [])

    return (
        <div className={isScrolling ? 'scrolling' : ''}>
            <Helmet>
                <title>Home - IEEE SB Telkom University</title>
                <meta name="description" content="IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale." />
                <meta property="og:title" content="Home - IEEE SB Telkom University" />
                <meta property="og:description" content="IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale." />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="./src/assets/IEEE_Thumbnail.jpeg" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <Nav />
            <section>
                <div className="bg-black purple flex w-full pt-[120px] pb-[60px] sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] sm:pb-[calc(60px+60*(100vw-576px)/1024)] 2xl:pt-[240px] 2xl:pb-[7.5vw]">
                    <div className="flex w-full px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px]">
                        <div className="flex w-full flex-col 2xl:gap-[7.5vw] sm:gap-[calc(60px+60*(100vw-576px)/1024)] gap-[60px]">
                            <div>
                                <Reveal>
                                    <h1 className="text-white  sm:text-[6.65vw] text-[40px] leading-[1.15] font-[590]">Foster <span className="text-transparent moving-gradient animate-gradient">Technological</span></h1>
                                </Reveal>
                                <Reveal>
                                    <h1 className="text-white  sm:text-[6.65vw] text-[40px] leading-[1.15] font-[590]">Innovation</h1>
                                </Reveal>
                            </div>
                            <div className="flex lg:flex-row flex-col gap-[2rem]">
                                <div className="flex w-full flex-row items-center 2xl:gap-[1.5rem] sm:gap-[calc(16px+8*(100vw-576px)/1024)] gap-[1rem]">
                                    <div className="flex justify-center items-center text-black rounded-full bg-white min-w-[40px] w-[40px] h-[40px] 2xl:min-w-[72px] 2xl:w-[72px] 2xl:h-[72px] sm:min-w-[calc(40px+32*(100vw-576px)/1024)] sm:w-[calc(40px+32*(100vw-576px)/1024)] sm:h-[calc(40px+32*(100vw-576px)/1024)]">
                                        <div className="text-[14px] 2xl:text-[24px] sm:text-[calc(14px+10*(100vw-576px)/1024)]">
                                            <span className="inline-flex flex-col h-[calc(14px*theme(lineHeight.tight))] sm:h-[calc(calc(14px+10*(100vw-576px)/1024)*theme(lineHeight.tight))] 2xl:h-[calc(24px*theme(lineHeight.tight))] overflow-hidden">
                                                <ul class="block animate-text-slide-4 text-center leading-tight [&_li]:block">
                                                    <li>13</li>
                                                    <li>6</li>
                                                    <li>105</li>
                                                    <li>9</li>
                                                    <li aria-hidden="true">13</li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-[#71777e] text-[14px] 2xl:text-[24px] sm:text-[calc(14px+10*(100vw-576px)/1024)]">
                                        <span className="text-[#71777e] inline-flex flex-col h-[calc(14px*theme(lineHeight.tight))] sm:h-[calc(calc(14px+10*(100vw-576px)/1024)*theme(lineHeight.tight))] 2xl:h-[calc(24px*theme(lineHeight.tight))] overflow-hidden">
                                            <ul class="block animate-text-slide-4 text-left leading-tight [&_li]:block">
                                                <li>Work Programs</li>
                                                <li>Departments</li>
                                                <li>Current Officers</li>
                                                <li>Years on Tel-U</li>
                                                <li aria-hidden="true">Work Programs</li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full flex md:flex-row flex-col gap-[1rem] md:gap-0 items-start md:items-center justify-between">
                                    <div className="2xl:max-w-[26.25vw] lg:max-w-[420px] text-white">
                                        <span className="2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] font-normal leading-[1.4]">We embrace Telkom University students to upscale their skills in technology field</span>
                                    </div>
                                    <a href="#/Departments">
                                        <Button className="min-w-max border-0 2xl:text-[1.5rem] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] h-[40px] sm:h-[calc(40px+32*(100vw-576px)/1024)] 2xl:h-[72px] px-[24px] sm:px-[calc(10.5px+2.34375vw)] 2xl:px-[48px] text-white font-medium bg-[#6B0DE3]" radius="full">
                                            See More
                                        </Button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {window.innerWidth > 1024 && fiveNews ? (
                    <div className="bg-white">
                        <HorizontalScrollCarousel cards={fiveNews} />
                    </div>) : (
                    <ResponsiveNews cards={fiveNews} />
                )}
            </section>
            <Reveal>
                <section className="bg-black purple text-white 2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px]">
                    <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                        <h2 className="2xl:text-[1.5vw] 2xl:mb-[16px] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:mb-[calc(8px+8*(100vw-576px)/1024)] text-[16px] font-normal mb-[8px] leading-[1.4] overflow-hidden">Our Departments</h2>
                        <div>
                            <Reveal>
                                <div className="group mb-[1.5rem] flex justify-between relative gap-[1.5rem]">
                                    <a href="#/DetailDepartments/0" className="absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
                                    <div className="lg:group-hover:scale-[0.95] depHov 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">Research</div>
                                    <div className="lg:group-hover:opacity-100 lg:group-hover:translate-x-[50%] opacity-100 lg:opacity-0 rightArrHov flex items-center">
                                        <FaArrowRight size={window.innerWidth < 1024 ? 20 : 30} />
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="group mb-[1.5rem] flex justify-between relative gap-[1.5rem]">
                                    <a href="#/DetailDepartments/1" className="absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
                                    <div className="lg:group-hover:scale-[0.95] depHov 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">Education</div>
                                    <div className="lg:group-hover:opacity-100 lg:group-hover:translate-x-[50%] opacity-100 lg:opacity-0 rightArrHov flex items-center">
                                        <FaArrowRight size={window.innerWidth < 1024 ? 20 : 30} />
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="group mb-[1.5rem] flex justify-between relative gap-[1.5rem]">
                                    <a href="#/DetailDepartments/2" className="absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
                                    <div className="lg:group-hover:scale-[0.95] depHov 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">Public Relation</div>
                                    <div className="lg:group-hover:opacity-100 lg:group-hover:translate-x-[50%] opacity-100 lg:opacity-0 rightArrHov flex items-center">
                                        <FaArrowRight size={window.innerWidth < 1024 ? 20 : 30} />
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="group mb-[1.5rem] flex justify-between relative gap-[1.5rem]">
                                    <a href="#/DetailDepartments/3" className="absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
                                    <div className="lg:group-hover:scale-[0.95] depHov 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">Human Resource</div>
                                    <div className="lg:group-hover:opacity-100 lg:group-hover:translate-x-[50%] opacity-100 lg:opacity-0 rightArrHov flex items-center">
                                        <FaArrowRight size={window.innerWidth < 1024 ? 20 : 30} />
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="group mb-[1.5rem] flex justify-between relative gap-[1.5rem]">
                                    <a href="#/DetailDepartments/4" className="absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
                                    <div className="lg:group-hover:scale-[0.95] depHov 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">Creative & Information</div>
                                    <div className="lg:group-hover:opacity-100 lg:group-hover:translate-x-[50%] opacity-100 lg:opacity-0 rightArrHov flex items-center">
                                        <FaArrowRight size={window.innerWidth < 1024 ? 20 : 30} />
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className="group mb-[1.5rem] flex justify-between relative gap-[1.5rem]">
                                    <a href="#/DetailDepartments/5" className="absolute w-full h-full left-0 top-0 cursor-pointer z-[3]"></a>
                                    <div className="lg:group-hover:scale-[0.95] depHov 2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">Information & Technology</div>
                                    <div className="lg:group-hover:opacity-100 lg:group-hover:translate-x-[50%] opacity-100 lg:opacity-0 rightArrHov flex items-center">
                                        <FaArrowRight size={window.innerWidth < 1024 ? 20 : 30} />
                                    </div>
                                </div>
                            </Reveal>
                            <div className="2xl:my-[4rem] sm:my-[calc(32px+32*(100vw-576px)/1024)] w-full h-[1px] my-[2rem] bg-[#414141]"></div>
                            <Reveal>
                                <div className="flex lg:justify-between lg:flex-row lg:items-end lg:gap-[3rem] flex-col gap-[1rem]">
                                    <div>
                                        <div className="moving-gradient text-transparent 2xl:text-[3.5vw] 2xl:mb-[32px] sm:mb-[calc(8px+24*(100vw-576px)/1024)] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] mb-[8px] leading-[1.4] font-[590] overflow-hidden">
                                            Student Branch
                                        </div>
                                        <div className="2xl:text-[24px] sm:text-[calc(16px+8*(100vw-576px)/1024)] my-[15px] lg:my-0 text-[16px] leading-[1.5] max-w-[570px]">
                                            We function as the intermediary between Telkom University student and IEEE as well as student development in organizing and involving members in research and innovation development activities on a national to international scale.
                                        </div>
                                    </div>
                                    <div className="2xl:gap-[1rem] sm:gap-[calc(8px+8*(100vw-576px)/1024)] gap-[0.5rem] lg:justify-end flex items-center">
                                        <div className="border-solid border-[1px] border-[#6B0DE3] 2xl:px-[48px] 2xl:text-[1.5rem] 2xl:h-[72px] 2xl:gap-[1rem] sm:h-[calc(40px+32*(100vw-576px)/1024)] sm:px-[calc(24px+24*(100vw-576px)/1024)] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:gap-[calc(8px+8*(100vw-576px)/1024)] px-[24px] text-[1rem] h-[40px] gap-[0.5rem] font-medium inline-flex rounded-full relative items-center justify-center">
                                            10+ Divisions
                                        </div>
                                        <div className="border-solid border-[1px] border-[#6B0DE3] 2xl:px-[48px] 2xl:text-[1.5rem] 2xl:h-[72px] 2xl:gap-[1rem] sm:h-[calc(40px+32*(100vw-576px)/1024)] sm:px-[calc(24px+24*(100vw-576px)/1024)] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:gap-[calc(8px+8*(100vw-576px)/1024)] px-[24px] text-[1rem] h-[40px] gap-[0.5rem] font-medium inline-flex rounded-full relative items-center justify-center">
                                            6 Departments
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>
            </Reveal>
            <section className="2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px]">
                <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                    <div className="gap-[1.5rem] grid grid-cols-[1fr]">
                        <div className="flex">
                            <Reveal>
                                <div className="2xl:max-w-[43.125vw] lg:max-w-[690px]">
                                    <h2 className="2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] font-[590] leading-[1.4]">Your Place to Grow</h2>
                                </div>
                            </Reveal>
                        </div>
                        <div className="2xl:gap-[5vw] lg:grid-cols-[1fr,1fr] lg:gap-[80px] lg:items-end grid grid-cols-[1fr] gap-[1.5rem]">
                            <div className="lg:justify-end lg:h-full lg:gap-[8vw] flex flex-col gap-[1.5rem]">
                                <Reveal>
                                    <div className="2xl:max-w-[35.625vw] lg:max-w-[570px]">
                                        <div className="text-black 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] font-normal leading-[1.4] overflow-hidden">
                                            Our organization allows you to improve your leadership, communication, and time management skills and trains you to deal with pressure and manage your time more effectively, making this experience a solid foundation for personal and professional development.
                                        </div>
                                    </div>
                                </Reveal>
                                <div>
                                    <a href="#/Departments">
                                        <Button variant="ghost" color="secondary" className="!border-[1px] min-w-max sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] h-[40px] sm:h-[calc(40px+32*(100vw-576px)/1024)] px-[24px] sm:px-[calc(10.5px+2.34375vw)] font-medium text-black" radius="full">
                                            See More
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="md:w-fit w-full 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] overflow-hidden">
                                    <Reveal>
                                        <div className="2xl:p-[64px] 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] sm:p-[calc(24px+40*(100vw-576px)/1024)] p-[24px] bg-[#ecf1f4] relative overflow-hidden">
                                            <div className="lg:flex lg:flex-row lg:items-center lg:justify-between md:grid md:grid-cols-2 flex flex-col items-center w-full">
                                                <div className="md:border-r border-[#C1C7CB] md:border-b-0 lg:p-[2vw] md:p-[2rem] p-[1rem] border-b border-solid text-center">
                                                    <div className="flex justify-center items-center sm:gap-[1rem] gap-[0.5rem] overflow-hidden text-center">
                                                        <div className="2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] font-[590] leading-[1.4]">
                                                            <CountAnimation n={9} />
                                                        </div>
                                                    </div>
                                                    <div className="2xl:text-[1.5vw] 2xl:mt-[16px] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:mt-[calc(8px+8*(100vw-576px)/1024)] text-[16px] mt-[8px] font-normal">
                                                        Years on Tel-U
                                                    </div>
                                                </div>
                                                <div className="lg:p-[2vw] md:p-[2rem] p-[1rem] text-center">
                                                    <div className="flex justify-center items-center sm:gap-[1rem] gap-[0.5rem] overflow-hidden text-center">
                                                        <div className="2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] font-[590] leading-[1.4]">
                                                            <CountAnimation n={105} />
                                                        </div>
                                                    </div>
                                                    <div className="2xl:text-[1.5vw] 2xl:mt-[16px] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:mt-[calc(8px+8*(100vw-576px)/1024)] text-[16px] mt-[8px] font-normal">
                                                        Current Officers
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Reveal>
                <section>
                    <div className="px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px]">
                        <div className="grid 2xl:gap-[40px] sm:gap-[calc(20px+20*(100vw-576px)/1024)] gap-[20px]">
                            <div className="aspect-[1.16] sm:aspect-[1.75176] 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] overflow-hidden relative flex items-center">
                                <div className="2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] overflow-hidden relative w-full bg-clip-padding h-full">

                                    <figure className="h-full w-full relative flex items-center">
                                        <img src={Fotbar} alt="image" className="w-full h-full object-cover" />
                                    </figure>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Reveal>
            <section className="2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px]">
                <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                    <Reveal>
                        <div className="flex">
                            <div className="2xl:max-w-[73.125vw] max-w-[1177px]">
                                <h2 className="2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] font-[590] leading-[1.4]">
                                    From the condition of our organization which lacked human resources, we returned and started building a community that benefited society.
                                </h2>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <HorizontalScrollText />
            <section className="2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px]">
                <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                    <Reveal>
                        <div className="flex justify-center items-center lg:max-w-[32.5vw] sm:max-w-[40.5vw] max-w-[220px] m-auto text-center ">
                            <h1 className="2xl:mb-[32px]  sm:text-[80px] sm:mb-[calc(16px+16*(100vw-576px)/1024)] text-[40px] mb-[16px] leading-[1.15] font-[590] overlow-hidden text-center">
                                Explore our officers' achievements
                            </h1>
                        </div>
                    </Reveal>
                    {fiveAch &&
                        <Reveal>
                            <CarouselAch achData={fiveAch} />
                        </Reveal>}
                    <Reveal>
                        <div className="justify-center flex items-center flex-col gap-[1.5rem] h-full">
                            <div>
                                <div className="text-center sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">View More</div>
                            </div>
                            <div>
                                <a href="#/Achievements">
                                    <Button variant="ghost" color="secondary" className="!border-[1px] min-w-max sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] h-[40px] sm:h-[calc(40px+32*(100vw-576px)/1024)] px-[24px] sm:px-[calc(10.5px+2.34375vw)] font-medium text-black" radius="full">
                                        Achievements
                                    </Button>
                                </a>

                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            {window.innerWidth > 1024 && fiveActivities ? (
                <div>
                    <RecentActivities cards={fiveActivities} />
                </div>) : (
                <ResponsiveRecentActivities cards={fiveActivities} />
            )}
            <Footer />
        </div>
    )
}

export default Home

