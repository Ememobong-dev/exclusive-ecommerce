import Image from "next/image";
import React from "react";
import signUpImg from "../../../public/assets/images/signUpImg.svg";
import googleIcon from "../../../public/assets/icons/googleIcon.svg";
import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Link from "next/link";

const SignUp = () => {
  return (
    <div>
      <div className=" my-10">
        <div className="flex gap-28 items-center ">
          <span className="  ">
            <Image
              src={signUpImg}
              className="w-full object-cover"
              alt="img"
            />
          </span>
          <div className="flex flex-col gap-9 p-5 w-2/5 ">
            <div>
              <h3 className="text-3xl leading-loose font-bold">Create an account</h3>
              <p className="text-base">Enter your details below</p>
            </div>

            <div>
              <AuthInput placeholder="Name" />
              <AuthInput placeholder="Email or Phone Number" />
              <AuthInput placeholder="Password" />
            </div>
            <Button variant="red">
              <p>Create Account</p>
            </Button>
            <Button variant="white" icon imgSrc={googleIcon} >
              <p className="text-black">Sign up with Google</p>
            </Button>
            <div className="flex items-center justify-center gap-9">
              <p>Already have an account?</p>
              <Link href={"/sign-in"} >
              <p className="underline">Log in</p>
              </Link>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
