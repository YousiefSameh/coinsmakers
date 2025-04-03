import SpecialHeading from "@components/SpecialHeading";
import { FaFireAlt } from "react-icons/fa";
import { PiCoinVerticalFill } from "react-icons/pi";
import { IoLogoAndroid } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";

const FeaturedOffers = () => {
	return (
		<section>
			<SpecialHeading title="Featured Offers" icon={<FaFireAlt />} />
			<div className="content flex items-center overflow-x-auto gap-6 py-6">
				{Array.from({ length: 12 }, (_, index) => index).map((index) => {
					return (
						<div key={index} className="card bg-panel-bg p-3 flex justify-center flex-col hover:scale-105 transform transition duration-300">
              <div className="relative group">
                <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex" ><FaRegCirclePlay className="text-secondary-color" /></div>
                <div className="offers-devices absolute flex items-center bg-[#383d52d6] text-[1rem] text-[#ddd] justify-center gap-1 w-auto p-[5px] rounded-[5px] ml-[12px] z-[2] left-[-4px] top-[5px]">
                  <IoLogoAndroid />
                </div>
                <img src="https://cdn.farly.io/img_apps/alibaba/icone.png" className="rounded-lg w-full" alt="Card Icon" />
              </div>
              <div className="title mt-2">
                <h3 className="text-lg font-semibold">Alibaba.com</h3>
                <p className="text-base-content/60">Farly</p>
              </div>
              <div className="price mt-2 flex items-center gap-2">
                <span>$200.00</span>
                <span className="text-yellow-400 text-xl"><PiCoinVerticalFill /></span>
              </div>
            </div>
					);
				})}
			</div>
		</section>
	);
};

export default FeaturedOffers;
