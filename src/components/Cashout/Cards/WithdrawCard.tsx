import { motion } from "framer-motion";
import { memo } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Modal from "../Modal/Modal";

interface WithdrawCardProps {
  title: string;
  imgSrc: string;
  bgColor: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  },
  hover: { scale: 1.05 }
};

const overlayVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { 
    opacity: 1, 
    backdropFilter: "blur(5px)",
    transition: { duration: 0.3 } 
  }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, delay: 0.2 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, delay: 0.4 }
  }
};

const WithdrawCard = memo(
  ({ title, imgSrc, bgColor, onClick }: WithdrawCardProps) => (
    <>
      <motion.div
        className={`card relative p-0 md:p-3 flex items-center justify-center min-w-[6rem] md:min-w-[10rem] min-h-[13rem] flex-col ${bgColor} group`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => onClick(e)}
      >
        <motion.div
          className="overlay absolute top-0 left-0 h-full w-full bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex"
          variants={overlayVariants}
          whileHover="visible"
        >
          <FaRegCirclePlay className="text-white" />
        </motion.div>

        <motion.img
          src={imgSrc}
          className="w-[65px] mb-6 md:w-[100px] drop-shadow-lg"
          loading="lazy"
          alt={title}
          variants={imageVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <motion.div
          className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]"
          variants={titleVariants}
        >
          <h5
            id="title"
            className="text-white font-semibold text-[12px] md:text-lg tracking-wide"
          >
            {title}
          </h5>
        </motion.div>
      </motion.div>
      
      <Modal title={title} imgSrc={imgSrc} bgColor={bgColor} />
    </>
  )
);

export default WithdrawCard;