import './App.css';
import ArticleSection from './components/Article/ArticleSection';
import ConsultingSection from './components/ConsultingSection/ConsultingSection';
import FeatureReversedSection from './components/FeatureReversedSection/FeatureReversedSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import FeaturesContainerSection from './components/FeaturesContainerSection/FeaturesContainerSection';
import Footer from './components/Footer/Footer';
import GallerySection from './components/GallerySection/GallerySection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import TeamAndTestimonialSection from './components/TeamAndTestimonialSection/TeamAndTestimonialSection';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className='wrapper'>
        <TopBar />
        <Header />
        <HeroSection />
        <main>
        <FeaturesContainerSection />
        <FeatureSection />
        <ConsultingSection />
        <FeatureReversedSection />
        <GallerySection />
        <TeamAndTestimonialSection />
        <ArticleSection />
        <SubscribeSection />
        </main>
        <Footer />
    </div>
  );
}

export default App;
