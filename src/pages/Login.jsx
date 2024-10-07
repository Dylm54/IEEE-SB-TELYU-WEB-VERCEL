import React from "react";
import logo from "../assets/IEEE-Black.png";
import { Button } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import { MdLock, MdOutlineKeyboardControlKey } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [kodeAdmin, setKodeAdmin] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const handleKey = (e) => {
    if (e.key === 'Enter') {
        handleSubmit()
    }
  }

  const handleSubmit = async () => {      
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login-admin`, {
            kode: kodeAdmin,
        })
        const token = response.data.token
        const date = new Date()
        date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000)
        const expires = 'expires=' + date.toUTCString()
        document.cookie = `token=${token}; ${expires}`
        window.location.href = '#/DashboardNews'
    } catch (err) {
        setErrorMessage("Admin code is incorrect!")
    }
}


  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      <div className="effect">
        <div className="flex justify-start -ml-[400px] md:-ml-[400px]">
          <div className="login-purple-effect z-0"></div>
        </div>
        <div className="flex justify-end -mr-[400px] md:-mr-[400px]">
          <div className="login-purple-effect z-0"></div>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen z-10 px-[30px]">
        <div className="card-login bg-[#C0A2FE] bg-opacity-15 flex flex-col w-[320px] md:w-[500px] items-center gap-5 px-[30px] py-[30px] rounded-2xl md:rounded-[40px]">
          <img src={logo} alt="" />
          <div className="login-input w-full">
            <div className="kode-input flex items-center border-b-1 border-b-[#6B0DE3] py-2 gap-2">
              <FaUser className="text-[22px] text-[#6B0DE3]" />
              <input type="password" placeholder="Kode admin" onChange={e => setKodeAdmin(e.target.value)} onKeyDown={handleKey} className="py-[5px] bg-transparent w-full focus:outline-none text-[#6B0DE3]" />
            </div>
            {errorMessage && 
              <div className="text-red-600 pt-2 text-sm">{errorMessage}</div>
            }
            <Button radius="full" onClick={handleSubmit} className="w-full bg-[#6B0DE3] text-white mt-[20px] text-[16px] md:text-[20px] font-semibold">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
