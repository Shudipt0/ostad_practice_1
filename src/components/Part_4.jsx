import React from "react";
import image11 from "../images/image-11.png";
import arrRight from '../images/Arrow_right.png';


function Part_4() {
  return (
    <div className="w-full lg:h-[960px] bg-white flex flex-col items-center justify-center gap-[48px] py-14 lg:py-0 ">
      {/* text */}
      <div className=" text-center text-[32px] lg:text-[56px] font-semibold text-black/85 ">
        <h1 className="leading-tight">
          Get started with HireGo <br />
          in three easy steps.
        </h1>
      </div>
      {/* box */}
      <div className="w-[90%] lg:w-[1200px] h-fit lg:h-[592px] flex flex-col lg:flex-row justify-between  gap-4 lg:gap-0 ">
        {/* left */}
        <div className="w-full lg:w-[592px] h-full ">
          <img src={image11} />
        </div>
        {/* right */}

        <div className="w-full  lg:w-[592px] h-full flex flex-col justify-between gap-4 lg:gap-0 ">
          {/* box-1 */}
          <div className="box h-[164px] ">
            <div className="boxIndex ">1</div>
            <div className="boxText_main  ">
              <h3 className="boxText_1 ">Book a call</h3>
              <p className="boxText_2 ">
                Book a call with our global workforce consultants. We’ll set you
                up with a free account ready to suit your team’s needs.
              </p>
            </div>
          </div>
          {/* box-2 */}
          <div className=" box  h-[164px]">
            <div className="boxIndex ">2</div>
            <div className="boxText_main ">
              <h3 className="boxText_1 ">Add your people</h3>
              <p className="boxText_2 ">
                From new hires to your existing workforce, onboard effortlessly
                with our self-serve platform.
              </p>
            </div>
          </div>
          {/* box-3 */}
          <div className=" box h-[220px]">
            <div className="boxIndex">3</div>
            <div className="boxText_main ">
              <h3 className="boxText_1 ">Dedicated onboarding</h3>
              <p className="boxText_2 ">
                From navigating local laws to support for your team members, our
                dedicated team will help you get set up seamlessly.
              </p>

              <button className="  rounded-full py-1 px-4 bg-white border border-black/35 text-black/85 flex items-center justify-center gap-2 mt-4 ">
                Start Now
                <span>
                  <img src={arrRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part_4;
