import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

// INTERNAL IMPORT
import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "ContactUs",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  
  return (
    <div className={Style.box}>
       <select style={{ border: 'none' }}>
      {helpCenter.map((el, i) => (
           <option>{el.name}</option>
       
      ))}
      </select>
    </div>
  );
};

export default HelpCenter;
