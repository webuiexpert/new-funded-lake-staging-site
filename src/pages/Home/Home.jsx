import React from 'react'
import ChooseUs from './components/ChooseUs'
import HowWorks from './components/HowWorks'
import PriceTab from './components/PriceTab'
import MapSection from './components/MapSection'
import StatsSection from './components/StatsSection'
import Hero from 'daisyui/components/hero'
import HeroSection from './components/HeroSection'
import ComparisonTable from './components/ComparisonTable'
import TradingSection from './components/TradingSection'
import CertificateMarqueeSlider from './components/CertificateMarqueeSlider'
import TraderWorld from './components/TraderWorld'
import SuccessStory from './components/SuccessStory'
import TrustPilotMarquee from './components/TrustPilotMarquee'

function Home() {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <ChooseUs />
      <HowWorks />
      <PriceTab />
      <MapSection />
      <StatsSection />
      <ComparisonTable />
      <TradingSection />
      <SuccessStory />
      <CertificateMarqueeSlider />
      <TraderWorld />
      <TrustPilotMarquee />
    </div>
  )
}

export default Home