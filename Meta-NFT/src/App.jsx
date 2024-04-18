import { useState } from 'react'
import './App.css'
import { NavBar, Footer } from './components/componentindex'
import Style from "./styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title } from './components/componentindex';

const MyApp =() => {

 return (
   <div>
   <NavBar />
   <div className={StylePropertyMap.homepage}>
      <HeroSection />
      <Service/>
      <BigNFTSlider/>
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories. "/>

      <Subscribe/>
   </div>
    
   <Footer/>
  
   </div>
 );
};

export default MyApp;
