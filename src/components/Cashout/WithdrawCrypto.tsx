

import { useCallback } from "react";
import SpecialHeading from "@components/shared/SpecialHeading";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";

const WithdrawCrypto = () => {
  const handleModalOpen = useCallback(() => {
    const modal = document.getElementById("my_modal");
    if (modal) (modal as HTMLDialogElement).showModal();
  }, []);
  return (
    <div className="py-6">
      <div className="head px-6 md:px-0">
        <SpecialHeading title="Withdraw Crypto" icon={<BiMoneyWithdraw />} />
      </div>
      <div className="content flex items-center overflow-x-auto gap-4 md:gap-5 p-6 md:py-6 cursor-grab">
        <div
          onClick={handleModalOpen}
          className="card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 bg-[#7a7a7a] group"
        >
          <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
            <FaRegCirclePlay className="text-white" />
          </div>
          <img
            src="https://coinsmakers.com/asset/uploads/withdraw/method/65c40febcf9241707347947.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="Litecoin"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              Litecoin
            </h5>
          </div>
        </div>
        <div
          onClick={handleModalOpen}
          className="card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 bg-[#8a6c00] group"
        >
          <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
            <FaRegCirclePlay className="text-white" />
          </div>
          <img
            src="https://coinsmakers.com/asset/uploads/withdraw/method/65c410ac5ba7c1707348140.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="Dogecoin"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              Dogecoin
            </h5>
          </div>
        </div>
        <div
          onClick={handleModalOpen}
          className="card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 bg-[#b50909] group"
        >
          <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
            <FaRegCirclePlay className="text-white" />
          </div>
          <img
            src="https://coinsmakers.com/asset/uploads/withdraw/method/67315033403061731285043.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="TRX TRC20"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              TRX TRC20
            </h5>
          </div>
        </div>
        <div
          onClick={handleModalOpen}
          className="card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 bg-black group"
        >
          <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
            <FaRegCirclePlay className="text-white" />
          </div>
          <img
            src="https://coinsmakers.com/asset/uploads/withdraw/method/65c92ed99bebc1707683545.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="Ripple"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              Ripple
            </h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WithdrawCrypto;
