import SpecialHeading from "@components/SpecialHeading";
import { BsJoystick } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const OfferwallPartners = () => {
  return (
    <section>
      <SpecialHeading
        title="Offerwall Partners"
        icon={<BsJoystick />}
      />
      <div className="content flex items-center overflow-x-auto gap-6 py-6 scrollbar-hide">
        {Array.from({ length: 12 }, (_, index) => index).map((index) => {
          return (
            <div
              key={index}
              className="card p-3 flex justify-center flex-col hover:scale-105 transform transition duration-300"
            >
              <div className="relative w-full h-full bg-gradient-to-b from-[#1D232A] via-[#1D232A] to-[#1D232A] min-h-[13rem] min-w-[10rem] flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:bg-gradient-to-b hover:from-[#3b7d67] transition-colors border border-[#3b7d67]">
                <img
                  src="https://coinsmakers.com/asset/uploads/offerwalls/67bc4d8226c2d1740393858.png"
                  className="w-[100px] mb-6 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  alt="Card Image"
                />
                <div className="text absolute bottom-0 flex flex-col justify-center items-center gap-1 w-full py-2 rounded-b-lg">
                  <h5 className="text-white font-semibold text-lg tracking-wide">
                    TPlayed
                  </h5>
                  <div className="stars text-yellow-400 flex items-center gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfferwallPartners;
