// import { useState } from 'react'
import './App.css'
import { NavBar, Footer } from './components/componentindex'
import Style from "./styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, AudioLive, Brand, Slider, Video} from './components/componentindex';
import { Route,Routes } from 'react-router-dom';
import AboutUs from '../src/Pages/AboutUs';
import NFTDetails from './Pages/NFTDetails';
import Landing from './Pages/Landing';
import ContactUs from './Pages/ContactUs'
import ConnectWallet from './Pages/ConnectWallet';
import Search from './Pages/SearchPAge'
import Blog from './Pages/Blog';
import Account_Setting from './Pages/Account_Setting'
import UploadNFT from './Pages/UploadNFT'



const MyApp =() => {

 return (
   <div>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/NFTdetails" element={<NFTDetails/>}/>
      <Route path="/Collection" element={<Collection/>}/>
      <Route path="/ConnectWallet" element={<ConnectWallet/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Account_Setting" element={<Account_Setting/>}/>
      <Route path="/UploadNFT" element={<UploadNFT/>}/>

      

    

    </Routes>
   
   </div>
 );
};

export default MyApp;
