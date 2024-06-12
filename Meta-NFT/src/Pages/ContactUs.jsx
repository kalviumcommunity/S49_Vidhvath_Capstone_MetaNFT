import React from 'react';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';

// INTERNAL IMPORT
import Style from '../styles/ContactUs.module.css';
import formStyle from '../AccountPage/Form/Form.module.css';
import { Button } from '../components/componentindex';

const ContactUs = () => {
  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>Contact</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_left}>
           
            <div className={Style.contactus_box_box_left_item}>
              <h3>EMAIL</h3>
              <p>vidhvathj.2005@gmail.com</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>Phone</h3>
              <p>+91 9036272250</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>Socials</h3>
              <div className={Style.social_icons}>
                <a href="#"><TiSocialFacebook /></a>
                <a href="#"><TiSocialInstagram /></a>
                <a href="https://www.youtube.com/channel/UChoM8rve8i-zZkWzlr2HFAQ"><TiSocialYoutube /></a>
                <a href="https://www.linkedin.com/in/vidhvath-j/"><TiSocialLinkedin /></a>
                <a href="https://x.com/VidhvathJ"><TiSocialTwitter /></a>
              </div>
            </div>
          </div>
          <div className={Style.contactus_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Username</label>
                <input type="text" placeholder='enter your name ' className={formStyle.Form_box_input_userName} />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder='Enter your email' />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="5" placeholder='Tell us something about yourself in a few words'></textarea>
              </div>
              <Button btnName="Send message" handleClick={() => {}} classStyle={Style.button} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
