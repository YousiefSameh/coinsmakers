import { useCallback } from "react";
import SpecialHeading from "@components/shared/SpecialHeading";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";

const WithdrawGiftcards = () => {
  const handleModalOpen = useCallback(() => {
    const modal = document.getElementById("my_modal");
    if (modal) (modal as HTMLDialogElement).showModal();
  }, []);
  return (
    <div className="py-6">
      <div className="head px-6 md:px-0">
        <SpecialHeading title="Withdraw Cash" icon={<BiMoneyWithdraw />} />
      </div>
      <div className="content flex items-center overflow-x-auto gap-4 md:gap-5 p-6 md:py-6 cursor-grab">
        <div
          onClick={handleModalOpen}
          className="card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 bg-blue-dark group"
        >
          <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
            <FaRegCirclePlay className="text-white" />
          </div>
          <img
            src="https://coinsmakers.com/asset/uploads/withdraw/method/65c4a62aa6a551707386410.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="Amazon"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              Amazon
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
            src="https://coinsmakers.com/asset/uploads/withdraw/method/65addd1bae3b51705893147.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="Apple"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              Apple
            </h5>
          </div>
        </div>
        <div
          onClick={handleModalOpen}
          className="card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 bg-[#2a2ac7] group"
        >
          <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
            <FaRegCirclePlay className="text-white" />
          </div>
          <img
            src="https://coinsmakers.com/asset/uploads/withdraw/method/65c92d8f346331707683215.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="Visa"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              Visa
            </h5>
          </div>
        </div>
        <div
          onClick={handleModalOpen}
          className="card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 bg-[#003961] group"
        >
          <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
            <FaRegCirclePlay className="text-white" />
          </div>
          <img
            src="https://coinsmakers.com/asset/uploads/withdraw/method/65c4a4825c4ad1707385986.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="Play Store"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              Play Store
            </h5>
          </div>
        </div>
        <div
          onClick={handleModalOpen}
          className="card relative p-0 md:p-3 flex items-center justify-center min-w-[8rem] md:min-w-[10rem] min-h-[13rem] flex-col hover:scale-105 transform transition duration-300 bg-blue-dark group"
        >
          <div className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] bg-black/30 hidden items-center justify-center text-none text-5xl z-[3] rounded-lg cursor-pointer group-hover:flex">
            <FaRegCirclePlay className="text-white" />
          </div>
          <img
            src="https://coinsmakers.com/asset/uploads/withdraw/method/65c4a6d74eb611707386583.png"
            className="w-[65px] mb-6 md:w-[100px] hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            loading="lazy"
            alt="Mastercard"
          />
          <div className="text absolute bottom-2 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg z-[4]">
            <h5 className="text-white font-semibold text-[12px] md:text-lg tracking-wide">
              Mastercard
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawGiftcards;