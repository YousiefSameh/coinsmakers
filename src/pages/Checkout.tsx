import { motion } from "framer-motion";
import useSetCashout from "@hooks/useSetCashout";
import SpecialHeading from "@components/shared/SpecialHeading";
import { IoCashOutline } from "react-icons/io5";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  }
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, delay: 0.5 }
  }
};

const Checkout = () => {
  const { cashout, handlePaymentDetails, handleSubmit } = useSetCashout();

  return (
    <motion.div 
      className="cart-total p-6 md:p-0 flex-1 flex flex-col gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SpecialHeading title="Cashout Processed" icon={<IoCashOutline />} />
      
      <motion.div
        className="content mt-4 flex flex-col lg:flex-row justify-between"
        style={{ gap: "max(12vw, 20px)" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="cart-total flex-1 flex flex-col gap-5"
          variants={containerVariants}
        >
          {[
            { label: "Request Amount:", value: cashout?.amount },
            { label: "Withdrawal Charge:", value: "0.00 USD" },
            { label: "After Charge:", value: cashout?.amount },
            { label: "Method:", value: cashout?.method },
            { label: "Conversion Rate", value: "1 Coins = 0.00 USD", strong: true },
            { label: "You Will Get", value: "0.20 USD", strong: true }
          ].map((detail, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="cart-total-details flex justify-between text-[#e2e2e2]">
                {detail.strong ? (
                  <strong>{detail.label}</strong>
                ) : (
                  <p>{detail.label}</p>
                )}
                {detail.strong ? (
                  <strong>{detail.value}</strong>
                ) : (
                  <p>{detail.value}</p>
                )}
              </div>
              <motion.hr 
                className="h-[1px] bg-[#555] border-none my-2.5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="checkout-address flex-1"
          variants={formVariants}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-[#e2e2e2] font-semibold">Payer Address</p>
            <motion.form
              onSubmit={handleSubmit}
              className="checkout-address-input mt-2.5 flex justify-between items-center bg-[#272B3A] rounded-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.input
                type="text"
                className="bg-transparent outline-none border-none pl-2.5 flex-1"
                placeholder="Enter Your Address ..."
                onChange={handlePaymentDetails}
              />
              <motion.button
                className="bg-secondary-color text-white py-3 px-1.5 cursor-pointer rounded-r-sm"
                style={{ width: "max(10vw, 150px)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Confirm
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Checkout;