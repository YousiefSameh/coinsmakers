import { memo, useCallback } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io5";
import { PiCoinVerticalFill } from "react-icons/pi";

const OfferCard = memo(({ index }: { index: number }) => {
  const handleModalOpen = useCallback(() => {
    const modal = document.getElementById("my_modal_3");
    if (modal) (modal as HTMLDialogElement).showModal();
  }, []);

  return (
    <div
      className="card bg-panel-bg p-3 min-w-[6rem] md:min-w-[11rem] flex justify-center flex-col hover:scale-105 transform transition duration-300"
      key={index}
    >
      <div className="relative group" onClick={handleModalOpen}>
        <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
          <FaRegCirclePlay className="text-secondary-color" />
        </div>
        <div className="offers-devices absolute flex items-center bg-[#383d52d6] text-[0.8rem] md:text-[1rem] text-[#ddd] justify-center gap-1 w-auto md:p-[5px] rounded-[5px] ml-[12px] z-[2] top-1 left-[-8px] md:left-[-4px] md:top-[5px]">
          <IoLogoAndroid />
        </div>
        <img
          src="https://cdn.farly.io/img_apps/alibaba/icone.png"
          className="rounded-lg w-[95%] md:w-full"
          loading="lazy"
          alt="Card Icon"
        />
      </div>
      <div className="title mt-2">
        <h3 className="text-[12px] md:text-lg font-semibold">Alibaba.com</h3>
        <p className="text-[10px] md:text-base text-base-content/60">Farly</p>
      </div>
      <div className="price mt-2 flex items-center gap-1 md:gap-2 text-sm md:text-xl">
        <span>$200.00</span>
        <span className="text-yellow-400">
          <PiCoinVerticalFill />
        </span>
      </div>
    </div>
  );
});

export default OfferCard;