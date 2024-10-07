import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Reveal from "../components/RevealAnimation";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from 'sonner'

function Footer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        if (!name) {
            return toast.error("Please input your name")
        }

        if (!email) {
            return toast.error("Please input your email")
        }

        if (email) {
            if (!validateEmail(email)) {
                return toast.error("Please input the proper email")
            }
        }

        if (!subject) {
            return toast.error("Please input the subject")
        }

        if (!message) {
            return toast.error("Please input your message")
        }

        e.preventDefault()

        const serviceId = import.meta.env.VITE_SERVICE_ID
        const templateId = import.meta.env.VITE_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_PUBLIC_KEY

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                subject: subject,
                to_name: 'IEEE SB Telkom University',
                message: message,
            }
        }

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            console.log(res.data)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            toast.success('Message has been sent')
        } catch (error) {
            console.log(error)
            toast.error({ error })
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    return (
        <div className="flex w-full">
            <Toaster richColors />
            <div className="w-full py-[60px] sm:py-[calc(60px+60*(100vw-576px)/1024)] 2xl:py-[120px] flex">
                <div className="flex px-[20px] sm:px-[calc(20px+70*(100vw-576px)/1024)] 2xl:px-[90px] flex-col md:flex-row justify-between w-full gap-[2.5rem]">

                    <div className="flex flex-col justify-between gap-8">
                        <div>
                            <Reveal>
                                <h1 className="text-[24px] md:text-[calc(24px+16*(100vw-576px)/1024)] 2xl:text-[2.778vw] font-[590] leading-[1.4] max-w-[690px] 2xl:max-w-[47.917vw]">Reach us, If you want to join or know more about IEEE Telkom University Student Branch.</h1>
                            </Reveal>
                        </div>
                        <Reveal>
                            <div className="flex flex-col gap-4 2xl:gap-5">
                                <p className="text-sm lg:text-base 2xl:text-xl">Where to find us</p>
                                <div className="font-[590] text-sm lg:text-xl 2xl:text-3xl">Jl. Telekomunikasi,</div>
                                <div className="font-[590] text-sm lg:text-xl 2xl:text-3xl">Jl. Terusan Buah Batu No.01,</div>
                                <div className="font-[590] text-sm lg:text-xl 2xl:text-3xl">Sukapura, Dayeuhkolot, Bandung, Jawa Barat 40257</div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="text-[#71777F] hidden md:block">© 2024 IEEE SB Telkom University · All rights reserved.</div>
                        </Reveal>
                    </div>
                    <div className="flex flex-col w-full md:w-[40%] md:max-w-[27.938vw] md:min-w-[40%] lg:min-w-[400px] gap-[2.5rem]">
                        <Reveal>
                            <div className="flex justify-center items-center bg-black pt-[1rem] pb-[1.2rem] px-[1.5rem] lg:py-6 lg:px-10 rounded-[16px] lg:rounded-[32px]">
                                <div className="flex flex-col lg:flex-row justify-between gap-4 w-full items-center">
                                    <div className="text-white text-center text-lg lg:text-xl">Follow us</div>
                                    <div className="flex flex-row gap-7 justify-center md:w-auto w-[60%] items-center">
                                        <a href="https://www.instagram.com/ieeetelkomuniv/" target="_blank">
                                            <FaInstagram fill="white" className="h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/ieee-telkom-university-student-branch/mycompany/" target="_blank">
                                            <FaLinkedin fill="white" className="h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]" />
                                        </a>
                                        <a href="https://www.tiktok.com/@ieeetelkomuniv" target="_blank">
                                            <FaTiktok fill="white" className="h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                        <div className="flex flex-col items-center">
                            <Reveal>
                                <div className="font-[590] lg:text-3xl 2xl:text-4xl mb-6 text-center text-[22px]">Send us a message</div>
                            </Reveal>

                            <div className="flex w-full gap-4 2xl:gap-5 flex-col items-center justify-center">

                                <Reveal>
                                    <Input isRequired type="text" value={name} className="input-footer" onChange={(e) => setName(e.target.value)} size={window.innerWidth >= 1024 ? "lg" : "md"} radius="full" variant="bordered" placeholder="Your name" />
                                </Reveal>
                                <Reveal>
                                    <Input isRequired type="email" value={email} className="input-footer" onChange={(e) => setEmail(e.target.value)} size={window.innerWidth >= 1024 ? "lg" : "md"} radius="full" variant="bordered" placeholder="Your email" />
                                </Reveal>
                                <Reveal>
                                    <Input isRequired type="text" value={subject} className="input-footer" onChange={(e) => setSubject(e.target.value)} size={window.innerWidth >= 1024 ? "lg" : "md"} radius="full" variant="bordered" placeholder="Subject" />
                                </Reveal>
                                <Reveal>
                                    <Textarea
                                        isRequired
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        variant="bordered"
                                        placeholder="Enter your message"
                                        disableAnimation
                                        disableAutosize
                                        radius="full"
                                        size={window.innerWidth >= 1024 ? "lg" : "md"}
                                        classNames={{
                                            input: "resize-y min-h-[120px]",
                                        }}
                                    />
                                </Reveal>
                                <Button onClick={handleSubmit} type="submit" className="md:mt-5 w-[80%] h-[40px] md:h-[calc(40px+32*(100vw-576px)/1024)] 2xl:h-[72px] px-[calc(24px+24*(100vw-576px)/1024)] text-white text-[1rem] md:text-[calc(16px+8*(100vw-576px)/1024)] font-medium bg-[#6B0DE3]" radius="full">
                                    Submit
                                </Button>

                                <div className="text-[#71777F] block md:hidden text-xs mt-10">© 2024 IEEE SB Telkom University · All rights reserved.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
