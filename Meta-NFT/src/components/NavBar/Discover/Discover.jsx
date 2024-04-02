import React from 'react';





//INTERNAL IMPORT
import Style from './Discover.module.css'

export const Discover = () => {

  //-----------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ];
  return (
    <div className={Style.box}>
       <select style={{ border: 'none' }}>
      {discover.map((el, i) => (
           <option>{el.name}</option>
       
      ))}
      </select>
    </div>
    
    
  );
;}

