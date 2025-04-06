import SpecialHeading from "@components/shared/SpecialHeading";
import { useAppSelector } from "@store/hooks";
import { FaCalendarAlt, FaHistory } from "react-icons/fa";

const PaymenHistory = () => {
  const { cashouts } = useAppSelector(state => state.cashout);
  const formatDateAndDifference = (paymentDate: string | number) => {
    const paymentTime = typeof paymentDate === "string" ? parseInt(paymentDate) : paymentDate;
    const now = Date.now();
    const difference = Math.abs(now - paymentTime);

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let timeDifference = "";
    if (seconds < 60) {
      timeDifference = `Seconds ${seconds}`;
    } else if (minutes < 60) {
      timeDifference = `Minutes ${minutes}`;
    } else if (hours < 24) {
      timeDifference = `Hours ${hours}`;
    } else {
      timeDifference = `Days ${days}`;
    }

    const formattedDate = new Date(paymentTime)
      .toISOString()
      .slice(2, 10)
      .replace(/-/g, "/");

    return {
      formattedDate,
      timeDifference,
    };
  };
	return (
		<section className="p-6 md:p-0 mt-[50px] md:mt-[100px]">
			<SpecialHeading title="Payment History" icon={<FaHistory />} />
			<div className="content mt-4">
				<div className="overflow-x-auto border border-base-content/5 bg-base-100">
					<table className="table table-zebra">
						{/* head */}
						<thead className="bg-secondary-color text-white">
							<tr>
								<th>Date</th>
								<th>Amount</th>
								<th>Method</th>
								<th>Payment Details</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
              {cashouts.map((item, index) => (
                <tr key={index}>
                  <th className="flex flex-col">
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {formatDateAndDifference(item.date).formattedDate}</span>
                    <span className="text-base-content/60">{formatDateAndDifference(item.date).timeDifference}</span>
                  </th>
                  <td>{item.amount}</td>
                  <td>{item.method}</td>
                  <td>{item.paymentDetails}</td>
                  <td className={`badge badge-sm ${item.status === "pending" ? "badge-warning" : item.status === "completed" ? "badge-success" : "badge-error"} text-white`}>{item.status}</td>
                </tr>
              ))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default PaymenHistory;
