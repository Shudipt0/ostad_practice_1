import React from 'react'
import expand_rightblk from '../images/Expand_right_blk.png';
import Image_1 from '../images/social/Image_1.png';
import Image_2 from '../images/social/Image_2.png';
import Image_3 from '../images/social/Image_3.png';
import Image_4 from '../images/social/Image_4.png';
import world from '../images/world.png';







function Footer() {
  return (
    <div className='w-full h-[792px]  lg:h-[1365px] bg-[#1B1B1B] flex flex-col items-center justify-center '>
      {/* text */}
      <div className="flex flex-col items-center gap-4 ">
          <h1 className="  text-center text-[32px]  lg:text-[56px] font-semibold text-white/85 leading-tight">Work easy.<br/>
          Grow further with HireGo.
          </h1>

          <button className=" footer_btn ">
          Request a demo
                  <span>
                    <img src={expand_rightblk} />
                  </span>
                </button>
            </div>

            <div className="w-[90%]  lg:w-[1200px] py-[50px]  lg:py-[80px] ">
          <div className="w-full border-t border-white/15  "></div>
        </div>

        {/* nav */}
        <div className='w-[90%]  lg:w-[1200px] lg:h-[783px]  '>
{/* box-1 */}
            <div className='w-full lg:h-[640px] lg:flex  '>
                  <div className='w-full lg:w-[288px] h-full  '>
                    <h2 className='text-[32px] font-semibold text-white'>HireGo</h2>
                    {/*social icons */}
                    <div className=' flex gap-6 mt-8 cursor-pointer '>
                      <img src={Image_1} />
                      <img src={Image_2} />
                      <img src={Image_3} />
                      <img src={Image_4} />
                    </div>
                 </div>
                 {/* grid box */}
                  <div className='hidden lg:grid grid-cols-4  w-[896px] h-full  '>
                    <div className=''>

                    </div>
                    <div >
                      <p className='footer_list_txt1'>How it works</p>
                      <div className='footer_list_txt2 '>
                      <p>Hire Employees</p>
                      <p>Hire Contractors</p>
                      <p>Run Global Payroll</p>
                      <p>App Store</p>
                      <p>Open API</p>
                      </div>
                    </div>
                    <div >
                      <p className='footer_list_txt1'>Solutions</p>
                      <div className='footer_list_txt2 '>
                      <p>Compliance</p>
                      <p>Payments</p>
                      <p>For Finance Teams</p>
                      <p>For Legal Teams</p>
                      <p>For Hiring Managers</p>
                      <p>Startup</p>
                      <p>Enterprise</p>
                      </div>
                    </div>
                    <div >
                      <p className='footer_list_txt1'>Resources</p>
                      <div className='footer_list_txt2 '>
                      <p>About</p>
                      <p>Blog</p>
                      <p>Support hub</p>
                      <p>Global Hiring Guide</p>
                      <p>Partner Program</p>
                      <p>Affiliates</p>
                      <p>Case Studies</p>
                      <p>Careers</p>
                      <p>Glossary</p>
                      <p>Press</p>
                      <p>Service Status</p>
                      <p>Worker Community</p>

                      </div>
                    </div>
                   

                  </div>
            </div>
            {/* box-2 */}
            <div className='flex items-center  gap-2 cursor-pointer mt-8 lg:mt-0'>
              <div><img src={world} /></div>
              <p className='text-[14px] text-white '>English</p>
            </div>
            {/* box-3 */}
           <div className='border-t-2 my-8  lg:my-10'>
           </div>
           <div className='w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 lg:gap-0  '>
               <p className='footer_list_txt3  '>© Copyright 2024. All Rights Reserved.</p>

               <div className='footer_list_txt4'>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Whistleblower Policy</p>
                <p>Cookie policy</p>
                <p>Cookie Settings</p>

               </div>
            </div>
          

        </div>
    </div>
  )
}

export default Footer
