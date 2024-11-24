import { CONTACT } from "../constants";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import PageTitle from "./Title/Title";

const Contact = () => {
  return (
    <>
      <>
        <div className="border" id="contact">
          <div className="mb-6">
            <PageTitle heading="contact us" className="p-1"/>
          </div>
          <div className="">
            <div
              className="my-2"
            >
              <a
                href="https://maps.app.goo.gl/E4SJTiwA5gJAJchz9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 "
              >
                <p>
                  <FaLocationDot className="inline primary_color " />
                </p>
                <p className="hover:primary_hover">{CONTACT.address}</p>
              </a>
            </div>
            <div className="my-2">
              <a
                href={`tel:${CONTACT.phoneNo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 "
              >
                <p>
                  <FaPhone className="inline primary_color " />
                </p>
                <p className="hover:primary_hover">{CONTACT.phoneNo}</p>
              </a>
            </div>
            <div className="my-2">
              <a
                href="mailto:ahantor602@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2  hover:primary_hover"
              >
                <p>
                  <FaEnvelope className="inline primary_color" />
                </p>
                <p className="border-b  border-violet-500">
                  info@helloshe.org
                </p>
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Contact;

// <div className="border-b border-neutral-900 " id="contact">
//         <PageTitle heading="Contact with jui apu" />

//         <div className="flex items-center justify-center flex-wrap">
//           <div className="hidden w-full lg:w-1/2  justify-center  bg-amber-300 rounded-lg lg:p-8">
//             {/* here will be added a form message */}
//           </div>
//           <div className="w-full lg:w-1/2 mt-10 text-center tracking-tighter">
//             <div className="all-centered gap-2">
//               {" "}
//               <FaLocationDot />
//               <p className="my-4 "> {CONTACT.address}</p>
//             </div>
//             <div className="all-centered gap-2">
//               {" "}
//               <FaPhone />{" "}
//               <a href={`tel:${CONTACT.phoneNo}`} className="my-4">
//                 {" "}
//                 {CONTACT.phoneNo}
//               </a>
//             </div>
//             <div className="all-centered gap-2">
//               <FaEnvelope />
//               <a
//                 href="mailto:ahantor602@gmail.com"
//                 target="_blank"
//                 className="underline"
//               >
//                 {CONTACT.email}
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border border-b"></div>
//       </div>
