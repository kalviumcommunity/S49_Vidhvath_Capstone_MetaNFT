import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import Style from './Discover.module.css';

export const Discover = () => {
  const [selectedComponent, setSelectedComponent] = useState("");
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    setSelectedComponent(e.key);
    navigate(e.key);
  };

  const discoverMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Search">Search</Menu.Item>
      <Menu.Item key="Collection">Collection</Menu.Item>
      <Menu.Item key="NFTDetails">NFT Details</Menu.Item>
      <Menu.Item key="Account">Account</Menu.Item>
      <Menu.Item key="UploadNFT">Upload NFT</Menu.Item>
      <Menu.Item key="ConnectWallet">Connect Wallet</Menu.Item>
      <Menu.Item key="Blog">Blog</Menu.Item>
    </Menu>
  );

  return (
    <div className={Style.box}>
      <Dropdown overlay={discoverMenu} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          {selectedComponent} <span style={{ marginLeft: 8 }}>Discover </span>
        </a>
      </Dropdown>
    </div>
  );
};
