import { useRef, useState, useCallback } from "react";
import { BsJoystick } from "react-icons/bs";
import { data } from "./data/OfferwallData";
import SpecialHeading from "@components/shared/SpecialHeading";
import OfferwallPartnersCard from "./Cards/OfferwallPartnersCard";

const OfferwallPartners = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);

	const [scrollLeft, setScrollLeft] = useState(0);
	const handleMouseDown = useCallback((e: React.MouseEvent) => {
		if (!scrollContainerRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
	}, []);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent) => {
			if (!isDragging || !scrollContainerRef.current) return;
			e.preventDefault();
			const x = e.pageX - scrollContainerRef.current.offsetLeft;
			const walk = (x - startX) * 2;
			scrollContainerRef.current.scrollLeft = scrollLeft - walk;
		},
		[isDragging, startX, scrollLeft]
	);

	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
	}, []);

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
