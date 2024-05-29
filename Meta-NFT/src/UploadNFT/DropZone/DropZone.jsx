import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// INTERNAL IMPORT
import Style from './DropZone.module.css';
import images from '../../img';

const DropZone = ({
  title,
  heading,
  subHeading,
  itemName,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  image,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFileUrl(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 50000000,
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <img
              src={image}
              alt="upload"
              width={100}
              height={100}
              className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <img src={fileUrl} alt="preview" width={200} height={200} />
            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <samp>NFT Name:</samp> {itemName || ""}
                </p>
                <p>
                  <samp>Website:</samp> {website || ""}
                </p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description:</span> {description || ""}
                </p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties:</span> {royalties || ""}
                </p>
                <p>
                  <span>File Size:</span> {fileSize || ""}
                </p>
                <p>
                  <span>Properties:</span> {properties || ""}
                </p>
                <p>
                  <span>Category:</span> {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
