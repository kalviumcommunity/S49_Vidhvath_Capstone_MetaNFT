// NavBar.js
import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
import { UserButton } from '@clerk/clerk-react';
import Style from './NavBar.module.css';
import { Discover, HelpCenter, SideBar } from './index';
import images from '../../img';

const NavBar = () => {
  const [notification, setNotification] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openNotification = () => {
    setNotification(!notification);
  };

  const toggleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <img src={images.logo1} alt="NFT MARKET PLACE" />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch className={Style.search_con} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p><Discover /></p>
          </div>
          <div className={Style.navbar_container_right_help}>
            <p><HelpCenter /></p>
          </div>
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={openNotification} />
          </div>
          <div className={Style.navbar_container_right_profile_box}>
            <UserButton className={Style.clerkUserButton} />
          </div>
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={toggleSideMenu} />
          </div>
        </div>
      </div>
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
