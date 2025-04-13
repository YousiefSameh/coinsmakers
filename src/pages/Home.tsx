import Header from '@components/Home/Header';
import Hero from '@components/Home/Hero';
import RecommendedBy from '@components/Home/RecommendedBy';
import HowToEarn from '@components/Home/HowToEarn';
import BestWaysToEarn from '@components/Home/BestWaysToEarn';
import WhyChooseUs from '@components/Home/WhyChooseUs';
import CashoutMethods from '@components/Home/CashoutMethods';
import Testimonials from '@components/Home/Testimonials';
import FAQ from '@components/Home/FAQ';
import JoinCommunity from '@components/Home/JoinCommunity';
import Footer from '@components/Home/Footer';

// Main App Component
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-dark">
      <Header />
      <main>
        <Hero />
        <RecommendedBy />
        <HowToEarn />
        <BestWaysToEarn />
        <WhyChooseUs />
        <CashoutMethods />
        <Testimonials />
        <FAQ />
        <JoinCommunity />
      </main>
      <Footer />
    </div>
  );
};

export default Home;