import { memo } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { data } from "../data/OfferwallData";

const OfferwallPartnersCard = memo(({ item }: { item: (typeof data)[0] }) => {
	return (
		<div className="card p-0 md:p-3 flex min-w-[6rem] md:min-w-[11rem] justify-center flex-col hover:scale-105 transform transition duration-300">
			<div
				className={`relative w-full h-full min-h-[13rem] from-[#1D232A] via-[#1D232A] to-[#1D232A] flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:${item.bg} transition-colors border border-[#3b7d67] group`}
			>
				<div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
					<FaRegCirclePlay className="text-secondary-color" />
				</div>
				<span className="badge badge-soft badge-success text-white absolute top-2 right-2">
					{item.salePercent}
				</span>
				<img
					src={item.img}
					className="h-[40px] md:h-fit w-[65px] md:w-[100px] mb-6 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
					loading="lazy"
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
});

export default OfferwallPartnersCard;
