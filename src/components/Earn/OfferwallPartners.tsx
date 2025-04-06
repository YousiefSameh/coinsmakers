import useWrapperSwipe from "@hooks/useWrapperSwipe";
import { BsJoystick } from "react-icons/bs";
import { data } from "./data/OfferwallData";
import SpecialHeading from "@components/shared/SpecialHeading";
import OfferwallPartnersCard from "./Cards/OfferwallPartnersCard";

const OfferwallPartners = () => {
	const {handleMouseDown, handleMouseMove, handleMouseUp, scrollContainerRef} = useWrapperSwipe();

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
				{data.map((item, index) => (
					<OfferwallPartnersCard key={index} item={item} />
				))}
			</div>
		</section>
	);
};

export default OfferwallPartners;
