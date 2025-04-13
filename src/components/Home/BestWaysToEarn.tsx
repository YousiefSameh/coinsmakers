import { motion } from "framer-motion";

const BestWaysToEarn = () => {
  const earningMethods = [
    {
      title: "Play Games",
      description:
        "Earn while having fun with our selection of rewarding games",
      icon: "🎮",
      earning: "Up to $25/hr",
      color: "secondary-color",
    },
    {
      title: "Take Surveys",
      description: "Share your opinion and get paid for every completed survey",
      icon: "📝",
      earning: "Up to $20/hr",
      color: "selective-yellow",
    },
    {
      title: "Test Products",
      description: "Try new products before they launch and earn rewards",
      icon: "📦",
      earning: "Up to $50/product",
      color: "ut-orange",
    },
    {
      title: "Watch Videos",
      description: "Get paid for watching promotional videos and ads",
      icon: "🎬",
      earning: "Up to $10/hr",
      color: "main-color",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-dark to-blue-middle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main-color">
            Best ways to earn
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-blue-light">
            Choose from multiple earning options that fit your schedule and
            preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {earningMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-panel-bg"
            >
              <div className={`h-2 bg-${method.color}`}></div>
              <div className="p-6">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-main-color">
                  {method.title}
                </h3>
                <p className="mb-4 text-blue-light">{method.description}</p>
                <p className={`font-bold text-${method.color}`}>
                  {method.earning}
                </p>
              </div>
              <div className="p-4 bg-blue-dark/90">
                <button
                  className={`w-full px-4 py-2 rounded-md text-sm font-medium transition-colors border border-${method.color} text-${method.color} hover:text-white hover:bg-${method.color} cursor-pointer`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestWaysToEarn;
