import React from 'react'

import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactFormContainer from '../components/ContactFormContainer/ContactFormContainer';
import MapSection from '../components/MapSection/MapSection';
import BoxContainerSection from '../components/BoxContainerSection/BoxContainerSection';
import HeroContactSection from '../components/HeroContactSection/HeroContactSection';

const contact = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <HeroContactSection />
      <BoxContainerSection />
      <ContactFormContainer />
      <MapSection />
      <Footer />
    </div>
  )
}

export default contact