import FeaturedOffers from "@components/Earn/FeaturedOffers"
import OfferwallPartners from "@components/Earn/OfferwallPartners"
import SurveyPartners from "@components/Earn/SurveyPartners"

const Earn = () => {
  return (
    <div className="space-y-[10px] md:space-y-[100px]">
      <FeaturedOffers />
      <OfferwallPartners />
      <SurveyPartners />
    </div>
  )
}

export default Earn