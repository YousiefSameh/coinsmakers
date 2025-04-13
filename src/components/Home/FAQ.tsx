import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How soon can I cash out my earnings?",
      answer:
        "You can cash out as soon as you reach the minimum threshold of $10. Most payouts are processed within 24 hours.",
    },
    {
      question: "Is CoinsMaker available worldwide?",
      answer:
        "Yes! CoinsMaker is available in over 150 countries. Some specific earning opportunities may vary by region.",
    },
    {
      question: "How much can I realistically earn?",
      answer:
        "Most active users earn between $200-$500 per month. Your earnings depend on time invested and available opportunities.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we have apps for both iOS and Android, making it easy to earn on the go.",
    },
    {
      question: "Are there any fees to join?",
      answer:
        "No, CoinsMaker is completely free to join and use. We never charge any membership fees.",
    },
    {
      question: "How do I get help if I have an issue?",
      answer:
        "Our support team is available 24/7 via live chat and email to resolve any questions or concerns.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-blue-middle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main-color">
            Frequently Asked Questions
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-blue-light">
            Get answers to common questions about earning with CoinsMaker
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-4 hover:bg-opacity-80 rounded-lg flex justify-between items-center bg-panel-bg"
              >
                <span className="font-medium text-main-color">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-5 h-5 transition-transform text-secondary-color ${
                    openIndex === i ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 rounded-b-lg bg-panel-bg text-blue-light">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
