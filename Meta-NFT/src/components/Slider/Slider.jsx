import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

// INTERNAL IMPORT
import Style from './Slider.module.css';
import SliderCard from './SliderCard/SliderCard'; // Assuming SliderCard is a component defined elsewhere

const Slider = () => {
    const sliderArray = [1, 2, 3, 4, 5, 6, 7];
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

    useEffect(() => {
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    }, []);

    const handleScroll = (direction) => {
        const scrollOffset = 200; // Adjust this value according to your design
        if (direction === 'left') {
            dragSlider.current.scrollLeft -= scrollOffset;
        } else {
            dragSlider.current.scrollLeft += scrollOffset;
        }
    };

    return (
        <div className={Style.slider}>
            <div className={Style.slider_box}>
                <h2>Explore NFTs Video</h2>
                <div className={Style.slider_box_button}>
                    <p>Click on play icon & enjoy Nfts Video</p>
                    <div className={Style.slider_box_button_btn}>
                        <div className={Style.slider_box_button_btn_icon}>
                            <TiArrowLeftThick onClick={() => handleScroll('left')} />
                        </div>
                        <div className={Style.slider_box_button_btn_icon}>
                            <TiArrowRightThick onClick={() => handleScroll('right')} />
                        </div>
                    </div>
                </div>
                <div className={Style.slider_box_items}>
                    <motion.div className={Style.slider_box_item} ref={dragSlider} drag="x" dragConstraints={{ right: 0, left: -width }}>
                        {sliderArray.map((el, i) => (
                            <SliderCard key={i + 1} className={Style.slider_item}>
                                {el}
                            </SliderCard>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
