import { memo } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

interface WithdrawCardProps {
  title: string;
  imgSrc: string;
  bgColor: string;
  onClick: () => void;
}

const WithdrawCard = memo(({ title, imgSrc, bgColor, onClick }: WithdrawCardProps) => (
  <div
    onClick={onClick}
    className={`card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 ${bgColor} group`}
  >
    <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
      <FaRegCirclePlay className="text-white" />
    </div>
    <img
      src={imgSrc}
      className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
      loading="lazy"
      alt={title}
    />
    <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
      <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
        {title}
      </h5>
    </div>
  </div>
));

export default WithdrawCard;