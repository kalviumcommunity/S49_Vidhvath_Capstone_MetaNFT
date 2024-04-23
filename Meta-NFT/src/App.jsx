import { useState } from 'react'
import './App.css'
import { NavBar, Footer } from './components/componentindex'
import Style from "./styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection } from './components/componentindex';

const MyApp =() => {

 return (
   <div>
   <NavBar />
   <div className={StylePropertyMap.homepage}>
      <HeroSection />
      <Service/>
      <BigNFTSlider/>
      <Collection/>
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories. "/>

      <Category/>
      <Subscribe/>
   </div>
    
   <Footer/>
  
   </div>
 );
};

export default MyApp;
