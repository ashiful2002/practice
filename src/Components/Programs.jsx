import { div } from "framer-motion/client";
import { PROGRAMS } from "../constants";
import PageTitle from "./Title/Title";

const Projects = () => {
  return (
    <>
      <div id="programs">
        <div>
          <PageTitle heading="Programes we have done" />
        </div>
        <div className="p-2 my-4 ">
          {PROGRAMS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-10 justify-center md:flex-row  border p-4 rounded-xl shadow  shadow-teal-700"
            >
              <div>
                <h5 className="h5">{item.title}</h5>
              </div>
              <div>
                <img
                  src={item.image}
                  className="w-full rounded-xl"
                  alt={item.title}
                />
              </div>
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    // <div className="border-b border-neutral-900 pb-4" id="programs">
    //   <h1 className="section-heading gradient-heading">Programs</h1>
    //   <div>
    //     {PROGRAMS.map((program, index) => {
    //       return (
    //         <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
    //           <div className="w-full lg:w-1/4 flex  justify-center">
    //             <img
    //               src={program.image}
    //               height={250}
    //               width={250}
    //               className="mb-6 rounded"
    //               alt={program.title}
    //             />
    //           </div>
    //           <div className="w-full max-w-xl lg:w-3/4">
    //             <h6 className="mb-2 font-semibold ">{program.title}</h6>
    //             <p className="mb-4 text-neutral-400">{program.description}</p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Projects;
