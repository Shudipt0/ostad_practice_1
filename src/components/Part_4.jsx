import React from 'react'

function Part_4() {
  return (
    <div className='w-full h-[960px] bg-white flex flex-col items-center justify-center gap-[48px] '>
        {/* text */}
      <div className=" text-center text-[56px] font-semibold text-black/85 ">
          <h1 className="leading-tight">Get started with HireGo <br/>
          in three easy steps.
          </h1>
            </div>
            {/* box */}
            <div className='w-[1200px] h-[592px]  flex justify-between '>
                {/* left */}
                <div className='w-[592px] h-full '>
                      <img src='../../public/image-11.png' />
                </div>
                {/* right */}

                <div className='w-[592px] h-full flex flex-col justify-between '>
                  <div className='w-[592px] h-[164px] bg-[#F5F5F5] flex justify-between p-[32px] rounded-3xl '>
                       <div className='w-[40px] h-[40px] bg-[#9149ED] flex justify-center items-center rounded-full text-white font-semibold text-[20px] '>
                            1
                       </div>
                       <div className='w-[456px] h-full '>
                          <h3 className='text-[28px] font-semibold text-black/85 '>Book a call</h3>
                          <p className='text-[16px] font-normal text-black/65 '>Book a call with our global workforce consultants. We’ll set you up with a free account ready to suit your team’s needs.</p>
                          
                       </div>
                  </div>
                  {/* box-2 */}
                  <div className='w-[592px] h-[164px] bg-[#F5F5F5] flex justify-between p-[32px] rounded-3xl '>
                       <div className='w-[40px] h-[40px] bg-[#9149ED] flex justify-center items-center rounded-full text-white font-semibold text-[20px] '>
                            2
                       </div>
                       <div className='w-[456px] h-full '>
                          <h3 className='text-[28px] font-semibold text-black/85 '>Add your people</h3>
                          <p className='text-[16px] font-normal text-black/65 '>From new hires to your existing workforce, onboard effortlessly with our self-serve platform.</p>
                          
                       </div>
                  </div>
                  {/* box-3 */}
                  <div className='w-[592px] h-[220px] bg-[#F5F5F5] flex justify-between p-[32px] rounded-3xl '>
                       <div className='w-[40px] h-[40px] bg-[#9149ED] flex justify-center items-center rounded-full text-white font-semibold text-[20px] '>
                            3
                       </div>
                       <div className='w-[456px] h-full '>
                          <h3 className='text-[28px] font-semibold text-black/85 '>Dedicated onboarding</h3>
                          <p className='text-[16px] font-normal text-black/65 '>From navigating local laws to support for your team members, our dedicated team will help you get set up seamlessly.</p>

                          <button className="  rounded-full py-1 px-4 bg-white border border-black/35 text-black/85 flex items-center justify-center gap-2 mt-4 ">
                          Start Now
                  <span>
                    <img src="../../public/Arrow_alt_lright.png" />
                  </span>
                </button>
                          
                       </div>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Part_4
