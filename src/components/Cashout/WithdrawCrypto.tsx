import { useCallback, memo } from "react";
import SpecialHeading from "@components/shared/SpecialHeading";
import { BiMoneyWithdraw } from "react-icons/bi";
import WithdrawCard from "./Cards/WithdrawCard";

const WithdrawCrypto = () => {
	const handleModalOpen = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		const titleElement = e.currentTarget.querySelector("#title") as HTMLElement | null;
		const modal = titleElement ? document.getElementById(titleElement.innerText) : null;
		if (modal) (modal as HTMLDialogElement).showModal();
	}, []);
	
	const cardsData = [
		{
			bgColor: "bg-[#7a7a7a]",
			imgSrc:
				"https://coinsmakers.com/asset/uploads/withdraw/method/65c40febcf9241707347947.png",
			altText: "Litecoin",
			title: "Litecoin",
		},
		{
			bgColor: "bg-[#8a6c00]",
			imgSrc:
				"https://coinsmakers.com/asset/uploads/withdraw/method/65c410ac5ba7c1707348140.png",
			altText: "Dogecoin",
			title: "Dogecoin",
		},
		{
			bgColor: "bg-[#b50909]",
			imgSrc:
				"https://coinsmakers.com/asset/uploads/withdraw/method/67315033403061731285043.png",
			altText: "TRX TRC20",
			title: "TRX TRC20",
		},
		{
			bgColor: "bg-black",
			imgSrc:
				"https://coinsmakers.com/asset/uploads/withdraw/method/65c92ed99bebc1707683545.png",
			altText: "Ripple",
			title: "Ripple",
		},
	];

	return (
		<div className="py-6">
			<div className="head px-6 md:px-0">
				<SpecialHeading title="Withdraw Crypto" icon={<BiMoneyWithdraw />} />
			</div>
			<div className="content flex items-center overflow-x-auto gap-4 md:gap-5 p-6 md:py-6 cursor-grab">
				{cardsData.map((card, index) => (
					<WithdrawCard
						key={index}
						onClick={handleModalOpen}
						bgColor={card.bgColor}
						imgSrc={card.imgSrc}
						title={card.title}
					/>
				))}
			</div>
		</div>
	);
};

export default memo(WithdrawCrypto);
