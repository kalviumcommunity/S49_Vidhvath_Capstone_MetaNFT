import React from 'react';

// INTERNAL IMPORT
import Style from '../styles/AboutUs.module.css';
import { Brand } from '../components/componentindex';
// import MdImageSearch from '../img/MdImageSearch'; // Assuming MdImageSearch is the correct import
import image from '../img'; // Assuming this import is needed

const AboutUs = () => {
    const founderArray = [
        { name: "Vidhvath J", position: "Co-founder and Chief Executive", images: image }, // Assuming image is the correct reference for founder image
        { name: "Vidhvath J", position: "Co-founder and Chief Executive", images: image },
        { name: "Vidhvath J", position: "Co-founder and Chief Executive", images: image },
        { name: "Vidhvath J", position: "Co-founder and Chief Executive", images: image },
    ];

    const factsArray = [
        {
            title: "10 million",
            info: "Articles have been published around the world (as of Sept. 30)",
        },
        {
            title: "10 million",
            info: "Articles have been published around the world (as of Sept. 30)",
        },
        {
            title: "10 million",
            info: "Articles have been published around the world (as of Sept. 30)",
        },
    ];

    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>About Us.</h1>
                        <p>We're impartial and independent, and every day we create distinctive, content which informs, educates, and entertains millions of people around the world.</p>
                    </div>
                    <div className={Style.aboutus_box_hero_right}>
                        <img src={MdImageSearch.hero2} alt="" />
                    </div>
                </div>
                <div className={Style.aboutus_box_title}>
                    <h2>Founder</h2>
                    <p>We're impartial and independent, and every day we create distinctive, world-class programs and content.</p>
                </div>
                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.aboutus_box_founder_box_img} key={i}>
                                <img src={el.images} alt={el.name} width={500} height={500} className={Style.aboutus_box_founder_box_img_img} />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.aboutus_box_title}>
                    <h2>Fast Facts</h2>
                    <p>We're impartial and independent, and every day we create distinctive, world-class programs and content.</p>
                </div>
                <div className={Style.aboutus_box_facts}>
                    <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutus_box_facts_box_info} key={i}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Brand />
        </div>
    );
};

export default AboutUs;
