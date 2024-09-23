// Service.js

import React from 'react';
import Style from './Service.module.css';
import images from '../../img';

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        {[ 
          { img: images.service1, step: 1, title: "Filter & Discover", description: "Connect with wallet, discover, buy NFTs, sell your NFTs with real-time money" },
          { img: images.service2, step: 2, title: "Connect Wallet", description: "Easily link your wallet for seamless transactions" },
          { img: images.service3, step: 3, title: "Start Trading", description: "Buy, sell, and trade NFTs with ease" },
          { img: images.service4, step: 4, title: "Join the Community", description: "Engage with other NFT enthusiasts and artists" },
        ].map((service, index) => (
          <div key={index} className={Style.service_box_item}>
            <img src={service.img} alt={service.title} className={Style.service_img} />
            <p className={Style.service_box_item_step}>
              <span>Step {service.step}</span>
            </p>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
