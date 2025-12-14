import React from 'react'
import LeftSection from './LeftSection';
import Universe from './Universe';
import Hero from './Hero';
import RightSection from './RightSection';


function ProductsPage() {
    return (
        <>
       
        <Hero/>
  

<LeftSection
  imageUrl="media/images/kite.png"
  productName="Kite"
  productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."

  links={[
    {
      text: "Try Demo",
      url: "https://kite-demo.zerodha.com/dashboard",
      icon: "fa-long-arrow-right"
    },
    {
      text: "Learn More",
      url: "https://zerodha.com/products/kite",
      icon: "fa-long-arrow-right"
    }
  ]}

  googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
  appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
/>
<RightSection
    imageUrl="media/images/console.png"
  productName="Console"
  productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  links={[
    {
      text: "Learn more",
      url: "https://zerodha.com/products/console",
      icon: "fa-long-arrow-right"
    }]}
  
/>


            <LeftSection imageUrl="media/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." links={[
                {
                 text: "Coin",
      url: "https://coin.zerodha.com/",
      icon: "fa-long-arrow-right"

 } ]} googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin" appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"/>
 <RightSection
    imageUrl="media/images/kiteconnect.png"
  productName="Kite Connect API"
  productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  links={[
    {
      text: "Kte Connect",
      url: "https://zerodha.com/products/api/",
      icon: "fa-long-arrow-right"
    }]}
  
/>

                <LeftSection imageUrl="media/images/varsity.png" productName="
Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity" appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"/>
<p className='text-center mt-5 mb-5 fs-5'>
    Want to know more about our technology stack? Check out the <a href='https://zerodha.tech/'  style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.
</p>



        
        <Universe/>
        
       
        </>
    );
}

export default ProductsPage;