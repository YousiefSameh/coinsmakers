import TotalBalance from "@components/Profile/TotalBalance";
import MonthEarning from "@components/Profile/MonthEarning";

const About = () => {
  return (
    <>
      <TotalBalance />
      <MonthEarning
        data={[100, 200, 300, 400, 500, 900, 600, 700, 800, 1200]}
      />
    </>
  );
};

export default About;
