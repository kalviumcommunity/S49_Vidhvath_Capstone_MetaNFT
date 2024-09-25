import React from 'react';

// INTERNAL IMPORTS
import Style from '../styles/AboutUs.module.css';
import { Brand } from '../components/componentindex';
import images from '../img'; // Make sure this imports your images correctly

const AboutUs = () => {
    const founderArray = [
        { 
            name: "Vidhvath J", 
            position: "Co-founder and Chief Executive", 
            bio: "Vidhvath is a visionary leader with over a decade of experience in the tech industry. He is passionate about leveraging technology to create meaningful solutions.", 
            image: "https://media.licdn.com/dms/image/v2/D5603AQEBZ_jnJ0gYnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721583430000?e=1732752000&v=beta&t=l1Rfffjq_-yqqeyQIEndYCH6EF1JGwXzmvdNCsfkrlk" // Replace with the actual path to the image
        },
        { 
            name: "Prabahas", 
            position: "Co-founder and CTO", 
            bio: "With a strong background in software engineering, Prabahas leads the technical direction of our company, ensuring innovative and robust solutions.", 
            image: "https://media.licdn.com/dms/image/v2/D4E03AQG4RGaHc8ojjw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701773948139?e=1732752000&v=beta&t=f3GEqLZNtdfS0hpUadt9JiiyrX8SC6cBDMmAMnTcL0I"// Replace with the actual path to the image
        },
        { 
            name: "Pawan", 
            position: "Chief Marketing Officer", 
            bio: "Pawan is an expert in digital marketing strategies and has successfully scaled several startups, bringing them to the forefront of the industry.", 
            image: images.founder_3 // Replace with the actual path to the image
        },
        { 
            name: "Akshath", 
            position: "Chief Operating Officer", 
            bio: "Akshath has a knack for operational excellence and drives the daily operations of the company, ensuring everything runs smoothly.", 
            image: images.founder_4 // Replace with the actual path to the image
        },
    ];

    const factsArray = [
        {
            title: "10 million",
            info: "Articles have been published around the world (as of Sept. 30). We strive to provide diverse perspectives and in-depth insights on various topics.",
        },
        {
            title: "20 million",
            info: "Downloads of our mobile app (as of Sept. 30). Our app provides users with a seamless experience and easy access to our rich content library.",
        },
        {
            title: "30 million",
            info: "Social media followers across all platforms (as of Sept. 30). We have built a vibrant community that engages with our content daily.",
        },
        {
            title: "100+",
            info: "Employees dedicated to creating the best content and technology solutions, fostering a collaborative and innovative work environment.",
        },
        {
            title: "5+",
            info: "Years of experience in the industry, driving impact through technology and content creation.",
        },
    ];

    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>About Us</h1>
                        <p>
                            We are impartial and independent, creating distinctive content that informs, educates, and entertains millions of people around the world every day.
                            Our mission is to empower individuals through knowledge and technology, fostering a community of informed and engaged citizens.
                        </p>
                    </div>
                    <div className={Style.aboutus_box_hero_right}>
                        <img src={images.heroImage} alt="Our Vision" className={Style.aboutus_box_hero_right_img} /> {/* Adjust path accordingly */}
                    </div>
                </div>
                <div className={Style.aboutus_box_title}>
                    <h2>Meet Our Founders</h2>
                    <p>
                        Our founders are driven by a shared passion for innovation and a commitment to excellence. They each bring unique expertise and vision to our company.
                    </p>
                </div>
                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((founder, index) => (
                            <div className={Style.aboutus_box_founder_box_img} key={index}>
                                <img src={founder.image} alt={founder.name} width={500} height={500} className={Style.aboutus_box_founder_box_img_img} />
                                <h3>{founder.name}</h3>
                                <p>{founder.position}</p>
                                <p className={Style.aboutus_box_founder_bio}>{founder.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.aboutus_box_title}>
                    <h2>Fast Facts</h2>
                    <p>
                        We are proud of our achievements and the impact we have made in the industry. Here are some of our significant milestones:
                    </p>
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
