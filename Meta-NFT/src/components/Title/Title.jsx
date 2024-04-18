import React from 'react'

//INTERNAL IMPORT
import Styles from "./Title.module.css";
import images from "../../img";

const Title = ({ heading, paragraph}) => {
  return (
    <div className={Styles.title}>
        <div className={Styles.title_box}>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Title