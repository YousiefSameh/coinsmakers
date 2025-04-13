import { motion } from "framer-motion";

const HowToEarn = () => {
  const steps = [
    {
      title: "Create an Account",
      description: "Sign up in just 30 seconds with your email",
      icon: "👤",
    },
    {
      title: "Choose Activities",
      description: "Select from games, surveys or product testing",
      icon: "🎮",
    },
    {
      title: "Complete Tasks",
      description: "Finish activities at your own pace",
      icon: "✅",
    },
    {
      title: "Get Paid",
      description: "Cash out earnings instantly to your preferred method",
      icon: "💰",
    },
  ];

  return (
    <section className="py-16 bg-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-main-color"
          >
            Want to earn free cash within minutes? Here's how
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-blue-light"
          >
            Our platform makes earning money simple and fun. Follow these easy
            steps to start filling your wallet today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-6 text-center hover:shadow-lg transition-shadow bg-panel-bg"
            >
              <div
                className="text-4xl mb-4 mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-secondary-color/20"
              >
                {step.icon}
              </div>
              <h3
                className="text-xl font-bold mb-2 text-main-color"
              >
                {step.title}
              </h3>
              <p className="text-blue-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToEarn;
