import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import image4 from "../assets/projects/project-4.jpg";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

import { GrRestroomWomen } from "react-icons/gr";
import { FaChildren } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { GoProject } from "react-icons/go";

export const IMPACT = [
  {
    id: "0",
    title: "10+",
    icon: icon4,
    desc: "projects",
  },
  {
    id: "1",
    title: "6+",
    icon: icon2,
    desc: "working years",
  },
  {
    id: "2",
    title: "4+",
    icon: icon3,
    desc: "team",
  },
];
export const NAVIGATION = [
  {
    id: "0",
    title: "home",
    url: "#home",
  },
  {
    id: "001",
    title: "about",
    url: "#about",
  },

  // {
  //   id: "3",
  //   title: "Focusing area",
  //   url: "#focusing area"
  // },
  {
    id: "4",
    title: "programs",
    url: "#programs",
  },
  {
    id: "1",
    title: "Impact",
    url: "#impact",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
];
export const HERO_CONTENT = `Empowering women and female students to navigate the digital world securely. At Hello She, we are dedicated to creating awareness and providing resources on Cyber Security to ensure that women of all ages are protected online. Join us in our mission to build a safer digital space for everyone.`;

export const ABOUT_TEXT = `Hello She is a non-profit organization dedicated to raising awareness about Cyber Security among women and female students. We believe that in today’s digital age, everyone deserves to feel safe online, and our goal is to provide the knowledge and tools necessary to achieve that.`;
export const OUR_MISSION = `To educate, empower, and support women and female students in understanding and practicing Cyber Security, enabling them to confidently protect themselves and their digital assets.
`;

export const PROGRAMS = [
  {
    title: "Cyber Security Workshops",
    image: project1,
    description:
      "Interactive workshops designed to teach women and female students the basics of Cyber Security, including how to protect personal information, recognize online threats, and safely navigate social media.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Educational Resources",
    image: project2,
    description:
      "Access a wealth of resources, including articles, videos, and tutorials on various aspects of Cyber Security. Our resources are tailored to be easily understood, regardless of your technical background.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Mentorship Program",
    image: project3,
    description:
      "Connect with experienced professionals in the field of Cyber Security. Our mentorship program pairs you with experts who can provide guidance, support, and career advice.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Dhaka, Bangladesh",
  phoneNo: "+880 1893-791746",
  email: "contact@helloshe.org",
};
