import React from 'react'
import ChooseUs from './components/ChooseUs'
import HowWorks from './components/HowWorks'
import PriceTab from './components/PriceTab'
import MapSection from './components/MapSection'
import StatsSection from './components/StatsSection'
import HeroSection from './components/HeroSection'
import ComparisonTable from './components/ComparisonTable'
import TradingSection from './components/TradingSection'
import CertificateMarqueeSlider from './components/CertificateMarqueeSlider'
import TraderWorld from './components/TraderWorld'
import SuccessStory from './components/SuccessStory'
import TrustPilotMarquee from './components/TrustPilotMarquee'
import { Helmet } from "react-helmet";


function Home() {
  return (
    <div className='overflow-hidden'>
      <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="profile" href="http://gmpg.org/xfn/11" />
          <link rel="pingback" href="https://fundedlake.com/xmlrpc.php" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <title>FUNDEDLAKE – Where traders empower traders</title>
          <meta
            name="description"
            content="FUNDEDLAKE offers challenges up to $400k, instant funding up to $100k(no consistency rule), fast payouts, and instant support!"
          />
          <link rel="canonical" href="https://fundedlake.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="FUNDEDLAKE – Where traders empower traders"
          />
          <meta
            property="og:description"
            content="FUNDEDLAKE offers challenges up to $400k, instant funding up to $100k(no consistency rule), fast payouts, and instant support!"
          />
          <meta property="og:url" content="https://fundedlake.com/" />
          <meta property="og:site_name" content="FundedLake" />
          <meta
            property="article:modified_time"
            content="2025-05-03T23:18:48+00:00"
          />
          <meta
            property="og:image"
            content="https://fundedlake.com/wp-content/uploads/2025/04/cropped-android-chrome-512x512-2.png"
          />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:type" content="image/png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
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