import React from 'react'
import WhoWeSection from './components/WhoWeSection'
import { Helmet } from "react-helmet";

function WhoWeAre() {
  return (
    <div className=''>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="pingback" href="https://fundedlake.com/xmlrpc.php" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>Who We Are - FundedLake</title>
        <meta
          name="description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <link rel="canonical" href="https://fundedlake.com/who-we-are/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Who We Are - FundedLake" />
        <meta
          property="og:description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <meta property="og:url" content="https://fundedlake.com/who-we-are/" />
        <meta property="og:site_name" content="FundedLake" />
        <meta
          property="article:modified_time"
          content="2025-04-11T06:43:34+00:00"
        />
        <meta
          property="og:image"
          content="https://fundedlake.com/wp-content/uploads/2025/04/favicon.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />
      </Helmet>
      <WhoWeSection />
    </div>
    )
}

export default WhoWeAre