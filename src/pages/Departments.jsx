import WhiteNav from "../components/WhiteNav"
import Reveal from "../components/RevealAnimation"
import { CountAnimation } from "../components/CountAnimation"
import Fotbar from "../assets/FotoOfficerEnhanced.jpeg"
import { useEffect } from "react"
import { DepartmentTrackElement } from "../components/DepartmentsTrackElement"
import Footer from "../components/Footer"
import OfficerCard from "../components/OfficerCard"
import FotoIkiTayubi from "../assets/Iki-Tayubi.png"
import FotoHusna from "../assets/FotoHusna.png"
import FotoNadya from "../assets/FotoNadya.png"
import FotoDaffaFadillah from "../assets/FotoDaffaFadillah.png"
import FotoAsry from "../assets/FotoAsry.png"
import FotoArthur from "../assets/FotoArthur.png"
import FotoFahrayhan from "../assets/FotoFahrayhan.png"
import FotoRifki from "../assets/FotoRifki.png"
import FotoKaysan from "../assets/FotoKaysan.png"
import FotoNazer from "../assets/FotoNazer.png"
import FotoCicang from "../assets/FotoCicang.png"
import { Helmet } from 'react-helmet';

export const Departments = () => {
    const goalsText = "IEEE SB Telkom University Goals"

    return (
        <div>
            <Helmet>
                <title>Departments - IEEE SB Telkom University</title>
                <meta name="description" content="IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale." />
                <meta property="og:title" content="Departments - IEEE SB Telkom University" />
                <meta property="og:description" content="IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale." />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="./src/assets/IEEE_Thumbnail.jpeg" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <WhiteNav />
            <div className="">
                <section className="pt-[120px] pb-[60px] sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] sm:pb-[calc(60px+60*(100vw-576px)/1024)] 2xl:pt-[240px] 2xl:pb-[7.5vw]">
                    <div className="px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px]">
                        <div className="flex w-full flex-col sm:gap-[4vw] gap-[2rem]">
                            <div className="flex justify-between gap-[1rem] lg:items-center lg:flex-row">
                                <Reveal>
                                    <h1 className="sm:text-[6.75vw] text-[40px] font-[590] max-w-[60vw] leading-[1.15]">IEEE Telkom University <span className="reverse-moving-gradient text-transparent">Student Branch</span></h1>
                                </Reveal>
                            </div>
                            <div className="grid gap-[2rem] grid-cols-[1fr] lg:grid-cols-[1fr,1fr]">
                                <div className="flex lg:items-start lg:justify-end lg:flex-row gap-[1rem] items-start flex-col justify-between">
                                    <div className="flex 2xl:gap-[3.75vw] lg:gap-[3.7vw] gap-[2rem] w-full flex-nowrap items-center flex-row">
                                        <div>
                                            <div className="sm:gap-[1rem] flex items-center gap-[0.5rem] overflow-hidden">
                                                <div className="2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">
                                                    <CountAnimation n={9} />
                                                </div>
                                            </div>
                                            <h2 className="2xl:text-[1.5vw] 2xl:mt-[16px] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:mt-[calc(8px+8*(100vw-576px)/1024)] text-[16px] mt-[8px] font-normal">Years on Tel-U</h2>
                                        </div>
                                        <div>
                                            <div className="sm:gap-[1rem] flex items-center gap-[0.5rem] overflow-hidden">
                                                <div className="2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] leading-[1.4] font-[590] overflow-hidden">
                                                    <CountAnimation n={105} />
                                                </div>
                                            </div>
                                            <h2 className="2xl:text-[1.5vw] 2xl:mt-[16px] sm:text-[calc(16px+8*(100vw-576px)/1024)] sm:mt-[calc(8px+8*(100vw-576px)/1024)] text-[16px] mt-[8px] font-normal">Current Officers</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex lg:items-end lg:justify-end ">
                                    <div className="2xl:max-w-[35.625vw] lg:max-w-[570px]">
                                        <div className="text-black 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[16px] font-normal leading-[1.4] overflow-hidden">
                                            Our organization allows you to improve your leadership, communication, and time management skills and trains you to deal with pressure and manage your time more effectively, making this experience a solid foundation for personal and professional development.
                                        </div>
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
                <section className="2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px] border-b-[0.5px] border-[#2D3A51]">
                    <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                        <Reveal>
                            <div className="flex">
                                <div className="w-full relative">
                                    <h5 className="tracking-normal mr-[4em] lg:mr-[8em] text-[14px] lg:text-[16px] leading-[1] inline-block">What is IEEE SB Tel-U?</h5>
                                    <h2 className="text-[30px] lg:text-[4vw] tracking-[-0.01em] font-light leading-[1.25] inline text-justify">
                                        IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale.
                                    </h2>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
                <section className="2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px]">
                    <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                        <div className="flex w-full justify-center items-center flex-col sm:gap-[6vw] gap-[2rem]">
                            <Reveal>
                                <div className="flex w-full justify-center items-center">
                                    <div className="purpleBoxShadow flex w-full justify-center items-center gap-[1.5rem] flex-col 2xl:w-[50.625vw] lg:w-[800px] sm:w-[60vw] 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] lg:p-[3vw] md:p-[2rem] p-[1.5rem]">
                                        <div className="flex w-full justify-center items-center">
                                            <h2 className="sm:text-[6.65vw] text-[40px] leading-[1.15] font-[590] moving-gradient text-transparent">Vision</h2>
                                        </div>
                                        <p className="flex text-center 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[#8363C6] text-[16px]  leading-[1.4] overflow-hidden">Exemplary in research, working for the advancement of humanity and sociality with IEEE and being number 1 IEEE SB throughout Indonesia</p>
                                    </div>
                                </div>
                            </Reveal>

                            <div>
                                <Reveal>
                                    <div className="flex w-full justify-center items-center sm:gap-[4vw] gap-[2rem] flex-col ">
                                        <h2 className="sm:text-[6.65vw] text-[40px] leading-[1.15] font-[590] moving-gradient text-transparent">Mission</h2>
                                        <div className="h-min grid lg:grid-cols-[1fr,1fr,1fr] grid-cols-[1fr] grid-rows-1 w-full content-center justify-items-center gap-[4vw] lg:gap-[2vw]">
                                            <div className="flex flex-col gap-[4vw] lg:gap-[2vw]">
                                                <div className="purpleBoxShadow flex w-full justify-center items-center gap-[1.5rem] flex-col 2xl:rounded-[32px] rounded-[16px] lg:p-[3vw] md:p-[2rem] p-[1rem]">
                                                    <p className="flex text-center 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[#8363C6] text-[16px]  leading-[1.4] overflow-hidden">Improving the quality of IEEE SB Tel-U officers better and being ready to take part in activities</p>
                                                </div>
                                                <div className="purpleBoxShadow flex w-full h-full justify-center items-center gap-[1.5rem] flex-col 2xl:rounded-[32px] rounded-[16px] lg:p-[3vw] md:p-[2rem] p-[1rem]">
                                                    <p className="flex text-center 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[#8363C6] text-[16px]  leading-[1.4] overflow-hidden">Making IEEE SB Telkom University an open, innovative, creative and solution organization with a spirit of professionalism among officers.</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-between gap-[4vw] lg:gap-[2vw]">
                                                <div className="purpleBoxShadow flex w-full h-full justify-center items-center gap-[1.5rem] flex-col 2xl:rounded-[32px] rounded-[16px] lg:p-[3vw] md:p-[2rem] p-[1rem]">
                                                    <p className="flex text-center 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[#8363C6] text-[16px]  leading-[1.4] overflow-hidden">Making IEEE SB Telkom University a forum for students to move, work and discuss in the field of technology.</p>
                                                </div>
                                                <div className="purpleBoxShadow flex w-full justify-center items-center gap-[1.5rem] flex-col 2xl:rounded-[32px] rounded-[16px] lg:p-[3vw] md:p-[2rem] p-[1rem]">
                                                    <p className="flex text-center 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[#8363C6] text-[16px]  leading-[1.4] overflow-hidden">Collaborating with internal campus and external campus parties</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-[4vw] lg:gap-[2vw]">
                                                <div className="purpleBoxShadow flex w-full justify-center items-center gap-[1.5rem] flex-col 2xl:rounded-[32px] rounded-[16px] lg:p-[3vw] md:p-[2rem] p-[1rem]">
                                                    <p className="flex text-center 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[#8363C6] text-[16px]  leading-[1.4] overflow-hidden">Creating IEEE SB Telkom University as part of UKM TEL-U which is active in the field of reasoning.</p>
                                                </div>
                                                <div className="purpleBoxShadow flex w-full h-full justify-center items-center gap-[1.5rem] flex-col 2xl:rounded-[32px] rounded-[16px] lg:p-[3vw] md:p-[2rem] p-[1rem]">
                                                    <p className="flex text-center 2xl:text-[1.5vw] sm:text-[calc(16px+8*(100vw-576px)/1024)] text-[#8363C6] text-[16px]  leading-[1.4] overflow-hidden">Carrying out scientific studies, research and community service, especially in the application of technology in Indonesia.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] pt-0 pb-[60px] h-min-[100vh]">
                    <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                        {window.innerWidth >= 640 ?
                            <Reveal>
                                <div className="flex w-full pb-[60px]">
                                    <div className="grid grid-cols-[1fr,1fr,1fr] w-full">
                                        <div className="">
                                            <h2 className="sm:text-[2.5vw] text-[20px] leading-[1.15] font-[590] moving-gradient text-transparent mb-4">Harmonization</h2>
                                            <p className="text-[#8363C6]">Creating good relationships between IEEE Telkom University Student Branch officers while undergoing the specified work program.</p>
                                        </div>
                                        <div></div>
                                        <div className="text-right">
                                            <h2 className="sm:text-[2.5vw] text-[20px] leading-[1.15] font-[590] moving-gradient text-transparent mb-4">Synergy & Colaboration</h2>
                                            <p className="text-[#8363C6]">Carrying out work programs with other agencies that have new goals in developing the quality of each agency.</p>
                                        </div>
                                        <div className="grid grid-rows-subgrid row-span-3 grid-cols-subgrid col-span-3 justify-items-center content-center">
                                            <div className="rounded-full 2xl:h-[400px] 2xl:w-[400px] sm:h-[270px] sm:w-[270px] lg:w-[320px] lg:h-[320px] flex justify-center items-center row-start-1 col-start-2 relative">
                                                <h1 className="absolute 2xl:text-[100px] lg:text-[70px] sm:text-[50px] leading-[1.15] font-[590] moving-gradient text-transparent">Goals</h1>
                                                <div className="absolute w-full h-full">
                                                    <p className="text-[#8363C6]">{goalsText.split("").map((char, i) => (
                                                        <span className="absolute left-[50%] 2xl:origin-[0_200px] sm:origin-[0_135px] lg:origin-[0_160px] text-lg" style={{ transform: `rotate(${i * 11.3}deg)` }}>{char} </span>
                                                    ))}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <h2 className="sm:text-[2.5vw] text-[20px] leading-[1.15] font-[590] moving-gradient text-transparent mb-4">Performance</h2>
                                            <p className="text-[#8363C6]">Become a center of excellence for the
                                                work of Telkom University students which
                                                is ready to be launched on an
                                                international scale.</p>
                                        </div>
                                        <div></div>
                                        <div className="text-right">
                                            <h2 className="sm:text-[2.5vw] text-[20px] leading-[1.15] font-[590] moving-gradient text-transparent mb-4">Innovation</h2>
                                            <p className="text-[#8363C6]">Creating new ideas from IEEE SB Telkom University members/officers
                                                to improve the quality of human resources
                                                IEEE SB Telkom University</p>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </Reveal>
                            :
                            <Reveal>
                                <div className="flex w-full flex-col justify-center items-center pb-[60px]">
                                    <div className="mb-[20px] rounded-full h-[250px] w-[250px] flex justify-center items-center row-start-1 col-start-2 relative">
                                        <h1 className="absolute text-[45px] leading-[1.15] font-[590] moving-gradient text-transparent">Goals</h1>
                                        <div className="absolute w-full h-full">
                                            <p className="text-[#8363C6]">{goalsText.split("").map((char, i) => (
                                                <span className="absolute left-[50%] origin-[0_125px] lg:origin-[0_160px] " style={{ transform: `rotate(${i * 11.3}deg)` }}>{char} </span>
                                            ))}</p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-[60px]">
                                        <h2 className="text-[25px] leading-[1.15] font-[590] moving-gradient text-transparent mb-4">Harmonization</h2>
                                        <p className="text-[#8363C6]">Creating good relationships between IEEE Telkom University Student Branch officers while undergoing the specified work program.</p>
                                    </div>
                                    <div className="text-center mt-[60px]">
                                        <h2 className="text-[25px] leading-[1.15] font-[590] moving-gradient text-transparent mb-4">Synergy & Colaboration</h2>
                                        <p className="text-[#8363C6]">Carrying out work programs with other agencies that have new goals in developing the quality of each agency.</p>
                                    </div>
                                    <div className="text-center mt-[60px]">
                                        <h2 className="text-[25px] leading-[1.15] font-[590] moving-gradient text-transparent mb-4">Performance</h2>
                                        <p className="text-[#8363C6]">Become a center of excellence for the
                                            work of Telkom University students which
                                            is ready to be launched on an
                                            international scale.</p>
                                    </div>
                                    <div className="text-center mt-[60px]">
                                        <h2 className="text-[25px] leading-[1.15] font-[590] moving-gradient text-transparent mb-4">Innovation</h2>
                                        <p className="text-[#8363C6]">Creating new ideas from IEEE SB Telkom University members/officers
                                            to improve the quality of human resources
                                            IEEE SB Telkom University</p>
                                    </div>
                                </div>
                            </Reveal>
                        }

                    </div>
                </section>
            </div>
            <section className="bg-black 2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px] h-min-[100vh]">
                <div className="2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                    <div className="flex w-full flex-col items-center">
                        <Reveal>
                            <h2 className="text-center 2xl:pb-[7.5vw] sm:pb-[calc(60px+60*(100vw-576px)/1024)] pb-[60px] sm:text-[6.65vw] text-[40px] leading-[1.15] font-[590] moving-gradient text-transparent">Our Directors team</h2>
                        </Reveal>
                        <div className="flex lg:mb-28 mb-10">
                            <Reveal width="fit">
                                <OfficerCard position="Chairman" name="Iki Tayubi" image={FotoIkiTayubi} />
                            </Reveal>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-evenly lg:w-full lg:mb-28 mb-10 gap-10">
                            <Reveal width="fit">
                                <OfficerCard position="Secretary" name="Husna Firyal Az-Zahra" image={FotoHusna} />
                            </Reveal>
                            <Reveal width="fit">
                                <OfficerCard position="Vice Chairwoman 1" name="Nadya Ainun Avrilya" image={FotoNadya} />
                            </Reveal>
                            <Reveal width="fit">
                                <OfficerCard position="Vice Chairman 2" name="Muhammad Daffa Fadillah" image={FotoDaffaFadillah} />
                            </Reveal>
                            <Reveal width="fit">
                                <OfficerCard position="Treasure" name="Asry Hafifah Hildanurizka br Pinem" image={FotoAsry} />
                            </Reveal>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-evenly lg:w-full lg:mb-28 mb-10 gap-10">
                            <Reveal width="fit">
                                <OfficerCard position="Director of Research" name="Rizq Arthur Mahesatama" image={FotoArthur} />
                            </Reveal>
                            <Reveal width="fit">
                                <OfficerCard position="Director of Edu" name="Muhammad Kaysan Hanif" image={FotoKaysan} />
                            </Reveal>
                            <Reveal width="fit">
                                <OfficerCard position="Director of PR" name="Nazer Muhammad Noor" image={FotoNazer} />
                            </Reveal>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-evenly lg:w-full lg:gap-0 gap-10">
                            <Reveal width="fit">
                                <OfficerCard position="Director of HR" name="Muhammad Fahrayhan Yudhi" image={FotoFahrayhan} />
                            </Reveal>
                            <Reveal width="fit">
                                <OfficerCard position="Director of CI" name="Arfiannisa Miftah Rakhmaniah" image={FotoCicang} />
                            </Reveal>
                            <Reveal width="fit">
                                <OfficerCard position="Director of IT" name="Muhammad Rifki Hidayatullah" image={FotoRifki} />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <section className="purple bg-black 2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
                <div className="pb-[120px]">
                    <DepartmentTrackElement index={0} num={1} dept="Research" desc={["Focusing on reasoning which provides a forum for scientific development in the field of research and facilitates the potential achievements of all IEEE SB Telkom University officers.",
                        "Apart from that, there is Outlook Project Management which is tasked with supervising each research project and reporting the results of research project achievements on a short or long term scale."]} />
                    <DepartmentTrackElement index={1} num={2} dept="Education" desc={["Education functions as a forum for the Telkom University academic community and the general public to improve soft skills or hard skills in certain fields.",
                        "Campaign by answering issues through the latest technology, and organize events or discussion forums that are in accordance with the latest technological trends."]} />
                    <DepartmentTrackElement index={2} num={3} dept="Public Relation" desc={["Public Relations is tasked with building and establishing relationships with external branch parties, between SB Telkom University and other SBs, the University, Telkom University students, other external agencies, and the general public.",
                        "This aims to create good relationships and be able to support the running of activities or events."]} />
                    <DepartmentTrackElement index={3} num={4} dept="Human Resource" desc={["Human Resources plays an active role in developing and coaching in order to optimize Human Resources at IEEE SB Telkom University officers who have character and can compete globally.",
                        "As well as supervising and evaluating work performance carried out by the Student Branch.", "Apart from that, Human Resources is also responsible for the IEEE membership database which is managed by IEEE SB Telkom University."]} />
                    <DepartmentTrackElement index={4} num={5} dept="Creative & information" desc={["Creative and Information plays an active role in disseminating information related to IEEE and Telkom University Student Branch.",
                        "This information is also designed with creative and innovative content.", "Not only limited to information, Creative and Information is also a means of branding IEEE SB Telkom University through various media."]} />
                    <DepartmentTrackElement index={5} num={6} dept="Information & Technology" desc={["Play an active role in disseminating information related to IEEE and Telkom University Student Branch on the website.", "And make the website more informative and communicative so that external parties can view IEEE's portfolio of activities in a more professional manner."]} />
                </div>
            </section>
            <Footer />
        </div>
    )
}