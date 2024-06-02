import React from 'react';
//INTERNAL IMPORT
import Style from './Discover.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Discover = () => {

  const [selectedcomponent,setselectedcomponent]=useState("");
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setselectedcomponent(e.target.value);
    navigate(e.target.value)
  }

  //-----------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Search",
    },
    {
      name: "Collection",
    },
    {
      name: "Author",
    },
    {
      name: "NFTDetails",
    },
    {
      name: "Account",
    },
    {
      name: "UploadNFT"
    },
    {
      name: "ConnectWallet",
    },
    {
      name: "Blog",
    },
  ];
  return (
    <div onChange={handleChange} defaultValue={selectedcomponent} className={Style.box}>
       <select style={{ border: 'none' }}>
      {discover.map((el, i) => (
           <option>{el.name}</option>
       
      ))}
      </select>
    </div>
    
    
  );
;}

