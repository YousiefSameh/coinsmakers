import { memo } from "react";
import { Link } from "react-router-dom";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { PiCoinVerticalFill } from "react-icons/pi";
import useWithdrawModel from "@hooks/useWithdrawModel";

interface ModalProps {
	title: string;
	imgSrc: string;
	bgColor: string;
}

const Modal = ({ title, imgSrc, bgColor }: ModalProps) => {
	const {handleInput, handleData, handleSubmit} = useWithdrawModel({ title });
	return (
		<dialog id={title} className="modal z-[900]">
			<div className="modal-box p-0">
				<form onSubmit={handleSubmit}>
					<div className="header relative overflow-hidden pt-[35px] px-[24px] pb-[25px] flex items-center justify-start">
						<div
							className={`background ${bgColor} rounded-lg h-[100px] w-full blur-[100px] inset-0`}
						></div>
						<div className="flex items-center absolute h-fit gap-8 px-[24px]">
							<div className="image">
								<img
									src={imgSrc}
									className="size-[100px]"
									alt="Withdraw Method"
								/>
							</div>
							<div className="text space-y-2">
								<h3 className="font-bold text-3xl">{title}</h3>
							</div>
						</div>
					</div>
					<div className="content relative overflow-y-auto px-6 pt-4 bg-[#111923] max-h-[350px]">
						<div className="balance">
							<span className="text-lg">Your Balance</span>
							<hr className="border border-neutral-700" />
							<input
								type="text"
								name="amount"
								placeholder="0.00"
								className="input w-full border-secondary-color my-3"
								onChange={handleData}
								onInput={handleInput}
							/>
						</div>
						<div className="rules">
							<span className="text-lg">Rules</span>
							<hr className="border border-neutral-700" />
							<div className="content flex flex-col gap-3 mt-4">
								<div className="goal bg-[#16202B] p-4 rounded-lg flex items-center justify-between">
									<div className="goal-started flex items-center gap-2">
										<FaMinusCircle className="text-red-500" />
										<p className="text-base-content/60 text-sm">Minimum</p>
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
										<p className="text-base-content/60 text-sm">Maximum</p>
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
				</form>
				<div className="button px-6 py-4 bg-[#111923] flex items-center gap-3">
					<button
						type="submit"
						onClick={handleSubmit}
						className="btn btn-soft btn-lg btn-accent w-[100px]"
					>
						<Link to="/cashout/confirm">
							Confirm
						</Link>
					</button>
					<form method="dialog">
						<button className="btn btn-soft btn-lg btn-error w-[100px]">
							Cancel
						</button>
					</form>
				</div>
			</div>
		</dialog>
	);
};

export default memo(Modal);
