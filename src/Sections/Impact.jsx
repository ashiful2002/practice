import React from "react";
import { IMPACT } from "../constants";
import PageTitle from "../Components/Title/Title";

const Impact = () => {
  return (
    <div id="impact">
      <div>
        <PageTitle heading="impact Highlights" className="p-1 bg-transparent text-violet-500" />
      </div>
      <div>
        <div className="grid grid-cols-2  gap-3 my-4 p-4">
          {IMPACT.map((item) => (
            <div
              key={item.id}
              className="flex items-center flex-col shadow-md last:mx-20 last:sm:mx-auto border gap-3  w-40 h-60 rounded  justify-center"
            >
              <div className="borer rounded-full ring ring-purple-500 p-2">
                <img className="w-20 " src={item.icon} alt={item.title} />
              </div>
              <div>
                <h3 className="h1 text-center text_primary">{item.title}</h3>
                <p className="text-xl ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
