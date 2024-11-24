import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { Divider } from "antd";
import PageTitle from "./Title/Title";

const About = () => {
  return (
    <div className=" pb-4" id="about">
    <div>
 < PageTitle heading="about"/>
    </div>
      <div className="flex flex-wrap my-4">
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <img src={aboutImage} className="rounded-2xl" alt="About Image" />
        </div>
        <div className="w-full lg:w-1/2 flex justify-start items-center">
          <div className="flex justify-center ">
            <p className="section-para lg:text-3xl">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>

      <Divider className="bg-neutral-900" variant="dotted"></Divider>
    </div>
  );
};

export default About;
