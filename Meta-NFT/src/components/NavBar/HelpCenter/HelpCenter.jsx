import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { useState } from 'react';
// INTERNAL IMPORT
import Style from './HelpCenter.module.css';
import { useNavigate } from 'react-router-dom';
const HelpCenter = () => {
  const helpCenter = [
    {
      name: "AboutUs",
      
    },
    {
      name: "ContactUs",
     
    },
    {
      name: "Sign Up",
      
    },
    {
      name: "Sign In",
      
    },
    {
      name: "SubscriptionPage",
      
    },
  ];
  const [selectvalue,setselectvalue] = useState('/')
  const navigate = useNavigate()
  const handlechange  = (e)=>{
    setselectvalue(e.target.value)
    navigate(`/${e.tagret.value}`)
  }
  return (
    <div className={Style.box}>
       <select onChange={handlechange} style={{ border: 'none' }}>
      {helpCenter.map((el, i) => (
           <option value={el.link}>{el.name}</option>
      ))}
      </select>
    </div>
  );
};

export default HelpCenter;
