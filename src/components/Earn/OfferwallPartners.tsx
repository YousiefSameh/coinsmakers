import { useRef, useState } from "react";
import SpecialHeading from "@components/SpecialHeading";
import { BsJoystick } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

const data = [
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/67337603323cd1731425795.png",
    name: "Adscendmedia",
    bg: "bg-gradient-to-b from-[#5d779c] to-[#2a2e3f]",
    salePercent: "+20%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/65bf898ca5ab21707051404.png",
    name: "Adgatemedia",
    bg: "bg-gradient-to-b from-[#0097cf] to-[#2a2e3f]",
    salePercent: "+15%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/67d884f3cb57f1742243059.png",
    name: "Torox",
    bg: "bg-gradient-to-b from-[#680c6a] to-[#2a2e3f]",
    salePercent: "+10%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/67bc4d8226c2d1740393858.png",
    name: "Tplayed",
    bg: "bg-gradient-to-b from-[#3b7d67] to-[#2a2e3f]",
    salePercent: "+25%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/6731dd430d00f1731321155.png",
    name: "Farly",
    bg: "bg-gradient-to-b from-[#653b69] to-[#2a2e3f]",
    salePercent: "+18%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/67c8bf25683f51741209381.png",
    name: "Lootably",
    bg: "bg-gradient-to-b from-[#b85a5a] to-[#2a2e3f]",
    salePercent: "+12%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/672223eab1eaf1730290666.png",
    name: "Adtowall",
    bg: "bg-gradient-to-b from-[#63946c] to-[#2a2e3f]",
    salePercent: "+30%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/6733732914ae31731425065.png",
    name: "Bitlabs",
    bg: "bg-gradient-to-b from-[#1f1d7a] to-[#2a2e3f]",
    salePercent: "+22%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/661b90743b6b41713082484.png",
    name: "Mychips",
    bg: "bg-gradient-to-b from-[#c2c01e] to-[#2a2e3f]",
    salePercent: "+17%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/67d0b21c839121741730332.png",
    name: "Adparagon",
    bg: "bg-gradient-to-b from-[#39474d] to-[#2a2e3f]",
    salePercent: "+14%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/6733759d28f081731425693.png",
    name: "Monlix",
    bg: "bg-gradient-to-b from-[#3aab4f] to-[#2a2e3f]",
    salePercent: "+19%"
  },
  {
    img: "https://coinsmakers.com/asset/uploads/offerwalls/67cdfb2ab22a71741552426.png",
    name: "Admantuim",
    bg: "bg-gradient-to-b from-[#318899] to-[#2a2e3f]",
    salePercent: "+16%"
  },
];

const OfferwallPartners = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!scrollContainerRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !scrollContainerRef.current) return;
		e.preventDefault();
		const x = e.pageX - scrollContainerRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		scrollContainerRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};
	return (
		<section>
      <div className="head px-6 md:px-0">
        <SpecialHeading title="Offerwall Partners" icon={<BsJoystick />} />
      </div>
			<div
        ref={scrollContainerRef}
				className="content flex items-center overflow-x-auto gap-4 md:gap-5 p-6 md:py-6 cursor-grab"
				style={{ scrollbarWidth: "none" }}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
			>
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className="card p-0 md:p-3 flex min-w-[6rem] md:min-w-[11rem] justify-center flex-col hover:scale-105 transform transition duration-300"
						>
							<div className={`relative w-full h-full min-h-[13rem] from-[#1D232A] via-[#1D232A] to-[#1D232A] flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:${item.bg} transition-colors border border-[#3b7d67] group`}>
								<div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
									<FaRegCirclePlay className="text-secondary-color" />
								</div>
								<span className="badge badge-soft badge-success text-white absolute top-2 right-2">
									{item.salePercent}
								</span>
								<img
                  src={item.img}
									className="h-[40px] md:h-fit w-[65px] md:w-[100px] mb-6 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
									alt="Card Image"
								/>
								<div className="text absolute bottom-0 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
									<h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
                    {item.name}
									</h5>
									<div className="stars text-yellow-400 flex items-center gap-0.5 text-[10px] md:text-base">
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default OfferwallPartners;
