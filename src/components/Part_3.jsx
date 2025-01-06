import React from "react";

function Part_3() {
  return (
    <div className="w-full h-[3440px]  lg:h-[3026px] bg-[#F5F5F5] ">
      {/* part-1 */}
      <div className="w-full h-[1817px]  lg:h-[1400px] bg-[#323232] rounded-[30px] flex flex-col items-center gap-8 ">
        <div className="w-[90%]  lg:w-[1200px] h-fit  lg:h-[880px] flex flex-col items-center my-[50px] lg:my-[96px] ">
          {/* text */}
          <div className="w-full lg:w-[693px]  text-center text-white text-[32px] lg:text-[56px] font-semibold leading-tight ">
            <h1 className="">You can do it all.<br/> With Hirego.</h1>
          </div>
          {/* boxes */}
          <div className="w-full h-[704px] mt-[48px] flex flex-col lg:flex-row items-center  gap-[24px] ">
            <div className="w-[95%] lg:w-[588px] h-[553px]  lg:h-full bg-white/10  rounded-[25px] flex flex-col items-center justify-center py-6 ">
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
                    <img src="../../public/Arrow_alt_lright.png" />
                  </span>
                </button>
              </div>
              <div className="w-[334px] lg:w-[482px] ">
                <img src="../../public/service.png" />
              </div>
            </div>
            {/* right */}
            <div className="  lg:w-[588px] h-full flex flex-col items-center  gap-[24px]">
              <div className="w-[95%] lg:w-full h-[296px]  bg-[#3A5C45]   rounded-[25px] flex flex-col items-center">
                <div className="w-[85%] h-[136px]  my-[35px]  ">
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
                  <button className="text-[18px] px-5 py-2  rounded-full bg-white text-black/70 flex items-center justify-center mb-[48px] gap-2">
                    Hire contractors{" "}
                    <span>
                      <img src="../../public/Arrow_alt_lright.png" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="w-full h-[380px]  bg-[#B1D8FC]   rounded-[25px] flex flex-col items-center">
                <div className="w-[85%] h-[136px] my-[48px]  ">
                  <h3 className="text-[28px] lg:text-[40px] text-black/85 font-semibold  ">
                    Convert contractors to employees
                  </h3>
                  <p className="text-[16px]  lg:text-[18px] font-thin text-black/65 ">
                    Assess global worker misclassification risks and compliantly
                    convert contractors to full-timers, all under one platform.
                  </p>
                </div>
                <div className="w-[85%]">
                  <button className="text-[18px] px-5 py-2  rounded-full bg-white text-black/70 flex items-center justify-center mb-[48px] gap-2">
                    Convert contractors{" "}
                    <span>
                      <img src="../../public/Arrow_alt_lright.png" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* middle */}
        <div className="w-[90%] h-[80px] ">
          <div className="w-full border-t border-white/15  "></div>
        </div>
        {/* bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center  lg:w-[1200px] lg:h-[168px]  mt-[420px] lg:mt-0 mb-20 ">
          <div>
            <h1 className="text-[24px]  lg:text-[80px] text-[#B0D9FF] font-semibold ">
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
      <div className="w-full h-[1626px] flex flex-col items-center py-[96px] ">
        {/* text */}
        <div className="w-[500px] h-[128px] text-center text-[56px] font-semibold text-black/85 ">
          <h1 className="-mb-5">Take your business</h1>
          <h1>to the next level.</h1>
        </div>
        {/* box */}
        <div className="w-full h-[1242px]  ">
          <div className="w-full h-[602px] flex items-center justify-between mt-[64px] ">
            <div className="w-[592px] h-[350px] py-[32px] pl-[120px] flex flex-col gap-4  ">
              <h3 className="text-[40px] text-[#FD852F] font-semibold leading-tight ">
                Culture and performance.
                <br />
                It’s up and up.
              </h3>
              <p className="text-[18px] text-black/45 font-normal leading-tight ">
                Develop feedback loops, set KPIs and design custom performance
                reviews. Quickly build a positive performance culture for your
                business — where everyone is aiming for the same goals.
              </p>
              <button className="w-[283px] h-[48px]  rounded-full bg-white border border-black/35 text-black/70 flex items-center justify-center gap-2">
                Performance Management{" "}
                <span>
                  <img src="../../public/Arrow_alt_lright.png" />
                </span>
              </button>
            </div>

            <div>
              <img src="../../public/image-9.png" />
            </div>
          </div>
          {/* down site */}
          <div className="w-full flex justify-center mt-[48px] ">
            <div className="w-[1200px] h-[592px] flex justify-between items-center ">
              <div>
                <img src="../../public/image-10.png" />
              </div>
              <div className="w-[500px] h-[350px] p-[32px]  flex flex-col gap-4  ">
                <h3 className="text-[40px] text-[#9149ED] font-semibold leading-tight ">
                Its payroll software.
                  <br />
                  Just faster.
                </h3>
                <p className="text-[18px] text-black/45 font-normal leading-tight ">
                  Save your time, pay your people with automated payroll. Enjoy
                  the benefits of Real Time Information (RTI) and take care of
                  workforce planning - all in one simple place.
                </p>
                <button className="w-[203px] h-[48px]  rounded-full bg-white border border-black/35 text-black/85 flex items-center justify-center gap-2">
                  Payroll Features
                  <span>
                    <img src="../../public/Arrow_alt_lright.png" />
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
