import useSetCashout from "@hooks/useSetCashout";
import SpecialHeading from "@components/shared/SpecialHeading";
import { IoCashOutline } from "react-icons/io5";

const Checkout = () => {
  const { cashout, handlePaymentDetails, handleSubmit } = useSetCashout();
	return (
		<div className="cart-total p-6 md:p-0 flex-1 flex flex-col gap-5">
			<SpecialHeading title="Cashout Processed" icon={<IoCashOutline />} />
			<div
				className="content mt-4 flex flex-col lg:flex-row justify-between"
				style={{ gap: "max(12vw, 20px)" }}
			>
				<div className="cart-total flex-1 flex flex-col gap-5">
					<div>
						<div className="cart-total-details flex justify-between text-[#e2e2e2]">
							<p>Request Amount: </p>
							<p>{cashout?.amount}</p>
						</div>
						<hr className="h-[1px] bg-[#555] border-none my-2.5" />
						<div className="cart-total-details flex justify-between text-[#e2e2e2]">
							<p>Withdrawal Charge: </p>
							<p>0.00 USD</p>
						</div>
						<hr className="h-[1px] bg-[#555] border-none my-2.5" />
						<div className="cart-total-details flex justify-between text-[#e2e2e2]">
							<p>After Charge: </p>
							<p>{cashout?.amount}</p>
						</div>
						<hr className="h-[1px] bg-[#555] border-none my-2.5" />
						<div className="cart-total-details flex justify-between text-[#e2e2e2]">
							<p>Method: </p>
							<p>{cashout?.method}</p>
						</div>
						<hr className="h-[1px] bg-[#555] border-none my-2.5" />
						<div className="cart-total-details flex justify-between text-[#e2e2e2]">
							<strong>Conversion Rate</strong>
							<strong>1 Coins = 0.00 USD</strong>
						</div>
						<hr className="h-[1px] bg-[#555] border-none my-2.5" />
						<div className="cart-total-details flex justify-between text-[#e2e2e2]">
							<strong>You Will Get</strong>
							<strong>0.20 USD</strong>
						</div>
					</div>
				</div>
				<div className="checkout-address flex-1">
					<div>
						<p className="text-[#e2e2e2] font-semibold">Payer Address</p>
						<form
							onSubmit={handleSubmit}
							className="checkout-address-input mt-2.5 flex justify-between items-center bg-[#272B3A] rounded-sm"
						>
							<input
								type="text"
								className="bg-transparent outline-none border-none pl-2.5"
								placeholder="Enter Your Address ..."
								onChange={handlePaymentDetails}
							/>
							<button
								className="bg-secondary-color text-white py-3 px-1.5 cursor-pointer rounded-r-sm"
								style={{ width: "max(10vw, 150px)" }}
							>
								Confirm
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
