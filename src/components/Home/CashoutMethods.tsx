import { motion } from "framer-motion";
import { FaPaypal, FaAmazon, FaBitcoin, FaGoogle, FaApple } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

const CashoutMethods = () => {
  const methods = [
    { name: "PayPal", logo: <FaPaypal /> },
    { name: "Bank Transfer", logo: <BsBank /> },
    { name: "Amazon Gift Cards", logo: <FaAmazon /> },
    { name: "Bitcoin", logo: <FaBitcoin /> },
    { name: "Google Pay", logo: <FaGoogle /> },
    { name: "Apple Pay", logo: <FaApple /> },
  ];

  return (
    <section className="py-16 bg-blue-middle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-main-color"
          >
            Cashout via
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-blue-light"
          >
            Choose your preferred payment method with instant processing
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {methods.map((method) => (
            <motion.div
              key={method.name}
              whileHover={{ y: -5 }}
              className="border rounded-lg p-6 w-40 h-32 bg-panel-bg border-secondary-color/30 flex flex-col items-center justify-center hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-4xl mb-2 group-hover:text-secondary-color transition-colors">{method.logo}</div>
              <div className="text-sm whitespace-nowrap font-medium text-main-color">
                {method.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CashoutMethods;
