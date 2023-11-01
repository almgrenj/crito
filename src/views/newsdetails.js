import React from 'react'

import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroNewsSection from '../components/HeroNewsSection/HeroNewsSection';
import ArticleSection from '../components/Article/ArticleSection';

const newsdetails = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <HeroNewsSection />
      <ArticleSection />
      <Footer />
    </div>
  )
}

export default newsdetails