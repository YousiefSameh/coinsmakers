import FeaturedOffers from "@components/Home/FeaturedOffers"
import GetPaid from "@components/Home/GetPaid"
import OfferwallPartners from "@components/Home/OfferwallPartners"
import SurveyPartners from "@components/Home/SurveyPartners"

const Earn = () => {
  return (
    <div className="space-y-[100px]">
      <FeaturedOffers />
      <GetPaid />
      <OfferwallPartners />
      <SurveyPartners />
    </div>
  )
}

export default Earn