import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

// INTERNAL IMPORT
import Style from './Slider.module.css';
import SliderCard from './SliderCard/SliderCard'; // Ensure this path is correct

const Slider = () => {
    const initialSliderArray = [
        {
            id: 1,
            title: "Cosmic Dance",
            currentBid: "1.000 ETH",
            remainingTime: 3 * 60 * 60 + 15 * 60 + 45, // in seconds
            imageUrl: "https://i.pinimg.com/originals/84/e3/3c/84e33c1c054ca301887aa838724bc765.gif"
        },
        {
            id: 2,
            title: "Digital Graffiti",
            currentBid: "2.500 ETH",
            remainingTime: 1 * 60 * 60 + 45 * 60 + 20, // in seconds
            imageUrl: "https://media1.giphy.com/media/8YFlHvU9J1B5vOH0ys/giphy.gif"
        },
        {
            id: 3,
            title: "Ocean Serenity",
            currentBid: "0.750 ETH",
            remainingTime: 2 * 60 * 60 + 10 * 60 + 30, // in seconds
            imageUrl: "https://prod-image-cdn.tensor.trade/images/400x400/freeze=false/https://creator-hub-prod.s3.us-east-2.amazonaws.com/vessels_pfp_1663239268958.gif"
        },
        {
            id: 4,
            title: "Abstract Dreams",
            currentBid: "3.200 ETH",
            remainingTime: 4 * 60 * 60 + 50 * 60 + 10, // in seconds
            imageUrl: "https://media.tenor.com/W0UuRhPpavUAAAAd/dreams.gif"
        },
        {
            id: 5,
            title: "Futuristic Cityscape",
            currentBid: "5.000 ETH",
            remainingTime: 1 * 24 * 60 * 60 + 12 * 60 * 60 + 5 * 60, // in seconds
            imageUrl: "https://cdn.dribbble.com/users/1454037/screenshots/5360170/apartments-animated-dribbler-top.gif"
        },
        {
            id: 6,
            title: "Nature's Symphony",
            currentBid: "4.000 ETH",
            remainingTime: 5 * 60 * 60 + 30 * 60 + 15, // in seconds
            imageUrl: "https://th.bing.com/th/id/OIP.KSen0daQKYaeOMP5VglpPQHaHq?rs=1&pid=ImgDetMain"
        },
    ];

    const [sliderArray, setSliderArray] = useState(initialSliderArray);
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

    useEffect(() => {
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);

        const timer = setInterval(() => {
            setSliderArray((prevArray) =>
                prevArray.map((item) => {
                    if (item.remainingTime > 0) {
                        return { ...item, remainingTime: item.remainingTime - 1 };
                    }
                    return item;
                })
            );
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleScroll = (direction) => {
        const scrollOffset = dragSlider.current.offsetWidth; // Scroll by the width of the slider
        if (direction === 'left') {
            dragSlider.current.scrollLeft -= scrollOffset; // Scroll left
        } else {
            dragSlider.current.scrollLeft += scrollOffset; // Scroll right
        }
    };

    return (
        <div className={Style.slider}>
            <div className={Style.slider_box}>
                <h2>Explore NFTs Video</h2>
                <div className={Style.slider_box_button}>
                    <p>Click on play icon & enjoy NFTs Video</p>
                    <div className={Style.slider_box_button_btn}>
                        <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll('left')}>
                            <TiArrowLeftThick />
                        </div>
                        <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll('right')}>
                            <TiArrowRightThick />
                        </div>
                    </div>
                </div>
                <div className={Style.slider_box_items}>
                    <motion.div
                        className={Style.slider_box_item}
                        ref={dragSlider}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >
                        {sliderArray.map((el) => (
                            <SliderCard
                                key={el.id}
                                title={el.title}
                                currentBid={el.currentBid}
                                remainingTime={formatTime(el.remainingTime)}
                                imageUrl={el.imageUrl}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h : ${minutes}m : ${seconds}s`;
};

export default Slider;
