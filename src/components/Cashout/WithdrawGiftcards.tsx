import { useCallback } from "react";
import SpecialHeading from "@components/shared/SpecialHeading";
import { BiMoneyWithdraw } from "react-icons/bi";
import WithdrawCard from "./Cards/WithdrawCard";

const cardData = [
	{
		title: "Amazon",
		imgSrc:
			"https://coinsmakers.com/asset/uploads/withdraw/method/65c4a62aa6a551707386410.png",
		bgColor: "bg-blue-dark",
	},
	{
		title: "Apple",
		imgSrc:
			"https://coinsmakers.com/asset/uploads/withdraw/method/65addd1bae3b51705893147.png",
		bgColor: "bg-black",
	},
	{
		title: "Visa",
		imgSrc:
			"https://coinsmakers.com/asset/uploads/withdraw/method/65c92d8f346331707683215.png",
		bgColor: "bg-[#2a2ac7]",
	},
	{
		title: "Play Store",
		imgSrc:
			"https://coinsmakers.com/asset/uploads/withdraw/method/65c4a4825c4ad1707385986.png",
		bgColor: "bg-[#003961]",
	},
	{
		title: "Mastercard",
		imgSrc:
			"https://coinsmakers.com/asset/uploads/withdraw/method/65c4a6d74eb611707386583.png",
		bgColor: "bg-blue-dark",
	},
];

const WithdrawGiftcards = () => {
	const handleModalOpen = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		const titleElement = e.currentTarget.querySelector("#title") as HTMLElement | null;
		const modal = titleElement ? document.getElementById(titleElement.innerText) : null;
		if (modal) (modal as HTMLDialogElement).showModal();
	}, []);

	return (
		<div className="py-6">
			<div className="head px-6 md:px-0">
				<SpecialHeading title="Withdraw Cash" icon={<BiMoneyWithdraw />} />
			</div>
			<div className="content flex items-center overflow-x-auto gap-4 md:gap-5 p-6 md:py-6 cursor-grab">
				{cardData.map((card) => (
					<WithdrawCard
						key={card.title}
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

export default WithdrawGiftcards;
