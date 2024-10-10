import React from "react";
import WhiteNav from "../components/WhiteNav";
import { CarouselAch } from "../components/CarouselAch";
import fotoAchievement from "../assets/FotoAchievementDaffa.png";
import Footer from "../components/Footer";
import Reveal from "../components/RevealAnimation";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from 'react-helmet-async';

function Achievement() {

  const [internationalAch, setInternationalAch] = useState()
  const [nationalAch, setNationalAch] = useState()
  const [campusAch, setCampusAch] = useState()

  const getInternationalAch = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/achievements/category/International`)
      const data = await response.data
      const reversedData = [...data].reverse()
      setInternationalAch(reversedData)
    } catch (err) {
      console.log(err)
    }
  }

  const getNationalAch = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/achievements/category/National`)
      const data = await response.data
      const reversedData = [...data].reverse()
      setNationalAch(reversedData)
    } catch (err) {
      console.log(err)
    }
  }

  const getCampusAch = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/achievements/category/Campus`)
      const data = await response.data
      const reversedData = [...data].reverse()
      setCampusAch(reversedData)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getInternationalAch()
    getNationalAch()
    getCampusAch()
  }, [internationalAch, nationalAch, campusAch])

  return (
    <div className="relative overflow-x-hidden">
      <Helmet>
        <title>Achievements - IEEE SB Telkom University</title>
        <meta name="description" content="IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale." />
        <meta property="og:title" content="Achievements - IEEE SB Telkom University" />
        <meta property="og:description" content="IEEE SB Telkom University is the official reasoning UKM organization at Telkom University, functions as an intermediary between Telkom University students and IEEE as well as developing students in organizing and involving members in research and innovation development activities on a national to international scale." />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./src/assets/IEEE_Thumbnail.jpeg" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <WhiteNav />
      {/* zero section */}
      <Reveal>
        <section className="">
          {/* Purple Effect Kanan*/}
          <div className="hidden md:flex justify-start top-[80rem] -ml-[15rem] md:-ml-[18rem]">
            <div className="colour-effect-purple"></div>
          </div>

          {/* <div className="flex mt-[150px] justify-center">
            <h1 className="text-[100px] max-sm:text-[45px] max-lg:text-[90px] font-[590] w-[900px] max-sm:w-[100%] text-center leading-[1.15]" >
              Achievements from our officers
            </h1>
          </div> */}
          <div className=" w-[100%] pt-[120px] pb-[60px] sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] sm:pb-[calc(60px+60*(100vw-576px)/1024)] 2xl:pt-[240px] 2xl:pb-[7.5vw] px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px] flex items-center justify-center flex-col max-sm:h-[90vh]">
            <div className="text-center capitalize sm:text-[6.65vw] text-[40px] text-wrap font-[590] flex items-center justify-center ">
              <div className="w-[973px] 2xl:w-[1080px] max-sm:w-auto">
                <Reveal>
                  <h1 className="mb-[16px]">Achievements from our <span className="bg-gradient-to-r from-purple-300 to-violet-900 bg-clip-text text-transparent">officers</span></h1>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* container  Achievement*/}
      {internationalAch && 
      <Reveal>
        <section>
          <div className="flex  justify-center">
            <h2 className="sm:text-[50px] text-[40px] font-[590] bg-gradient-to-r from-purple-300 to-violet-900 bg-clip-text text-transparent">
              International
            </h2>
          </div>
          <CarouselAch
            achData={internationalAch}
            className="bg-transparent"
          />
        </section>
      </Reveal> }

      {/* Purple Effect Kiri */}
      <Reveal>
        <div className="hidden md:flex justify-end top-[40px] -mr-[15rem] md:-mr-[18rem]">
          <div className="colour-effect-purple"></div>
        </div>
      </Reveal>

      {nationalAch && 
      <Reveal>
        <section>
          <div className="flex mt-[100px] max-sm:mt-[10px] justify-center">
            <h2 className="sm:text-[50px] text-[40px] font-[590] bg-gradient-to-r from-purple-300 to-violet-900 bg-clip-text text-transparent">
              National
            </h2>
          </div>
          <CarouselAch achData={nationalAch} />
        </section>
      </Reveal>}

      {campusAch &&
      <Reveal>
        <section>
          <div className="flex mt-[100px] max-sm:mt-[10px] justify-center">
            <h2 className="sm:text-[50px] text-[40px] font-[590] bg-gradient-to-r from-purple-300 to-violet-900 bg-clip-text text-transparent">
              Campus
            </h2>
          </div>
          <CarouselAch achData={campusAch} />
        </section>
      </Reveal>}

      <Footer />
    </div>
  );
}

export default Achievement;
