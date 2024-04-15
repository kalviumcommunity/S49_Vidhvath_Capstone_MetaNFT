import { useState } from 'react'
import './App.css'
import { NavBar, Footer } from './components/componentindex'
import Style from "./styles/index.module.css";
import { HeroSection } from './components/componentindex';
const MyApp =() => (

 
   <div>
   <NavBar />
   <div className={StylePropertyMap.homepage}>
      <HeroSection />
   </div>
    
   <Footer/>
  
   </div>
);

export default MyApp;
