import React from 'react'
import {  TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from "react-icons/ti";
// import { HiOutlineMall } from 'react-icons/hi'

//INTERNAL IMPORT
import Style from '../styles/ContactUs.module.css'
import formStyle from '../AccountPage/Form/Form.module.css'
import { Button } from '../components/componentindex'

const ContactUs = () => {
  return (
    <div className={Style.contactus}>
        <div className={Style.contactus_box}>
            <h1>Contact</h1>
            <div className={Style.contactus_box_box}>
                <div className={Style.contactus_box_left}>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>ADDRESS</h3>
                        <p>photo booth tattooed prism , portland taiyaki hoodie neural typewriter</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>EMAIL</h3>
                        <p>nc.example@example.com</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>Phone</h3>
                        <p>000-123-456</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>Socials</h3>
                        <a href="#"><TiSocialFacebook/></a>
                        <a href="#"><TiSocialInstagram/></a>
                        <a href="#"><TiSocialYoutube/></a>

                        <a href="#"><TiSocialLinkedin/></a>
                        <a href="#"><TiSocialTwitter/></a>

                    </div>
                </div>
                <div className={Style.contactus_box_box_right}>
                    <form>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="name">Username</label>
                            <input type="text " placeholder='Vidhvath J' className={formStyle.Form_box_input_userName} />
                        </div>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="email">Email</label>
                            <div className={formStyle.Form_box_input_box}>
                                <div className={formStyle.Form_box_input_box_icon}>
                                    <HiOutlineMall />
                                </div>
                                <input type="text" placeholder='Email' />
                            </div>
                        </div>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="description">Description</label>
                            <textarea name="" id="" cols="30" placeholder='soemthing about yourself in few woards'/>
                        </div>
                        <Button btnName="Send message" handleClick={() => {}} classStyle={Style.button}></Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs