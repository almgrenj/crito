import React from 'react'

import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroNewsSection from '../components/HeroNewsSection/HeroNewsSection';
import ArticleNews from '../components/ArticleNews/ArticleNews';
import SubscribeSection from '../components/SubscribeSection/SubscribeSection';

const news = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <HeroNewsSection />
      <ArticleNews />
      <SubscribeSection />
      <Footer />
    </div>
  )
}

export default news