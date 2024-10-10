import React, { useEffect } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import "../index.css";
import Reveal from "../components/RevealAnimation";
import WhiteNav from "../components/WhiteNav";
import imgex from "../assets/FotoOfficerIEEE.png";
import { IoArrowBack } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiCopy } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import Footer from "../components/Footer";
import { NewsContent } from "../components/NewsContentComponent";
import { TwitterShareButton, WhatsappShareButton, TelegramShareButton } from "react-share";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import { Toaster, toast } from 'sonner'
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Helmet } from 'react-helmet-async';

const DetailNews = () => {
  const { id } = useParams()
  const [newsData, setNewsData] = useState()
  const [fourNews, setFourNews] = useState()
  const { pathname } = useLocation();

  useEffect(() => {
    const getNewsFromId = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/news/${id}`)
        const data = await response.data 
        setNewsData(data)
      } catch(err) {
        console.log(err)
      }
    }
    getNewsFromId()
  }, [pathname])

  useEffect(() => {
    const getAllNews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/news`)
        let data = await response.data 
        const newsId = Number(id)
        data = data.filter(news => news.id !== newsId)
        const fourData = data.slice(0, 4)
        setFourNews(fourData)
      } catch (err) {
        console.log(err)
      }
    }
    getAllNews()
  }, [id])


  const handleCopy = () => {
    return toast.success("Copied to clipboard!")
  }



  return (
    <div className="relative overflow-x-hidden">
      <Helmet>
        <title>{newsData?.title}</title>
        <meta name="description" content={newsData?.isi_konten.blocks[0].data.text.substring(0,100) + "..."}/>
        <meta property="og:title" content={newsData?.title} />
        <meta property="og:description" content={newsData?.isi_konten.blocks[0].data.text.substring(0,100) + "..."} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={`${import.meta.env.VITE_API_URL}/uploads/${newsData?.thumbnail}`} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <WhiteNav />
      {/* <section className="mt-[100px] flex justify-center">
        <div className="header flex items-center gap-[100px] sm:gap-[200px] md:gap-[300px] lg:gap-[400px] xl:gap-[600px] md:mt-[50px]"> */}
      <section className='2xl:pt-240px sm:pt-[calc((60px+(6000vw-34560px)/1024)*2)] pt-[120px] 2xl:pb-[3.75vw] sm:pb-[calc(30px+30*(100vw-576px)/1024)] pb-[30px]'>
        <div className='2xl:max-w-[69.5vw] sm:max-w-[calc(932px+(20px+(7000vw-40320px)/1024)*2)] max-w-[972px] m-auto 2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]'>
          <div className="2xl:mb-[2rem] sm:mb-[calc(16px+16*(100vw-576px)/1024)] mb-[1rem] flex items-center justify-between">
            <a className="no-underline">
              <div className="left-side flex items-center">
                <button className="border-1 rounded-[50%] border-[#ECF1F4] p-2" onClick={() => window.location.href = "/#News/All"}>
                  <IoArrowBack className="w-5 h-5" />
                </button>
                <span className="ml-[10px] hidden md:flex">All articles</span>
              </div>
            </a>

            <div className="right-side flex items-center gap-[0.5rem]">
              <span className="mr-[0.5rem] flex">Share</span>
              <WhatsappShareButton url={window.location.href}>
                <button className="border-1 rounded-[50%] border-[#ECF1F4] p-2">
                  <FaWhatsapp className="w-5 h-5" />
                </button>
              </WhatsappShareButton>


              <TwitterShareButton url={window.location.href}>
                <button className="border-1 rounded-[50%] border-[#ECF1F4] p-2">
                  <FaXTwitter className="w-5 h-5" />
                </button>
              </TwitterShareButton>


              <CopyToClipboard text={window.location.href}>
                <button className="border-1 rounded-[50%] border-[#ECF1F4] p-2" onClick={handleCopy}>
                  <BiCopy className="w-5 h-5" />
                </button>
              </CopyToClipboard>


              <TelegramShareButton url={window.location.href}>
                <button className="border-1 rounded-[50%] border-[#ECF1F4] p-2">
                  <FiSend className="w-5 h-5" />
                </button>
              </TelegramShareButton>

            </div>
          </div>
          <Reveal>
            <h1 className="2xl:text-[3.5vw] sm:text-[calc(30px+26*(100vw-576px)/1024)] text-[30px] 2xl:mt-[48px] 2xl:mb-[48px] sm:mt-[calc(16px+32*(100vw-576px)/1024)] sm:mb-[calc(8px+24*(100vw-576px)/1024)] mt-[16px] mb-[8px] leading-[1.4] font-[590] overflow-hidden">
              {newsData?.title}
            </h1>
          </Reveal>
          <div className="2xl:gap-[1.5rem] sm:gap-[calc(8px+16*(100vw-576px)/1024)] gap-[0.5rem] flex flex-row items-center flex-wrap">
            <Reveal width="fit">
              <div className="px-[24px] font-medium inline-flex rounded-[100px] relative h-[40px] items-center justify-center overflow-hidden gap-[0.5rem] bg-[#6B0DE3] text-white">
                <span className="flex items-center overflow-hidden relative z-[2] h-full">
                  <div className="text-start relative">{newsData?.kategori}</div>
                </span>
              </div>
            </Reveal>
            <Reveal width="fit">
              <div className="leading-[1.5] text-[#71777e]">
                {newsData?.date}
                {/* <h2>15</h2>
              <h2 className="text-[12px]">th</h2>
              <h2 className="ml-[5px]">December 2004</h2> */}
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      <div className="flex justify-end top-[40px] -mr-[15rem] md:-mr-[18rem]">
        <div className="colour-effect-purple"></div>
      </div>

      <Reveal>
        <section className='2xl:pb-[3.75vw] sm:pb-[calc(24px+36*(100vw-576px)/1024)] pb-[24px]'>
          <div className='2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]'>
            <div className='aspect-[1.75176] 2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] overflow-hidden relative flex items-center'>
              <div className='2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] relative w-full bg-clip-padding h-full overflow-hidden'>
                <figure className='w-full h-full relative flex items-center'>
                  <img
                    src={`${import.meta.env.VITE_API_URL}/uploads/${newsData?.thumbnail}`}
                    alt="thumbnail"
                    className='w-full object-cover h-full overflow-clip'
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* <div>
        <Reveal>
          <section className="img-content px-[30px] flex justify-center mt-[20px] md:mt-[40px]">
            <img src={imgex} alt="" className="2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] sm:w-[800px] md:w-[1000px] lg:w-[1300px]" />
          </section>
        </Reveal>
      </div> */}

      <section className="2xl:py-[3.75vw] sm:py-[calc(24px+36*(100vw-576px)/1024)] py-[24px]">
        <div className="2xl:max-w-[69.5vw] sm:max-w-[calc(932px+(20px+(7000vw-40320px)/1024)*2)] max-w-[972px] m-auto 2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
          <Reveal>
            <div>
              {newsData?.isi_konten.blocks.map((block, i) => {
                return <div key={i}>
                  <NewsContent block={block} />
                </div>
              })}
            </div>
          </Reveal>
          <div className="2xl:h-[2vw] sm:h-[calc(16px+16*(100vw-576px)/1024)] h-[1rem]"></div>
          <div className='flex w-full flex-row gap-2 mb-[1em]'>
            <div className='lg:leading-[1.75] 2xl:text-[1.125vw] lg:text-[18px] leading-[1.5] font-[590]'>Author: </div>
            <p className='w-full outline-none lg:!leading-[1.75] 2xl:text-[1.125vw] lg:text-[18px] !leading-[1.5]'>{newsData?.nama_penulis}</p>
          </div>
          <div className="2xl:h-[2vw] sm:h-[calc(16px+16*(100vw-576px)/1024)] h-[1rem]"></div>
          <div className="flex flex-wrap items-center">
            <a href={newsData?.link} className="no-underline bg-[#6B0DE3] text-white 2xl:px-[48px] 2xl:text-[1.5rem] 2xl:h-[72px] sm:h-[calc(40px+32*(100vw-576px)/1024)] sm:px-[calc(24px+24*(100vw-576px)/1024)] sm:text-[calc(16px+8*(100vw-576px)/1024)] px-[24px] text-[1rem] h-[40px] font-medium inline-flex rounded-[100px] cursor-pointer relative items-center justify-center overflow-hidden">
              <span className="flex items-center relative z-[2] h-full">
                <div className="text-start relative">Visit Related Website</div>
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="flex justify-start top-[80rem] ml-[15rem] md:-ml-[18rem]">
        <div className="colour-effect-purple"></div>
      </div>
      {/* <Reveal>
        <section className="content px-[40px] mt-[30px] flex justify-center sm:mt-[40px]">
          <div className="w-full sm:w-[500px] md:w-[680px] lg:w-[900px]">
            <h2 className="sub-news font-[590] text-[20px] sm:text-[25px] md:text-[30px]">Engineers</h2>
            <h2 className="mt-[10px]">
              Lorem ipsum dolor sit amet consectetur. Fermentum posuere sagittis nunc est amet fames phasellus. In orci nibh risus neque. Proin odio at egestas euismod mauris aliquet id parturient. Condimentum varius leo nunc et. Nisl sit
              nec tortor metus tristique elit massa tempus. Volutpat magna commodo ullamcorper ut tempus purus a cursus. Pharetra hendrerit nisi amet ipsum. Cras a varius id massa a neque eu aenean. In morbi duis dui posuere sodales at. Vel
              quisque suspendisse natoque ullamcorper congue. Tellus eget nulla laoreet diam. Nullam volutpat pharetra pulvinar suscipit risus. Interdum tempus pretium enim ultricies cursus. Ipsum neque hac duis diam molestie. Elit euismod
              aliquet
            </h2>
            <h2 className="mt-[10px]">
              Lorem ipsum dolor sit amet consectetur. Fermentum posuere sagittis nunc est amet fames phasellus. In orci nibh risus neque. Proin odio at egestas euismod mauris aliquet id parturient. Condimentum varius leo nunc et. Nisl sit
              nec tortor metus tristique elit massa tempus. Volutpat magna commodo ullamcorper ut tempus purus a cursus. Pharetra hendrerit nisi amet ipsum. Cras a varius id massa a neque eu aenean. In morbi duis dui posuere sodales at. Vel
              quisque suspendisse natoque ullamcorper congue. Tellus eget nulla laoreet diam. Nullam volutpat pharetra pulvinar suscipit risus. Interdum tempus pretium enim ultricies cursus. Ipsum neque hac duis diam molestie. Elit euismod
              aliquet tincidunt euismod mattis massa quis. Malesuada nullam turpis elit faucibus ullamcorper quis quam et. Id vel dignissim tempor dignissim sit urna laoreet turpis ac. In egestas suscipit duis amet justo. Viverra viverra
              magna imperdiet nisl eu.
            </h2>
            <h2 className="font-[590] mt-[20px] text-[16px] md:text-[20px]">Author : Muhammad Rifki Hidayatullah </h2>
            <Button className="bg-[#5356EC] rounded-[50px] text-white mt-[40px]">Visit Website</Button>
          </div>
        </section>
      </Reveal> */}
      {/* <section className="bg-[#111111] mt-[40px]">
        <div className="py-[20px] md:py-[40px]">
          <h2 className="text-white text-center text-[20px] md:text-[30px] sm:text-center md:text-center lg:text-left lg:px-[300px]">Read more articles</h2>
          <div className="flex justify-center mt-[20px] md:mt-[40px]">
            <Reveal>
              <div className="flex flex-wrap justify-center gap-[20px] px-[30px] sm:px-[50px] lg:px-[150px]">
                <Card className="border-none rounded-[30px]">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={400}
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={400}
                  />
                  <CardFooter className="flex flex-col items-start absolute bottom-1 z-10">
                    <h2 className="text-white w-[200px] text-[20px] font-[590]">We're looking for a Back-End Developer</h2>
                    <div className="flex items-center mt-[20px]">
                      <h2 className="text-white border-1 border-white px-[15px] py-[5px] rounded-[50px] text-[12px]">Career</h2>
                      <div className="ml-[20px] flex text-white">
                        <h2>15</h2>
                        <h2 className="text-[12px]">th</h2>
                        <h2 className="ml-[5px]">December 2004</h2>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="border-none rounded-[30px]">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={400}
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={400}
                  />
                  <CardFooter className="flex flex-col items-start absolute bottom-1 z-10">
                    <h2 className="text-white w-[200px] text-[20px] font-[590]">We're looking for a Back-End Developer</h2>
                    <div className="flex items-center mt-[20px]">
                      <h2 className="text-white border-1 border-white px-[15px] py-[5px] rounded-[50px] text-[12px]">Career</h2>
                      <div className="ml-[20px] flex text-white">
                        <h2>15</h2>
                        <h2 className="text-[12px]">th</h2>
                        <h2 className="ml-[5px]">December 2004</h2>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="border-none rounded-[30px]">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={400}
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={400}
                  />
                  <CardFooter className="flex flex-col items-start absolute bottom-1 z-10">
                    <h2 className="text-white w-[200px] text-[20px] font-[590]">We're looking for a Back-End Developer</h2>
                    <div className="flex items-center mt-[20px]">
                      <h2 className="text-white border-1 border-white px-[15px] py-[5px] rounded-[50px] text-[12px]">Career</h2>
                      <div className="ml-[20px] flex text-white">
                        <h2>15</h2>
                        <h2 className="text-[12px]">th</h2>
                        <h2 className="ml-[5px]">December 2004</h2>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="border-none rounded-[30px]">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={400}
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={400}
                  />
                  <CardFooter className="flex flex-col items-start absolute bottom-1 z-10">
                    <h2 className="text-white w-[200px] text-[20px] font-[590]">We're looking for a Back-End Developer</h2>
                    <div className="flex items-center mt-[20px]">
                      <h2 className="text-white border-1 border-white px-[15px] py-[5px] rounded-[50px] text-[12px]">Career</h2>
                      <div className="ml-[20px] flex text-white">
                        <h2>15</h2>
                        <h2 className="text-[12px]">th</h2>
                        <h2 className="ml-[5px]">December 2004</h2>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </Reveal>
          </div>
          <div className="text-white flex flex-col justify-center mt-[30px] md:mt-[50px] items-center gap-6 sm:flex-row sm:justify-between sm:px-[100px] md:px-[200px] lg:px-[350px] md:mb-[30px]">
            <h2 className="text-[20px] md:text-[25px]">Read more articles</h2>
            <Button className="bg-[#5356EC] rounded-[50px] text-white">Go to News</Button>
          </div>
        </div>
      </section> */}
      <section className="bg-black 2xl:py-[7.5vw] sm:py-[calc(60px+60*(100vw-576px)/1024)] py-[60px]">
        <div className="2xl:max-w-[69.5vw] sm:max-w-[calc(932px+(20px+(7000vw-40320px)/1024)*2)] max-w-[972px] m-auto 2xl:px-[90px] sm:px-[calc(20px+70*(100vw-576px)/1024)] px-[20px]">
          <div className="lg:text-left lg:mb-[2.5rem] text-center mb-[1.5rem]">
            <h3 className="text-white 2xl:text-[2.5vw] sm:text-[calc(24px+16*(100vw-576px)/1024)] text-[24px] leading-[1.4] font-[590] overflow-hidden">Read more news</h3>
          </div>
          <div className="2xl:mb-[40px] 2xl:gap-[40px] sm:mb-[calc(20px+20*(100vw-576px)/1024)] sm:gap-[calc(20px+20*(100vw-576px)/1024)] mb-[20px] gap-[20px] grid sm:grid-cols-[1fr,1fr]">
            {fourNews?.map((data, i) => (
              <div key={i} className="h-full text-white 2xl:rounded-[32px] min-[1152px]:aspect-[0.96] min-[1025px]:aspect-[1.16] sm:aspect-[1.16] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] overflow-hidden !p-[0] relative aspect-[1] rounded-[16px] w-full">
                <a href={`#/DetailNews/${data.id}`} className="2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] absolute w-full h-full left-[0] top-[0] cursor-pointer z-[3] no-underline"></a>
                <div className="2xl:p-[2.5vw] sm:p-[calc(24px+16*(100vw-576px)/1024)] p-[24px] z-[2] h-full relative flex flex-col justify-between gap-[24px] text-white">
                  <div className="flex flex-row gap-[24px] justify-between">
                    <div></div>
                    <div></div>
                  </div>
                  <div className="2xl:gap-[1rem] sm:gap-[calc(8px+8*(100vw-576px)/1024)] gap-[0.5rem] flex flex-col">
                    <div className="2xl:max-w-[52.5vw] max-w-[840px]">
                      <div className="2xl:text-[2vw] sm:text-[calc(24px+8*(100vw-576px)/1024)] text-[24px] leading-[1.4] font-[590] overflow-hidden text-white">{data.title}</div>
                    </div>
                    <div className="2xl:gap-[1rem] min-[576px]:gap-[calc(8px+8*(100vw-576px)/1024)] gap-[0.5rem] flex flex-wrap items-center">
                      <div className="cursor-default backdrop-blur-[15px] px-[24px] font-medium border-[1px] border-solid border-[#71777e] inline-flex rounded-[100px] relative h-[40px] items-center justify-center overflow-hidden no-underline gap-[0.5rem] text-white">
                        <span className="flex items-center relative z-[2] h-full overflow-hidden font-medium cursor-default text-white">{data.kategori}</span>
                      </div>
                      <div className="">{data.date}</div>
                    </div>
                  </div>
                </div>
                <div className="2xl:rounded-[32px] sm:rounded-[calc(16px+16*(100vw-576px)/1024)] rounded-[16px] absolute w-full h-full top-[0] left-[0] z-[1] flex items-center justify-center overflow-hidden bgShadow">
                  <figure className="w-full h-full flex object-cover relative items-center">
                    <img src={`${import.meta.env.VITE_API_URL}/uploads/${data.thumbnail}`} alt="News thumbnail" className="w-full h-full object-cover " />
                  </figure>
                </div>
              </div>
            ))}
          </div>
          <div className="2xl:h-[4vw] min-[576px]:h-[calc(32px+32*(100vw-576px)/1024)] h-[2rem] flex relative w-full"></div>
          <div className="lg:justify-between justify-center items-center lg:flex-row lg:items-end lg:gap-[3rem] flex gap-[1rem] flex-col">
            <div className="lg:text-left text-center">
              <h3 className="text-white 2xl:text-[2.5vw] sm:text-[calc(24px+16*(100vw-576px)/1024)] text-[24px] leading-[1.4] font-[590] overflow-hidden">Read more news</h3>
            </div>
            <div className="flex flex-wrap items-center">
              <a href="#/News" className="no-underline bg-[#6B0DE3] text-white 2xl:px-[48px] 2xl:text-[1.5rem] 2xl:h-[72px] sm:h-[calc(40px+32*(100vw-576px)/1024)] sm:px-[calc(24px+24*(100vw-576px)/1024)] sm:text-[calc(16px+8*(100vw-576px)/1024)] px-[24px] text-[1rem] h-[40px] font-medium inline-flex rounded-[100px] cursor-pointer relative items-center justify-center overflow-hidden">
                <span className="flex items-center relative z-[2] h-full">
                  <div className="text-start relative">Go to News</div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DetailNews;

