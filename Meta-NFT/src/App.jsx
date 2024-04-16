import { useState } from 'react'
import './App.css'
import { NavBar, Footer } from './components/componentindex'
import Style from "./styles/index.module.css";
import { HeroSection, Service, BigNFTSlider } from './components/componentindex';

const MyApp =() => {

 return (
   <div>
   <NavBar />
   <div className={StylePropertyMap.homepage}>
      <HeroSection />
      <Service/>
      <BigNFTSlider/>
   </div>
    
   <Footer/>
  
   </div>
 );
};

export default MyApp;
