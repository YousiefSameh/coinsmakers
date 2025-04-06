import { useCallback, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { setCurrentCashout } from "@store/cashout/CashoutSlice";
import { ICashout } from "@customTypes/CashoutTypes";
import { toast } from "react-toastify";

const useWrapperSwipe = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();
	const handleInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
		if (e.currentTarget && e.currentTarget.value) {
			e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, "");
		}
	}, []);
	const [data, setData] = useState<ICashout>({
		date: Date.now().toString(),
		method: title,
		amount: 0,
		paymentDetails: "",
		status: "pending",
	});
	const handleData = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target && e.target.value) {
				setData((prev) => ({ ...prev, amount: parseFloat(e.target.value) }));
				console.log(data);
			}
		},
		[data]
	);
	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			if (data.amount < 7000 || data.amount > 10000000) {
				console.log(data.amount);
				toast.error("Invalid amount. Please enter a valid amount.");
			} else {
				dispatch(setCurrentCashout(data));
				toast.success("Cashout request submitted successfully!");
			}
		},
		[data, dispatch]
	);
  return {handleInput, handleData, handleSubmit}
}

export default useWrapperSwipe