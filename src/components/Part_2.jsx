import Image1 from "../images/Brands/Image-1.png";
import Image2 from "../images/Brands/Image-2.png";
import Image3 from "../images/Brands/Image-3.png";
import Image4 from "../images/Brands/Image-4.png";
import Image5 from "../images/Brands/Image-5.png";
import Image6 from "../images/Brands/Image-6.png";
import Image7 from "../images/Brands/Image-7.png";
import Image8 from "../images/Brands/Image-8.png";
import Image9 from "../images/Brands/Image-9.png";
import Image10 from "../images/Brands/Image-10.png";
import Image11 from "../images/Brands/Image-11.png";
import Image12 from "../images/Brands/Image-12.png";
import Image13 from "../images/Brands/Image-13.png";
import Image14 from "../images/Brands/Image-14.png";






function Part_2() {
  return (
    <div className="bg-white w-full h-[370px]  lg:h-[464px] flex flex-col items-center justify-center ">
      <h1 className="brand_h1">
        Trusted by <span className="text-black/85">25,000+</span> companies from
        startups to enterprise
      </h1>
      <div className="w-[90%] h-fit lg:w-[1233px] lg:h-[136px] mx-auto mt-[80px] lg:mt-[64px]  ">
        <div className="w-full grid grid-cols-3  lg:grid-cols-7  justify-center  gap-4  lg:gap-10 items-center">
          <div className="brands ">
            <img src={Image1} />
          </div>
          <div className="brands">
            <img src={Image2} />
          </div>
          <div className="brands">
            <img src={Image3} />
          </div>
          <div className="brands">
            <img src={Image4} />
          </div>
          <div className="brands">
            <img src={Image5} />
          </div>
          <div className="brands">
            <img src={Image6} />
          </div>
          <div className="brands">
            <img src={Image7} />
          </div>
          <div className="brands">
            <img src={Image8} />
          </div>
          <div className="brands">
            <img src={Image9} />
          </div>
          <div className="brands">
            <img src={Image10} />
          </div>
          <div className="brands">
            <img src={Image11} />
          </div>
          <div className="brands">
            <img src={Image12} />
          </div>
          <div className="brands">
            <img src={Image13} />
          </div>
          <div className="brands">
            <img src={Image14} />
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default Part_2;
