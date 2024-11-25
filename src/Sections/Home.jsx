import React from "react";
import PageTitle from "../Components/Title/Title";
import image from "../assets/HeroImage.jpg";
import { HERO_CONTENT } from "../constants";

const Home = () => {
  return (
    <div className="" id="home">
      <div>
        {/* <PageTitle heading="Home" /> */}
        <div >
        <h1 className="p-16 text-3xl font-thin tracking-tight text-left lg:mt-16 lg:text-4xl block">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-5xl lg:text-8xl text-transparent font-semibold tracking-tighter font-serif block">
                Hello SHE
              </span>
            </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="xl:w-1/2 my-4">
            <img src={image} alt="home item" />
          </div>
          <div className="xl:w-1/2 my-4">
            <p className="lg:text-3xl text-lg font-serif">{HERO_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
