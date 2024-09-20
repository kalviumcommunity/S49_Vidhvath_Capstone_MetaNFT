// import { useState } from 'react'
import './App.css'
import { NavBar, Footer } from './components/componentindex'
import Style from "./styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, AudioLive, Brand, Slider, Video} from './components/componentindex';
import { Route,Routes } from 'react-router-dom';

import NFTDetails from './Pages/NFTDetails';
import Landing from './Pages/Landing';
import ContactUs from './Pages/ContactUs'
import ConnectWallet from './Pages/ConnectWallet';
import Search from './Pages/SearchPAge'
import Blog from './Pages/Blog';
import Account from './Pages/Account';
import UploadNFT from './Pages/UploadNFT'
import AboutUs from './Pages/AboutUs';
import SubscriptionPage from './Pages/SubscriptionPage';





const MyApp =() => {

 return (
   <div>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/NFTDetails" element={<NFTDetails/>}/>
      <Route path="/Collection" element={<Collection/>}/>
      <Route path="/ConnectWallet" element={<ConnectWallet/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Account" element={<Account/>}/>
      <Route path="/UploadNFT" element={<UploadNFT/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/SubscriptionPage" element={<SubscriptionPage/>} />
     
      
      

      

    

    </Routes>
   
   </div>
 );
};

export default MyApp;