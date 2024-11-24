import React from "react";
import PageTitle from "../Components/Title/Title";

const Mission = () => {
  return (
    <div>
      <PageTitle heading="future plan" />
      <div className="flex items-center justify-around ">
        <div className="my-2">
          < PageTitle heading="mission" className="h3 px-2 py-0 bg-amber-400"/>
          <ul>
            <li>
              <a href="#">mission 1</a>
            </li>
            <li>
              <a href="#">mission 2</a>
            </li>
            <li>
              <a href="#">mission 3</a>
            </li>
          </ul>
        </div>
        <div>
        < PageTitle heading="vision" className="h3 px-2 py-0 bg-teal-400"/>
          <ul>
            <li>
              <a href="#">vission 1</a>
            </li>
            <li>
              <a href="#">vission 2</a>
            </li>
            <li>
              <a href="#">vission 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;
