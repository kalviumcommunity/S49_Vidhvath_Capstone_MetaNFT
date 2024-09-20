import React, { useState } from 'react';

// Import ICON
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';

// Internal Imports
import Style from './NavBar.module.css';
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button } from '../componentindex';
import images from '../../img';

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    setDiscover(btnText === 'Discover');
    setHelp(btnText === 'Help Center');
    setNotification(false);
    setProfile(false);
  };

  const openNotification = () => {
    setNotification(!notification);
    setDiscover(false);
    setHelp(false);
    setProfile(false);
  };

  const openProfile = () => {
    setProfile(!profile);
    setHelp(false);
    setDiscover(false);
    setNotification(false);
  };

  const toggleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <img src={images.logo1} alt="NFT MARKET PLACE" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch className={Style.search_con} />
            </div>
          </div>
        </div>

        {/* //END OF LEFT SECTION */}

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            
            <p onClick={openMenu} > <Discover /></p>
            
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={openMenu}> <HelpCenter /></p>
            
          </div>

          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={openNotification} />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" handleClick={() => {}} />
          </div>

          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <img
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                className={Style.navbar_container_right_profile}
                onClick={openProfile}
              />
              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={toggleSideMenu} />
          </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu}  />
        </div>
      )}
    </div>
  );
};

export default NavBar;
