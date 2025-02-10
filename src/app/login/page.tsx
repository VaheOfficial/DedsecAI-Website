'use client';

import ButtonWithIcon from "@/components/buttons/button";
import { Icon } from "@/components/svg/svg.container";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
    const [isEmailLogin, setIsEmailLogin] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [password, setPassword] = useState('');
    const loginWithGoogle = () => {
      console.log("Logging in with Google");
    };
    const loginWithGitHub = () => {
      console.log("Logging in with GitHub");
    };
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-tr from-[#2E073F] to-[#09122C]">
        <div className="flex flex-row w-[40%] h-[60%] bg-[#222831] overflow-hidden">
        <Image src="/assets/backgrounds/login/DedsecLogin.png" alt="login background" width={500} height={600} style={{width: '50%', height: '100%', objectFit: 'cover'}}/> 
          <div className="flex flex-col w-[50%] h-[100%] justify-top gap-16 items-center">
            <div className="flex w-36 h-36 rounded-full bg-[#31363F] justify-center items-center mt-[20px] relative overflow-visible"/>
            <Icon icon="logo" height={200} width={200} className="absolute"/>
            <div className="flex flex-col items-center gap-4 w-full">
              {isEmailLogin ? (
                <>
                    <div className="flex flex-col gap-4 w-full items-center">
                    <input type="email" 
                      placeholder="Email"
                      className="w-[70%] bg-[#070F2B] text-white-white hover:bg-[#0D1A4A] gap-2 px-4 py-2 rounded-full font-tempesta_five text-nowrap"
                     />
                    <input type="password" 
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                      const newPassword = e.target.value;
                      setPassword(newPassword);
                      const password = e.target.value;
                      if (password.length === 0) {
                        setPasswordValid(false);
                        return;
                      }
                      const hasLength = password.length >= 8;
                      const hasUpper = /[A-Z]/.test(password);
                      const hasLower = /[a-z]/.test(password);
                      const hasNumber = /[0-9]/.test(password);
                      const isValid = hasLength && hasUpper && hasLower && hasNumber;
                      passwordValid !== isValid && setPasswordValid(isValid);
                      }}
                      className={`w-[70%] bg-[#070F2B] text-white-white hover:bg-[#0D1A4A] gap-2 px-4 py-2 rounded-full font-tempesta_five text-nowrap ${password ? (passwordValid ? 'border border-green-500' : 'border border-red-500') : ''}`} 
                     />
                    <ButtonWithIcon text="Login In" className="w-[70%] justify-center items-center" variant="primary" height={24} width={24} onClick={() => setIsEmailLogin(true)}/>
                    <button type="button" onClick={() => setIsEmailLogin(false)} className="text-sm text-gray-400 hover:text-white">
                      Use social login instead
                    </button>
                    </div>
                </>
              ) : (
                <>
                  <ButtonWithIcon text="Login with Google" className="w-[70%] justify-center items-center" icon="google" variant="primary" height={24} width={24} onClick={loginWithGoogle}/>
                  <ButtonWithIcon text="Login with GitHub" className="w-[70%] justify-center items-center" icon="github" variant="primary" height={24} width={24} onClick={loginWithGoogle}/>
                  <div className ="flex flex-row gap-1 w-full items-center">
                  <ButtonWithIcon text="Login with email" className="w-[45%] justify-center items-center" variant="primary" height={24} width={24} onClick={() => setIsEmailLogin(true)}/>
                  <ButtonWithIcon text="Register with email" className="w-[45%] justify-center items-center" variant="primary" height={24} width={24} onClick={() => setIsEmailLogin(true)}/>
                  </div>
                  <ButtonWithIcon text="Login/Register with email" className="w-[70%] justify-center items-center" variant="primary" height={24} width={24} onClick={() => setIsEmailLogin(true)}/>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
