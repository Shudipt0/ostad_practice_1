import check_ring from "../images/Check_ring.png";
import expand_right from "../images/Expand_right.png";
import rectangle from "../images/Rectangle.png";
import bubble_left from "../images/Bubble_left.png";
import bubble_2 from "../images/Bubble_2.png";
import bubble_right_2 from "../images/Bubble_right_2.png";
import bubble_right from "../images/Bubble_right.png";

function HeroSec() {
  return (
    <div className="bg-[#B1D8FC] w-full h-[694px]  lg:h-[664px] rounded-b-[30px] relative -mt-2 ">
      {/* text-box */}
      <div className="absolute space-y-6 mx-[24px] mt-[64px]  lg:mx-[80px] lg:my-[138px] ">
        <div className="w-[382px]   lg:w-[608px] h-[192px] ">
          <h1 className="hero_h1">
            HireGo is your <br /> all-in-one <br /> Global People Platform
          </h1>
        </div>
        <div className="w-[370px] h-[56px] flex flex-col gap-[8px] ">
          <div className="hero_p_box">
            <img src={check_ring} />
            <p className="hero_p">G3's Leader in global employment platforms</p>
          </div>
          <div className="hero_p_box">
            <img src={check_ring} />
            <p className="hero_p">90% customers satisfaction rate</p>
          </div>
        </div>
        <button className="hero_btn ">
          Request a demo{" "}
          <span>
            {" "}
            <img src={expand_right} />{" "}
          </span>
        </button>
      </div>

      {/* images */}
      <div className="hero_img1">
        <img src={rectangle} />
      </div>
      <div className="hero_img2 ">
        <img src={bubble_left} />
      </div>
      <div className="hero_img3">
        <img src={bubble_2} />
      </div>
      <div className="hero_img4">
        <img src={bubble_right_2} />
      </div>
      <div className="hero_img5">
        <img src={bubble_right} />
      </div>
    </div>
  );
}

export default HeroSec;
