import { motion } from "framer-motion";
import HeroImage from "@assets/Hero.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-blue-dark">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-main-color">
            Make Money Online{" "}
            <span className="text-secondary-color">Playing Games</span> & More
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-light">
            Join thousands earning cash daily through fun activities. Play
            games, complete surveys, and test products to earn rewards
            instantly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-md font-bold text-black transition-colors hover:bg-transparent border border-secondary-color hover:text-secondary-color bg-secondary-color cursor-pointer">
              Start Earning Now
            </button>
            <button className="px-6 py-3 rounded-md font-bold hover:text-black transition-colors bg-transparent border border-secondary-color text-secondary-color hover:bg-secondary-color cursor-pointer">
              Learn More
            </button>
          </div>

          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 overflow-hidden bg-blue-middle border-secondary-color"
                >
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <p className="ml-4 text-blue-light">
              <span className="font-bold text-secondary-color">10,000+</span>{" "}
              users earned today
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img
                src={HeroImage}
                alt="App screenshot showing earnings"
                className="full"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-20 bg-secondary-color"></div>
            <div className="absolute -left-10 -top-10 w-24 h-24 rounded-full opacity-10 bg-selective-yellow"></div>
          </div>
        </motion.div>
      </div>

      {/* Wave separator */}
      <div className="relative h-16 mt-12">
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 74L60 67.5C120 61 240 48 360 42.5C480 37 600 37 720 43.5C840 50 960 63 1080 66.5C1200 70 1320 65 1380 61L1440 57V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V74Z"
            fill="#222339"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
