import React from 'react'
import useScrollToTop from '../uScrollToTop'; 

import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroNewsSection from '../components/HeroNewsSection/HeroNewsSection';
import HowToUseArticle from '../components/HowToUseArticle/HowToUseArticle';
import ArticleSection from '../components/Article/ArticleSection';

const NewsDetails = () => {
  useScrollToTop(); 

  return (
    <div>
      <TopBar />
      <Header />
      <HeroNewsSection />
      <HowToUseArticle />
      <div className="page-alternate">
      <ArticleSection />
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetails;
