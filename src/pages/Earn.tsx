import FeaturedOffers from "@components/Home/FeaturedOffers"
import OfferwallPartners from "@components/Home/OfferwallPartners"
import SurveyPartners from "@components/Home/SurveyPartners"

const Earn = () => {
  return (
    <div className="space-y-[100px]">
      <FeaturedOffers />
      <OfferwallPartners />
      <SurveyPartners />
    </div>
  )
}

export default Earn