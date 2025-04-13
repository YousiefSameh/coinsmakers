import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      role: "Student",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      quote:
        "I've earned over $500 in just my first month! The games are fun and surveys are quick to complete.",
      stars: 5,
    },
    {
      name: "Michael T.",
      role: "Freelancer",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      quote:
        "This platform has been a game-changer for my side hustle income. The payouts are fast and reliable.",
      stars: 5,
    },
    {
      name: "Jessica M.",
      role: "Teacher",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      quote:
        "I love how easy it is to earn during my downtime. The product testing offers are my favorite!",
      stars: 4,
    },
  ];

  return (
    <section className="py-16 bg-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main-color">
            Everyone's talking about CoinsMaker
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-blue-light">
            Join thousands of satisfied users who earn daily on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl shadow-md bg-panel-bg"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-main-color">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="text-secondary-color">"</div>
              </div>

              <p className="mb-4 text-blue-light">"{testimonial.quote}"</p>

              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-5 h-5 ${
                        starIndex < testimonial.stars
                          ? "text-gold-400"
                          : "text-blue-middle"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
