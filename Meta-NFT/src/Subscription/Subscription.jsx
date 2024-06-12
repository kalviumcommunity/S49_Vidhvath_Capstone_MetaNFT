import React from 'react';
import { TiTick } from 'react-icons/ti';

// INTERNAL IMPORT
import { Button } from '../components/componentindex';
import Style from '../styles/subscription.module.css';  // Correct import statement for styles

const Subscription = ({ el }) => {
  return (
    <div className={Style.SubscriptionBox}>
      <div className={Style.Subscription_box}>
        <span className={Style.SubscriptionBox_box_span}>{el.plan}</span>
        {el.popular && (
          <small className={Style.Subscription_box_small}>{el.popular}</small>
        )}
        <p className={Style.SubscriptionBox_box_small_para}>{el.price}</p>
        <div className={Style.SubscriptionBox_box_info}>
          {el.service.map((service, index) => (
            <p className={Style.SubscriptionBox_box_info_para} key={index}>
              <span>
                <TiTick />
              </span>
              {service}
            </p>
          ))}
        </div>
        <Button btnName="Submit" handleClick={() => {}} classStyle={Style.Button} />
      </div>
    </div>
  );
};

export default Subscription;
