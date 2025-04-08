import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { data } from "../data/OfferwallData";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: { scale: 1.05 }
};

const overlayVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { 
    opacity: 1,
    backdropFilter: "blur(5px)",
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 20
    }
  }
};

const starVariants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300
    }
  })
};

const OfferwallPartnersCard = memo(({ item }: { item: (typeof data)[0] }) => {
	const handleModalOpen = useCallback(() => {
		const modal = document.getElementById("my_iframe");
		if (modal) (modal as HTMLDialogElement).showModal();
	}, []);
  return (
    <motion.div
      className="card p-0 md:p-3 flex min-w-[7rem] md:min-w-[11rem] justify-center flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div
        onClick={handleModalOpen}
        className={`relative w-full h-full min-h-[12rem] md:min-h-[13rem] from-[#1D232A] via-[#1D232A] to-[#1D232A] flex flex-col items-center justify-center rounded-lg shadow-lg hover:${item.bg} transition-colors border border-[#3b7d67] group`}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="overlay absolute top-0 left-0 h-full w-full hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex"
          variants={overlayVariants}
          initial="hidden"
          whileHover="visible"
        >
          <FaRegCirclePlay className="text-secondary-color" />
        </motion.div>

        <motion.span
          className="badge badge-soft badge-success text-white absolute top-2 right-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {item.salePercent}
        </motion.span>

        <motion.img
          src={item.img}
          className="h-[40px] md:h-fit w-[65px] md:w-[100px] mb-6 drop-shadow-lg"
          loading="lazy"
          alt="Card Image"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <motion.div
          className="text absolute bottom-0 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
            {item.name}
          </h5>
          <motion.div
            className="stars text-yellow-400 flex items-center gap-0.5 text-[10px] md:text-base"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                variants={starVariants}
                custom={i}
              >
                <FaStar />
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default OfferwallPartnersCard;