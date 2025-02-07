"use client";

import Image from "next/image";
import React, { useState } from "react";
import signUpImg from "../../../public/assets/images/signUpImg.svg";
import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const SignIn = () => {
  const [buttonLoading, setButtonLoading] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handeLoginBtn = async () => {
    const data = {
      username: username,
      password: password,
    };

    try {
      setButtonLoading(true)
      const res = await axios.post("https://fakestoreapi.com/auth/login", data);
      if(res.status === 200) {
        const token = res.data.token;

        const decodedToken = jwtDecode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(decodedToken)); 
        router.push('/')
      }
    } catch (err) {
      console.log(err);
    } finally {
      setButtonLoading(false)
    }
  };

  return (
    <div>
      <div className=" my-10">
        <div className="flex gap-28 items-center ">
          <span className="  ">
            <Image src={signUpImg} className="w-full object-cover" alt="img" />
          </span>
          <div className="flex flex-col gap-9 p-5 w-2/5 ">
            <div>
              <h3 className="text-3xl leading-loose font-bold">
                Log in to Exclusive
              </h3>
              <p className="text-base">Enter your details below</p>
            </div>

            <div>
              <AuthInput
                inputOnChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                inputValue={username}
              />
              <AuthInput
                inputOnChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                inputValue={password}
              />
            </div>

            <div className="flex justify-between items-center gap-9">
              <Button isLoading={buttonLoading} variant="red" handleOnClick={handeLoginBtn}>
                {
                  buttonLoading ?  <Spin indicator={<LoadingOutlined style={{ color: "white" }} spin />} />  : <p>Log in</p>
                }
                
              </Button>

              <p className="text-red-secondary-two">Forget password?</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
