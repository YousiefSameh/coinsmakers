import { motion } from "framer-motion";
import SpecialHeading from "@components/shared/SpecialHeading";
import { useAppSelector } from "@store/hooks";
import { FaCalendarAlt, FaHistory } from "react-icons/fa";

const tableVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  }
};

const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const badgeVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 300 } }
};

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
    <motion.section 
      className="p-6 md:p-0 mt-[50px] md:mt-[100px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SpecialHeading title="Payment History" icon={<FaHistory />} />
      
      <div className="content mt-4">
        <motion.div 
          className="overflow-x-auto border border-base-content/5 bg-base-100"
          initial="hidden"
          animate="visible"
          variants={tableVariants}
          viewport={{ once: true }}
        >
          <table className="table table-zebra">
            <motion.thead 
              className="bg-secondary-color text-white"
              variants={headerVariants}
            >
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Payment Details</th>
                <th>Status</th>
              </tr>
            </motion.thead>
            
            <motion.tbody>
              {cashouts.map((item, index) => (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                >
                  <td className="flex flex-col">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> 
                      {formatDateAndDifference(item.date).formattedDate}
                    </span>
                    <span className="text-base-content/60">
                      {formatDateAndDifference(item.date).timeDifference}
                    </span>
                  </td>
                  <td>{item.amount}</td>
                  <td>{item.method}</td>
                  <td>{item.paymentDetails}</td>
                  <td>
                    <motion.span
                      className={`badge badge-sm ${
                        item.status === "pending" ? "badge-warning" :
                        item.status === "completed" ? "badge-success" : "badge-error"
                      } text-white`}
                      variants={badgeVariants}
                    >
                      {item.status}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PaymenHistory;