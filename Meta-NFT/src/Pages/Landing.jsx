import React from 'react';
import '../App.css';
import { NavBar, Footer } from '../components/componentindex';
import Style from "../styles/Landing.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, AudioLive, Brand, Slider, Video } from '../components/componentindex';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

import NFTPurchase from '../Transctions/NFTPurchase';

const Landing = () => {
  return (
    <div>
      <NavBar />
      
      <div className={Style.homepage}>
        <SignedOut>
          <h2>Please connect your wallet to continue</h2>
          <SignInButton mode="modal">Connect Wallet</SignInButton>
        </SignedOut>
        
        <SignedIn>
          <HeroSection />

          {/* NFT Purchase Section */}
          <div className={Style.nftPurchaseContainer}>
            <NFTPurchase />
          </div>
          <NFTCard />

          {/* Other components */}
          <Service />
          <BigNFTSlider />
          {/* <Title heading="Latest Audio Collection" paragraph="Discover the most outstanding NFTs in all topics of life." />
          <AudioLive /> */}
          <Collection />
          <FollowerTab />
          <Slider />
          <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life." />
          <Filter />
          
          <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories." />
          <Category />
          <Subscribe />
          <Brand />
          <Video />
        </SignedIn>
      </div>
    
      <Footer />
    </div>
  );
};

export default Landing;
