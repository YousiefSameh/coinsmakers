import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Fast Payouts",
      description: "Most payments processed within 24 hours",
      icon: "⚡",
    },
    {
      title: "High Rewards",
      description: "Up to 50% more than competitor sites",
      icon: "💎",
    },
    {
      title: "Variety of Tasks",
      description: "Never run out of earning opportunities",
      icon: "🎯",
    },
    {
      title: "Secure Platform",
      description: "Bank-level security for your personal data",
      icon: "🔒",
    },
    {
      title: "Referral Program",
      description: "Earn 10% from friends you invite",
      icon: "👥",
    },
    {
      title: "24/7 Support",
      description: "Help whenever you need it",
      icon: "🛟",
    },
  ];

  return (
    <section className="py-16 bg-blue-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-main-color"
            >
              We're the #1 site to make money. Here's why
            </h2>
            <p className="text-lg mb-6 text-blue-light">
              Since 2018, we've helped over 1 million users earn extra cash
              through our platform. Our dedication to user experience and high
              payouts sets us apart.
            </p>
            <div className="flex gap-4 items-center mb-8">
              <div
                className="rounded-full p-2 shadow-md bg-panel-bg"
              >
                <div
                  className="text-2xl text-secondary-color"
                >
                  4.8
                </div>
              </div>
              <div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-gold-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-blue-light">
                  From 10,000+ reviews
                </p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-md text-lg font-semibold text-black transition-colors hover:bg-transparent border border-secondary-color hover:text-secondary-color bg-secondary-color cursor-pointer">
              Join Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg shadow-md bg-panel-bg"
              >
                <div className="text-3xl mb-3">{reason.icon}</div>
                <h3
                  className="text-lg font-bold mb-2 text-main-color"
                >
                  {reason.title}
                </h3>
                <p className="text-blue-light">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
