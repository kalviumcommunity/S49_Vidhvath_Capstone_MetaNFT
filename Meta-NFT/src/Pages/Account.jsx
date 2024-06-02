import React, { useState, useMemo, useCallback, useContext} from 'react'
import { useDropzone } from 'react-dropzone'



//INTERNAL IMPORT
import Style from '../styles/Account.module.css'
import images from '../img'
import Form from '../AccountPage/Form/Form'

const Account = () => {
    const [fileUrl, setFileUrl] = useState(null);

    const onDrop = useCallback(async(acceptedFile)=> {
        setFileUrl(acceptedFile[0]);

    }, []);


    const {getRootProps, getInputProps} =  useDropzone({
        onDrop,
        accept: "image/*",
        maxSize: 5000000,
    })
  return (
    <div className={Style.account}>
        <div className={Style.account_info}>
            <h1>Profile settings</h1>
            <div className={Style.account_box_img} {...getRootProps()}>
                <input {...getInputProps()}/>
                <img src={images.user1} alt="account upload" width={150} height={150} className={Style.account_box_img_img}/>
            </div>
            <Form/>
            <p>You can set preferred display name, create your own NFT and can have your personal settings</p>
        </div>
        <div className={Style.account_box}>
           
            <div className={Style.account_box_from}></div>
        </div>
    </div>
  )
}

export default Account