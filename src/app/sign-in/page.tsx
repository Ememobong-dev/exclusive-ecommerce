import Image from "next/image";
import React from "react";
import signUpImg from "../../../public/assets/images/signUpImg.svg";
import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const SignIn = () => {
  return (
    <div>
      <div className=" my-10">
        <div className="flex gap-28 items-center ">
          <span className="  ">
            <Image src={signUpImg} className="w-full object-cover" alt="img" />
          </span>
          <div className="flex flex-col gap-9 p-5 w-2/5 ">
            <div>
              <h3 className="text-3xl leading-loose font-bold">Log in to Exclusive</h3>
              <p className="text-base">Enter your details below</p>
            </div>

            <div>
              <AuthInput placeholder="Email or Phone Number" />
              <AuthInput placeholder="Password" />
            </div>

            <div className="flex justify-between items-center gap-9">
              <Button>
                <p>Log in</p>
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
