import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  const helpCenter = [
    { name: "About Us", key: "AboutUs" },
    { name: "Contact Us", key: "ContactUs" },
    { name: "Sign Up", key: "SignUp" },
    { name: "Sign In", key: "SignIn" },
    { name: "Subscription Page", key: "SubscriptionPage" },
  ];

  const [selectedComponent, setSelectedComponent] = useState("");
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    setSelectedComponent(e.key);
    navigate(`/${e.key}`);
  };

  const helpMenu = (
    <Menu onClick={handleMenuClick}>
      {helpCenter.map((item) => (
        <Menu.Item key={item.key}>{item.name}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={Style.box}>
      <Dropdown overlay={helpMenu} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          {selectedComponent || "Help Center"} <span style={{ marginLeft: 8 }}></span>
        </a>
      </Dropdown>
    </div>
  );
};

export default HelpCenter;
