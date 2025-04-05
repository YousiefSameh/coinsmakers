import { FaShop } from "react-icons/fa6";
import { PiCoinVerticalFill } from "react-icons/pi";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import WithdrawCash from "./WithdrawCash";
import WithdrawCrypto from "./WithdrawCrypto";
import WithdrawGiftcards from "./WithdrawGiftcards";

const Shop = () => {
	return (
		<section className="bg-[#2A2E3F] rounded-lg shadow-lg my-6 md:my-0 w-[90%] md:w-full mx-auto">
			<div className="p-6 header flex items-center justify-between">
				<div className="left">
					<div className="title flex items-center text-3xl gap-2">
						<FaShop className="icon" />
						<h2 className="title font-semibold">Shop</h2>
					</div>
					<p className="mt-2 text-base-content/60 text-[10px] w-[85%] md:w-full md:text-base">
						Exchange your coins in cash or crypto and receive it within minutes!
					</p>
				</div>
				<div className="right">
					<button className="btn btn-lg btn-outline btn-success border-secondary-color text-secondary-color hover:bg-secondary-color hover:text-white">
						History
					</button>
				</div>
			</div>
			<hr className="border border-base-content/10 my-5" />
			<div className="content md:px-6">
				<WithdrawCash />
				<WithdrawCrypto />
        <WithdrawGiftcards />
			</div>
			<dialog id="my_modal" className="modal">
				<div className="modal-box p-0">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 outline-none border-none top-2 z-[90000] ">
							✕
						</button>
					</form>
					<div className="header relative overflow-hidden pt-[35px] px-[24px] pb-[25px] flex items-center justify-start">
						<div className="background bg-[url('https://coinsmakers.com/asset/uploads/withdraw/method/65c40f3262f1c1707347762.png')] bg-cover bg-no-repeat rounded-lg size-[100px] blur-[100px] inset-0"></div>
						<div className="flex items-center absolute h-fit gap-8 px-[24px]">
							<div className="image">
								<img
									src="https://coinsmakers.com/asset/uploads/withdraw/method/65c40f3262f1c1707347762.png"
									className="size-[100px]"
									alt=""
								/>
							</div>
							<div className="text space-y-2">
								<h3 className="font-bold text-3xl">
									PayPal
								</h3>
							</div>
						</div>
					</div>
					<div className="content relative overflow-y-auto px-6 pt-4 bg-[#111923] max-h-[350px]">
            <div className="balance">
              <span className="text-lg">Your Balance</span>
              <hr className="border border-neutral-700" />
              <input
                type="text"
                placeholder="0.00"
                className="input w-full border-secondary-color my-3"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, "");
                }}
              />
            </div>
						<div className="rules">
							<span className="text-lg">Rules</span>
							<hr className="border border-neutral-700" />
							<div className="content flex flex-col gap-3 mt-4">
								<div className="goal bg-[#16202B] p-4 rounded-lg flex items-center justify-between">
									<div className="goal-started flex items-center gap-2">
										<FaMinusCircle className="text-secondary-color" />
										<p className="text-base-content/60 text-sm">
                      Minimum
										</p>
									</div>
									<div className="coins flex items-center gap-2">
										<span className="text-yellow-400 text-sm">
											<PiCoinVerticalFill />
										</span>
										<span className="text-sm">7,000.00</span>
									</div>
								</div>
								<div className="goal bg-[#16202B] p-4 rounded-lg flex items-center justify-between">
									<div className="goal-started flex items-center gap-2">
										<FaPlusCircle className="text-secondary-color" />
										<p className="text-base-content/60 text-sm">
                      Maximum
										</p>
									</div>
									<div className="coins flex items-center gap-2">
										<span className="text-yellow-400 text-sm">
											<PiCoinVerticalFill />
										</span>
										<span className="text-sm">10,000,000.00</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="button px-6 py-4 bg-[#111923] flex items-center gap-3">
						<a href="#" className="btn btn-soft btn-lg btn-accent w-[100px]">
							Confirm
						</a>
						<a href="#" className="btn btn-soft btn-lg btn-error w-[100px]">
							Cancel
						</a>
					</div>
				</div>
			</dialog>
		</section>
	);
};

export default Shop;
