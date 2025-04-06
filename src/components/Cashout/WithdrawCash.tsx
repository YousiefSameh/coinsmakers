import { useCallback } from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import SpecialHeading from "@components/shared/SpecialHeading";
import WithdrawCard from "./Cards/WithdrawCard";

const WithdrawCash = () => {
	const handleModalOpen = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		const titleElement = e.currentTarget.querySelector("#title") as HTMLElement | null;
		const modal = titleElement ? document.getElementById(titleElement.innerText) : null;
		if (modal) (modal as HTMLDialogElement).showModal();
	}, []);

	const cardsData = [
		{
			title: "Paypal",
			imgSrc:
				"https://coinsmakers.com/asset/uploads/withdraw/method/65c40f3262f1c1707347762.png",
			bgColor: "bg-[#2590d3]",
		},
		{
			title: "Payeer",
			imgSrc:
				"https://coinsmakers.com/asset/uploads/withdraw/method/65c40fcfd977a1707347919.png",
			bgColor: "bg-[#0064b0]",
		},
	];

	return (
		<div className="py-6">
			<div className="head px-6 md:px-0">
				<SpecialHeading title="Withdraw Cash" icon={<BiMoneyWithdraw />} />
			</div>
			<div className="content flex items-center flex-wrap gap-x-2 gap-y-4 md:gap-5 p-4 md:py-6">
				{cardsData.map((card, index) => (
					<WithdrawCard
						key={index}
						title={card.title}
						imgSrc={card.imgSrc}
						bgColor={card.bgColor}
						onClick={handleModalOpen}
					/>
				))}
			</div>
		</div>
	);
};

export default WithdrawCash;
