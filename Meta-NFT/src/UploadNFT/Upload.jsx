import React, { useState } from 'react';
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

// INTERNAL IMPORT
import Style from './Upload.module.css';
import formStyle from '../AccountPage/Form/Form.module.css';
import images from '../img';
import { Button } from '../components/componentindex';
import { DropZone } from '../UploadNFT/UploadNFTindex';

const Upload = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");

  const categoryArray = [
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
  ];

  return (
    <div className={Style.upload}>
      <DropZone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        itemName={itemName}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        image={images.upload}
      />

      <div className={Style.upload_box}>
        <div className={Style.Form_box_input}>
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            placeholder="Item Name"
            className={Style.Form_box_input_userName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className={Style.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={Style.Form_box_input_box}>
            <div className={Style.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="Website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <p className={Style.upload_box_input_para}>It will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details</p>
        </div>

        <div className={Style.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Something about yourself in few words"
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>The description will be included on the item's detail page underneath its image. Markdown syntax is supported</p>
        </div>

        <div className={Style.Form_box_input}>
          <label htmlFor="royalties">Royalties</label>
          <div className={Style.Form_box_input_box}>
            <div className={Style.Form_box_input_box_icon}>
              <FaPercent />
            </div>
            <input
              type="text"
              placeholder="Royalties"
              onChange={(e) => setRoyalties(e.target.value)}
            />
          </div>
        </div>

        <div className={Style.Form_box_input}>
          <label htmlFor="fileSize">File Size</label>
          <div className={Style.Form_box_input_box}>
            <div className={Style.Form_box_input_box_icon}>
              <MdOutlineAttachFile />
            </div>
            <input
              type="text"
              placeholder="File Size"
              onChange={(e) => setFileSize(e.target.value)}
            />
          </div>
        </div>

        <div className={Style.Form_box_input}>
          <label htmlFor="category">Category</label>
          <div className={Style.Form_box_input_box}>
            <select onChange={(e) => setCategory(e.target.value)}>
              {categoryArray.map((item, index) => (
                <option key={index} value={index}>
                  {item.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="collection">Choose collection</label>
          <p className={Style.upload_box_input_para}>Choose an exciting collection or create a new one</p>
          <div className={Style.upload_box_slider_div}>
            {categoryArray.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${active === i + 1 ? Style.active : ""}`}
                key={i + 1}
                onClick={() => {
                  setActive(i + 1);
                  setCategory(el.category);
                }}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <img
                      src={el.image}
                      alt="background"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Crypto Legend - Professor</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.Form_box_input_social}>
          <div className={Style.Form_box_input}>
            <label htmlFor="properties">Properties</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Properties"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>

          <div className={Style.upload_box_btn}>
            <Button
              btnName="Upload"
              handleClick={() => {}}
              classStyle={Style.upload_box_btn_style}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
