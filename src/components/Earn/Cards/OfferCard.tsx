import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io5";
import { PiCoinVerticalFill } from "react-icons/pi";

const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const OfferCard = memo(({ index }: { index: number }) => {
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * index,
				duration: 0.5,
				ease: "easeOut",
			},
		},
		hover: { scale: 1.05 },
	};

	const handleModalOpen = useCallback(() => {
		const modal = document.getElementById("my_modal_3");
		if (modal) (modal as HTMLDialogElement).showModal();
	}, []);

	return (
		<motion.div
			className="card bg-panel-bg p-3 min-w-[7rem] md:min-w-[11rem] flex justify-center flex-col"
			variants={cardVariants}
			initial="hidden"
			animate="visible"
			whileHover="hover"
			key={index}
		>
			<motion.div
				className="relative group"
				onClick={handleModalOpen}
				whileHover={{ transition: { staggerChildren: 0.1 } }}
			>
				<motion.div
					className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex"
					variants={overlayVariants}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<FaRegCirclePlay className="text-secondary-color" />
				</motion.div>

				<motion.div
					className="offers-devices absolute flex items-center bg-[#383d52d6] text-[0.8rem] md:text-[1rem] text-[#ddd] justify-center gap-1 w-auto md:p-[5px] rounded-[5px] ml-[12px] z-[2] top-1 left-[-8px] md:left-[-4px] md:top-[5px]"
					whileInView={{ scale: [0.9, 1.1, 1] }}
					transition={{ duration: 0.5 }}
				>
					<IoLogoAndroid />
				</motion.div>

				<motion.img
					src="https://cdn.farly.io/img_apps/alibaba/icone.png"
					className="rounded-lg w-[95%] md:w-full"
					loading="lazy"
					alt="Card Icon"
					whileHover={{ scale: 1.02 }}
					transition={{ type: "spring", stiffness: 400 }}
				/>
			</motion.div>

			<motion.div
				className="title mt-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 + index * 0.05 }}
			>
				<h3 className="text-[12px] md:text-lg font-semibold">Alibaba.com</h3>
				<p className="text-[10px] md:text-base text-base-content/60">Farly</p>
			</motion.div>

			<motion.div
				className="price mt-2 flex items-center gap-1 md:gap-2 text-sm md:text-xl"
				whileHover={{ scale: 1.05 }}
			>
				<span>$200.00</span>
				<motion.span
					className="text-yellow-400"
					animate={{ rotate: [0, 10, -10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
				>
					<PiCoinVerticalFill />
				</motion.span>
			</motion.div>
		</motion.div>
	);
});

export default OfferCard;
