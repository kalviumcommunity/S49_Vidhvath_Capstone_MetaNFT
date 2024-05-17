// import { useState } from 'react'
import './App.css'
import { NavBar, Footer } from './components/componentindex'
import Style from "./styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, AudioLive, Brand, Slider, Video} from './components/componentindex';
import { Route,Routes } from 'react-router-dom';
import AboutUs from '../src/Pages/AboutUs';
import NFTDetails from './Pages/NFTDetails';
import Landing from './Pages/Landing';



const MyApp =() => {

 return (
   <div>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/NFTdetails" element={<NFTDetails/>}/>
      <Route path="/Collection" element={<Collection/>}/>
      

    </Routes>
   
   </div>
 );
};

export default MyApp;
