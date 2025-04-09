import Avatar from "@assets/Avatar.png";

const SomeInformation = () => {
  return (
    <section className="md:mb-6 my-6 p-6 bg-[#2A2E3F] flex items-center gap-4 rounded-lg w-[95%] md:w-full mx-auto">
      <img src={Avatar} className="size-[80px] md:size-[120px] border-4 border-secondary-color rounded-full" alt="User Logo" />
      <div className="text text-sm md:text-base">
        <h3>
          <span className="text-base-content/60">ID: </span> coinsmakers_user11210
        </h3>
        <h3>
          <span className="text-base-content/60">Username: </span> YousiefSameh20
        </h3>
        <h3>
          <span className="text-base-content/60">Referred By: </span> None
        </h3>
        <h3>
          <span className="text-base-content/60">Joined At: </span> 2025-04-03 01:54 AM
        </h3>
      </div>
    </section>
  );
};

export default SomeInformation;
