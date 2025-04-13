import { motion } from "framer-motion";
import Logo from "@assets/Logo.png";

const RecommendedBy = () => {
  const logos = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
  ];

  return (
    <section className="py-12 bg-blue-middle">
      <div className="container mx-auto px-4">
        <h2
          className="text-center text-lg mb-8 text-main-color"
        >
          RECOMMENDED BY
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {logos.map((logo) => (
            <div
              key={logo}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <div
                className="h-10 w-42 rounded flex items-center justify-center"
              >
                {/* <span style={{ color: theme.mainColor }}>{logo}</span> */}
                <img src={Logo} className="w-full" alt={logo} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendedBy;
