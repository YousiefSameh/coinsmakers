import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { setCashouts } from "@store/cashout/CashoutSlice";

const useSetCashout = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const cashout = useAppSelector((state) => state.cashout.cashout);
	const [paymentDetails, setPaymentDetails] = useState("");
	useEffect(() => {
		if (!cashout) {
			toast.error("No cashout request found. Redirecting to cashout page...");
			navigate("/dashboard/cashout");
		}
	}, [cashout, navigate]);
	const handlePaymentDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target && e.target.value) {
			setPaymentDetails(e.target.value);
		}
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (paymentDetails && paymentDetails.length > 0) {
			toast.success("Cashout submitted successfully!");
			dispatch(setCashouts({ ...cashout, paymentDetails }));
			navigate("/dashboard/cashout/history");
		} else {
			toast.error("Invalid payment details. Please enter valid details.");
		}
	};
	return { cashout, handlePaymentDetails, handleSubmit, paymentDetails };
};

export default useSetCashout;
