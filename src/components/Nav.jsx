import  { useState } from "react";
import Vector from "../images/Vector.png";
import world_2 from "../images/world_2.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [Nav, openNav] = useState(false);
  return (
    <div className="header ">
      {/* left site */}
      <div className="w-[674px] h-[40px] flex  gap-[26px] ">
        <div className="w-[97px] h-[40px]  ">
          <p className="font-semibold text-[32px]  leading-10 text-[#141414] ">
            HireGo
          </p>
        </div>
        {/* nav */}
        <div className="w-[651px] h-[40px] hidden lg:flex gap-[8px]  ">
          <div className="navBox ">
            <div className=" ">
              <p className="navItems ">products</p>
            </div>
            <div className="navItemArr">
              <img src={Vector} className=" " />
            </div>
          </div>
          <div className="navBox  ">
            <div className=" ">
              <p className="navItems ">solutions</p>
            </div>
            <div className="navItemArr ">
              <img src={Vector} className=" " />
            </div>
          </div>
          <div className="navBox ">
            <div className="">
              <p className="navItems flex gap-1 ">
                why <span>hireGo</span>
              </p>
            </div>
            <div className="navItemArr ">
              <img src={Vector} className=" " />
            </div>
          </div>
          <div className=" navBox  ">
            <div className=" ">
              <p className="navItems ">pricing</p>
            </div>
          </div>
          <div className="navBox  ">
            <div className=" ">
              <p className="navItems">resources</p>
            </div>
            <div className="navItemArr">
              <img src={Vector} className="font-semibold " />
            </div>
          </div>
        </div>
      </div>

      {/* right site */}

      <div className="w-[420px] h-[40px] hidden  lg:flex gap-[8px] ">
        <button className="navButton flex items-center justify-center gap-[8px] capitalize ">
          <img src={world_2} />
          <p className="font-medium text-[16px]">english</p>
          <img src={Vector} />
        </button>
        <button className="navButton">Log in</button>
        <button className="navButton bg-[#000000D9] text-white capitalize  ">
          Request a demo
        </button>
      </div>

      {/* mobile view */}
      <div onClick={() => openNav(!Nav)} className="cursor-default md:hidden">
        {Nav ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>
      {/* nav */}
      <div
        className={`flex flex-col items-center  md:hidden font-bold absolute top-[64px] ml-[-1000px] w-full h-screen  bg-white border-t z-50  ${
          Nav ? "ml-[-24px] duration-500" : " duration-500"
        }`}
      >
        <div className="w-full flex flex-col items-center mt-3  gap-[12px]  ">
          <div className="mNavbox">
            <div className=" ">
              <p className="m_navItems">products</p>
            </div>
            <div className="navItemArr">
              <img src={Vector} className=" " />
            </div>
          </div>
          <div className="mNavbox  ">
            <div>
              <p className="m_navItems">solutions</p>
            </div>
            <div className="navItemArr">
              <img src={Vector} className=" " />
            </div>
          </div>
          <div className="mNavbox ">
            <div>
              <p className="m_navItems flex gap-1 ">
                why <span>hireGo</span>{" "}
              </p>
            </div>
            <div className="navItemArr ">
              <img src={Vector} className=" " />
            </div>
          </div>
          <div className="mNavbox  ">
            <div>
              <p className="m_navItems">pricing</p>
            </div>
          </div>
          <div className="mNavbox  ">
            <div>
              <p className="m_navItems">resources</p>
            </div>
            <div className="navItemArr ">
              <img src={Vector} className="font-semibold " />
            </div>
          </div>
        </div>

        {/* login */}
        <div className="w-full h-[40px] flex justify-between px-[24px] mt-[250px] ">
          <button className="navButton flex items-center justify-center gap-[8px] capitalize ">
            <img src={world_2} />
            <p className="font-medium text-[16px]">english</p>
            <img src={Vector} />
          </button>
          <button className="navButton ">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
