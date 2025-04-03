import { TbCoins } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";

const GetPaid = () => {
  return (
    <section className="rounded-lg text-main-color">
      <h1 className="text-5xl uppercase font-extrabold mb-4 tracking-wide text-secondary-color">
        Get Paid For
      </h1>
      <p className="text-lg mb-8 text-blue-light">
        Testing Apps, Playing Games, and Doing Things You Already Love
      </p>
      <div className="content mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="card p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 bg-panel-bg">
          <span className="flex items-center justify-center gap-2 text-5xl font-bold text-selective-yellow">
            <TbCoins className="text-selective-yellow" /> 19,421
          </span>
          <p className="text-lg text-center mt-2 text-blue-light">
            Total Offers Completed
          </p>
        </div>
        <div className="card p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 bg-panel-bg">
          <span className="flex items-center justify-center gap-2 text-5xl font-bold text-secondary-color">
            <FaDollarSign className="text-secondary-color" /> 154.22
          </span>
          <p className="text-lg text-center mt-2 text-blue-light">
            Average Earnings Yesterday
          </p>
        </div>
        <div className="card p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 bg-panel-bg">
          <span className="flex items-center justify-center gap-2 text-5xl font-bold text-secondary-color">
            <FaDollarSign className="text-secondary-color" /> 6,915.53
          </span>
          <p className="text-lg text-center mt-2 text-blue-light">
            Total Earnings USD by users
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetPaid;