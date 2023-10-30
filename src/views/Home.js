// home.js

import React from 'react';

import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturesContainerSection from '../components/FeaturesContainerSection/FeaturesContainerSection';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import ConsultingSection from '../components/ConsultingSection/ConsultingSection';
import FeatureReversedSection from '../components/FeatureReversedSection/FeatureReversedSection';
import GallerySection from '../components/GallerySection/GallerySection';
import TeamAndTestimonialSection from '../components/TeamAndTestimonialSection/TeamAndTestimonialSection';
import ArticleSection from '../components/Article/ArticleSection';
import SubscribeSection from '../components/SubscribeSection/SubscribeSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <HeroSection />
      <FeaturesContainerSection />
      <FeatureSection />
      <ConsultingSection />
      <FeatureReversedSection />
      <GallerySection />
      <TeamAndTestimonialSection />
      <ArticleSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Home;