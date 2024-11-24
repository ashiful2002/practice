import React from "react";
import { HERO_CONTENT } from "../constants/index";
import HeroImage from "../assets/HeroImage.jpg";
import { Divider } from "antd";
import PageTitle from "./Title/Title";

const Hero = () => {
  return (
    <div className="pb-24 lg:mb-35 mt-4 h-[80vh] mx-auto" id="#about">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="p-16 text-3xl font-thin tracking-tight text-left lg:mt-16 lg:text-4xl block">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-5xl lg:text-8xl text-transparent font-semibold tracking-tighter font-serif block">
                Hello SHE
              </span>
            </h1>
          < PageTitle heading="a non profit organization"/>

            <p className="section-para">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-3xl" src={HeroImage} alt="Profile image" />
          </div>
        </div>
      </div>
      <Divider className="bg-neutral-900" variant="dotted"></Divider>
    </div>
  );
};

export default Hero;
