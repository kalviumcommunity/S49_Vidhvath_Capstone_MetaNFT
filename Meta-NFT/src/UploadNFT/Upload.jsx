import React , {useState} from 'react'
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md'
import {FaPercent} from 'react-icons/fa'
import { AiTwotonePropertySafety } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'

//INTERNAL IMPORT
import Style from './Upload.module.css'
import formStyle from '../AccountPage/Form/Form.module.css'
import images from '../img'
import { Button } from '../components/componentindex'
import { DropZone } from '../UploadNFT/UploadNFTindex'

const Upload = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setroyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [Category, setcategory] = useState(0);

  const categoryArry = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_4,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Digital",
    },
    {
      image: images.nft_image_1,
      category: "Photography",
    },
    {
      image: images.nft_image_2,
      category: "Music",
    },
    
    
  ]
  return (
    <div className={Styleupload}>
      <DropZone title="JPG, PNG, WEBM , MAX 100MB"
      heading="Drag & drop file"
      subHeading="or Browse media on your device"
      itemName={itemName}
      website={website}
      description={description}
      royalties={royalties}
      fileSize={fileSize}
      category={category}
      image={images.upload}
      />

      <div className={Style.upload_box}>
        <div className={Style.Form_box_input}>
          <label htmlFor="name">Item Name</label>
          <input 
          type="text" 
          placeholder="Vidhvath J"
          className={Style.Form_box_input_userName}
          onChange={(e)=> setItemName(e.target.value)}
           />
        </div>
        <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="website"
              onChange={(e) => setItemName(e.target.value)} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Upload