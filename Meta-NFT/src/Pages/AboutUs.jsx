import React from 'react';

// INTERNAL IMPORTS
import Style from '../styles/AboutUs.module.css';
import { Brand } from '../components/componentindex';
import image from '../img'

const AboutUs = () => {
    const founderArray = [
        { name: "Vidhvath J", position: "Co-founder and Chief Executive", },
        { name: "John Doe", position: "Co-founder and CTO",  },
        { name: "Jane Smith", position: "Chief Marketing Officer",  },
        { name: "Alex Johnson", position: "Chief Operating Officer",  },
    ];

    const factsArray = [
        {
            title: "10 million",
            info: "Articles have been published around the world (as of Sept. 30)",
        },
        {
            title: "20 million",
            info: "Downloads of our mobile app (as of Sept. 30)",
        },
        {
            title: "30 million",
            info: "Social media followers across all platforms (as of Sept. 30)",
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
                        
                    </div>
                </div>
                <div className={Style.aboutus_box_title}>
                    <h2>Founder</h2>
                    <p>We're impartial and independent, and every day we create distinctive, world-class programs and content.</p>
                </div>
                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((founder, index) => (
                            <div className={Style.aboutus_box_founder_box_img} key={index}>
                                <img src={founder.image} alt={founder.name} width={500} height={500} className={Style.aboutus_box_founder_box_img_img} />
                                <h3>{founder.name}</h3>
                                <p>{founder.position}</p>
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
                        {factsArray.map((fact, index) => (
                            <div className={Style.aboutus_box_facts_box_info} key={index}>
                                <h3>{fact.title}</h3>
                                <p>{fact.info}</p>
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
