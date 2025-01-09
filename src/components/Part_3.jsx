import arrRight from '../images/Arrow_right.png';
import image10 from "../images/image-10.png";
import service from "../images/service.png";
import image92 from "../images/image-9-2.png";
// import image10 from "../images/image-10.png";



function Part_3() {
  return (
    <div className="w-full h-[3400px]  lg:h-[2950px] bg-[#F5F5F5] ">
      {/* part-1 */}
      <div className="w-full h-[1900px]  lg:h-[1400px] bg-[#323232] rounded-[30px] flex flex-col items-center justify-between ">
        <div className="w-[90%]  lg:w-[1200px] h-full lg:h-[890px] flex flex-col items-center mt-[35px] lg:my-[60px]  ">
          {/* text */}
          <div className="w-full lg:w-[693px]  text-center text-white text-[32px] lg:text-[56px] font-semibold leading-tight ">
            <h1 className="">
              You can do it all.
              <br /> With Hirego.
            </h1>
          </div>
          {/* boxes */}
          <div className="w-full h-[704px] mt-[48px] flex flex-col lg:flex-row items-center  gap-[24px] ">
            <div className="w-full lg:w-[588px] h-[554px]  lg:h-full bg-white/10  rounded-[25px] flex flex-col items-center  py-6 ">
              <div className=" w-[85%] h-[136px]    ">
                <h3 className=" text-[28px] lg:text-[40px] text-white font-semibold  ">
                  Hire international talent
                </h3>
                <p className="text-[16px] lg:text-[18px] font-thin text-white/65 ">
                  Instead of setting up your own entities, experience the speed
                  of HireGO’s automated global hiring. Create compliant
                  employment agreements and set up payroll and benefits—in a
                  matter of clicks.
                </p>
              </div>
              <div className="w-[85%]">
                <button className="text-[18px] px-5 py-2  rounded-full bg-white text-black/70 flex items-center justify-center my-[40px] gap-2">
                  Hire international talent
                  <span>
                    <img src={arrRight} />
                  </span>
                </button>
              </div>
              <div className="w-[334px] lg:w-[482px] ">
                <img src={service} />
              </div>
            </div>
            {/* right */}
            <div className="  lg:w-[588px] h-full flex flex-col items-center  gap-[24px]">
              <div className="  w-full lg:w-full h-fit lg:h-[296px] bg-[#3A5C45]  rounded-[25px] flex flex-col items-center justify-center py-[30px] gap-5 ">
                <div className="w-[85%] h-fit lg:h-[136px]   ">
                  <h3 className="text-[28px]  lg:text-[40px] text-white font-semibold  ">
                    Hire contractors
                  </h3>
                  <p className="text-[16px]  lg:text-[18px] font-thin text-white/65 ">
                    Generate, edit, and sign compliant contracts in minutes and
                    access management tools to streamline paperwork, onboarding,
                    and payments.
                  </p>
                </div>
                <div className="w-[85%]">
                  <button className="text-[18px] px-5 py-2  rounded-full bg-white text-black/70 flex items-center justify-center gap-2">
                    Hire contractors{" "}
                    <span>
                      <img src={arrRight}/>
                    </span>
                  </button>
                </div>
              </div>

              <div className="w-full  lg:h-[380px] bg-[#B1D8FC]  rounded-[25px] flex flex-col items-center justify-center py-[30px] gap-5 lg:gap-y-20 ">
                <div className="w-[85%] h-fit lg:h-[136px]  ">
                  <h3 className="text-[28px] lg:text-[40px] text-black/85 font-semibold leading-tight  ">
                    Convert contractors to employees
                  </h3>
                  <p className="text-[16px] lg:text-[18px] font-thin text-black/65 ">
                    Assess global worker misclassification risks and compliantly
                    convert contractors to full-timers, all under one platform.
                  </p>
                </div>
                <div className="w-[85%]">
                  <button className="text-[18px] px-5 py-2  rounded-full bg-white text-black/70 flex items-center justify-center gap-2">
                    Convert contractors
                    <span>
                      <img src={arrRight} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* middle */}
        <div className="w-[90%] h-[50px] lg:h-[80px]">
          <div className="w-full border-t border-white/15  "></div>
        </div>

        {/* bottom */}
        <div className="flex flex-col lg:flex-row justify-between  lg:w-[1200px] h-fit lg:h-[168px] mb-12  lg:mb-20 ">
          <div>
            <h1 className="text-[64px]  lg:text-[80px] text-[#B0D9FF] font-semibold ">
              5,000+
            </h1>
            <p className="text-[18px] text-white font-normal ">
              Loved by 5,000+ Team Members
            </p>
          </div>
          <div>
            <h1 className="text-[64px]  lg:text-[80px] text-[#B0D9FF] font-semibold ">
              25,000+
            </h1>
            <p className="text-[18px] text-white font-normal ">
              Trusted by 25,000+ customers
            </p>
          </div>
          <div>
            <h1 className="text-[64px]  lg:text-[80px] text-[#B0D9FF] font-semibold ">
              48 hrs
            </h1>
            <p className="text-[18px] text-white font-normal ">
              Onboard talent in as little as 48 hours
            </p>
          </div>
        </div>
      </div>

      {/* part-2 */}
      <div className="w-full h-fit  lg:h-[1500px] flex flex-col items-center justify-center mt-10 ">
        {/* text */}
        <div className="w-full lg:w-[693px]  text-center text-black/85 text-[32px] lg:text-[56px] font-semibold leading-tight ">
          <h1>
            Take your business
            <br />
            to the next level.
          </h1>
        </div>
        {/* box */}
        <div className="w-[90%] lg:w-full  h-[1300px]  ">
          <div className="w-full h-[680px]  lg:h-[602px] flex flex-col-reverse lg:flex-row items-center justify-between my-[30px] ">
            <div className="w-full  lg:w-[592px] h-fit lg:h-[350px] py-[32px]   lg:pl-[120px] flex flex-col gap-4  ">
              <h3 className=" text-[28px]  lg:text-[40px] text-[#FD852F] font-semibold leading-tight ">
                Culture and performance.
                <br />
                It’s up and up.
              </h3>
              <p className="text-[16px]  lg:text-[18px] text-black/45 font-normal leading-tight ">
                Develop feedback loops, set KPIs and design custom performance
                reviews. Quickly build a positive performance culture for your
                business — where everyone is aiming for the same goals.
              </p>
              <button className=" text-[18px] w-[283px] h-[48px]  rounded-full bg-white border border-black/35 text-black/70 flex items-center justify-center gap-2">
                Performance Management
                <span>
                  <img src={arrRight} />
                </span>
              </button>
            </div>

            <div>
              <img
                src={image92}
                className=" lg:w-[600px] "
              />
            </div>
          </div>
          {/* down site */}
          <div className="w-full flex  justify-center  lg:mt-[48px]  ">
            <div className="w-[1200px] h-[592px] flex flex-col lg:flex-row justify-between items-center">
              <div>
                <img
                  src={image10}
                  className="w-[382px] lg:w-full  "
                />
              </div>
              <div className="w-[500px] h-[350px] p-[32px]  flex flex-col gap-4  ">
                <h3 className="text-[28px] lg:text-[40px] text-[#9149ED] font-semibold leading-tight ">
                  Its payroll software.
                  <br />
                  Just faster.
                </h3>
                <p className="text-[16px] lg:text-[18px] text-black/45 font-normal leading-tight ">
                  Save your time, pay your people with automated payroll. Enjoy
                  the benefits of Real Time Information (RTI) and take care of
                  workforce planning - all in one simple place.
                </p>
                <button className="w-[203px] h-[48px]  rounded-full bg-white border border-black/35 text-black/85 flex items-center justify-center gap-2">
                  Payroll Features
                  <span>
                    <img src={arrRight} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part_3;
