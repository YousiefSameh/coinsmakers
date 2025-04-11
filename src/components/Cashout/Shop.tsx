import { lazy, memo, Suspense } from "react";
import { FaShop } from "react-icons/fa6";
import Loading from "@components/feedback/Loading";
import { Link } from "react-router-dom";

const WithdrawCash = lazy(() => import("./WithdrawCash"));
const WithdrawCrypto = lazy(() => import("./WithdrawCrypto"));
const WithdrawGiftcards = lazy(() => import("./WithdrawGiftcards"));

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
					<Link
						to="/cashout/history"
						className="btn btn-lg whitespace-nowrap text-base btn-outline btn-success border-secondary-color text-secondary-color hover:bg-secondary-color hover:text-white"
					>
						View History
					</Link>
				</div>
			</div>
			<hr className="border border-base-content/10 my-5" />
			<div className="content md:px-6">
				<Suspense fallback={<Loading />}>
					<WithdrawCash />
					<WithdrawCrypto />
					<WithdrawGiftcards />
				</Suspense>
			</div>
		</section>
	);
};

export default memo(Shop);
