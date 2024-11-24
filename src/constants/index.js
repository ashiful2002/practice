
import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import { GrRestroomWomen } from "react-icons/gr";
import { FaChildren } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { GoProject } from "react-icons/go";
 

export  const IMPACT = [
  {
    id: '0',
    title: "10+",
    icon: <GoProject />,
    desc: "project"
  },
  {
    id: '1',
    title: "example",
    icon: <FaChildren />,
    desc: "some description"
  },
  {
    id: '2',
    title: "example",
    icon: <GrRestroomWomen />,
    desc: "some description"
  },
  {
    id: '3',
    title: "example",
    icon: <FaHome />,
    desc: "some description"
  },
  {
    id: '4',
    title: "example",
    icon: <MdOutlineSecurity />,
    desc: "some description"
  },
  {
    id: '5',
    title: "example",
    icon: <FaMobile />,
    desc: "some description"
  },
]
export const NAVIGATION = [
  {
    id: "0",
    title: "Home",
    url: "#home"
  },
  {
    id: "1",
    title: "Impact",
    url: "#impact"
  },
  {
    id: "2",
    title: "Mission-Vision",
    url: "#mission_vision"
  },
  {
    id: "3",
    title: "Focusing area",
    url: "#focusing area"
  },
  {
    id: "4",
    title: "Blog",
    url: "#blog"
  },
]
export const HERO_CONTENT = `Empowering women and female students to navigate the digital world securely. At Hello She, we are dedicated to creating awareness and providing resources on Cyber Security to ensure that women of all ages are protected online. Join us in our mission to build a safer digital space for everyone.`;

export const ABOUT_TEXT = `Hello She is a non-profit organization dedicated to raising awareness about Cyber Security among women and female students. We believe that in today’s digital age, everyone deserves to feel safe online, and our goal is to provide the knowledge and tools necessary to achieve that.`;
export const OUR_MISSION = `To educate, empower, and support women and female students in understanding and practicing Cyber Security, enabling them to confidently protect themselves and their digital assets.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

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
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Dhaka, Bangladesh",
  phoneNo: "+880 1893-791746",
  email: "contact@helloshe.org",
};
