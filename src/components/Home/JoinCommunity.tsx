import { motion } from "framer-motion";

const JoinCommunity = () => {
  const stats = [
    { label: "Active Users", value: "1M+" },
    { label: "Total Paid", value: "$50M+" },
    { label: "Countries", value: "150+" },
  ];

  const platforms = [
    { name: "Discord", icon: "💬", users: "50K+" },
    { name: "Facebook", icon: "👍", users: "100K+" },
    { name: "Twitter", icon: "🐦", users: "75K+" },
    { name: "Instagram", icon: "📸", users: "90K+" },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-blue-dark">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 bg-secondary-color translate-[30%_-30%]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 bg-selective-yellow translate-[30%_30%]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-main-color"
          >
            Join the <span className="text-secondary-color">CoinsMaker</span>{" "}
            Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto text-blue-light"
          >
            Connect with other earners, get tips, and stay updated on the latest
            opportunities
          </motion.p>
        </div>

        {/* Stats Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-8 md:gap-16 mb-16 flex-wrap"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary-color">
                {stat.value}
              </div>
              <div className="text-blue-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              className="p-6 rounded-xl bg-panel-bg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-secondary-color/20">
                  {platform.icon}
                </div>
                <div>
                  <h3 className="font-bold text-main-color">{platform.name}</h3>
                  <p className="text-sm text-blue-light">
                    {platform.users} members
                  </p>
                </div>
              </div>
              <button className="w-full py-2 rounded-md text-sm font-medium bg-secondary-color/20 text-secondary-color">
                Join Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto p-8 rounded-xl bg-panel-bg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-main-color">
            Get Weekly Earning Tips
          </h3>
          <p className="mb-6 text-center text-blue-light">
            Subscribe to our newsletter for exclusive opportunities and tips to
            maximize your earnings
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md outline-none bg-panel-bg text-main-color border border-secondary-color/20"
            />
            <button className="px-4 py-2 rounded-md text-lg font-semibold text-black transition-colors hover:bg-transparent border border-secondary-color hover:text-secondary-color bg-secondary-color cursor-pointer">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunity;
