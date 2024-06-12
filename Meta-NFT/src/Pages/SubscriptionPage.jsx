import React from 'react';

// INTERNAL IMPORT
import Subscription from '../Subscription/Subscription';
import Style from '../styles/subscription.module.css';  // Correct import statement for styles

const SubscriptionPage = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: "",
      service: ["Automated Reporting", "Faster Processing", "Customizations"],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "PRO",
      price: "$15/mo",
      popular: "Most Popular",
      service: ["Automated Reporting", "Faster Processing", "Advanced Customizations", "Priority Support"],
      info: "For those who want more features and customizations.",
    }
  ];

  return (
    <div className={Style.subscription}>
      <div className={Style.subscriptionBox}>
        <div className={Style.subscriptionBoxInfo}>
          <h1>Subscription</h1>
          <p>Pricing to fit the needs of any company size.</p>
        </div>
        <div className={Style.subscriptionBoxBox}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
