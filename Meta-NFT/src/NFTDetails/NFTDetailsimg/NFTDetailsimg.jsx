import React from 'react';
import NFTDetailsimg from './NFTDetailsimg'; // Adjust the import path accordingly

const App = () => {
  const nftData = [
    {
      title: 'MetaNFT #1',
      image: 'path/to/nft_image_1.jpg', // Replace with actual image path
      description: 'Its Time for MetaNFT #1',
      dimension: '2000 X 2000 px',
      size: '685KB',
      contactAddress: '0xdaffanjkbrafman425439ssnf',
      tokenId: '10003000372864',
      likes: 23,
    },
    {
      title: 'MetaNFT #2',
      image: 'path/to/nft_image_2.jpg', // Replace with actual image path
      description: 'Its Time for MetaNFT #2',
      dimension: '2048 X 2048 px',
      size: '700KB',
      contactAddress: '0xdaffanjkbrafman425439ssnf',
      tokenId: '10003000372865',
      likes: 15,
    },
    {
      title: 'MetaNFT #3',
      image: 'path/to/nft_image_3.jpg', // Replace with actual image path
      description: 'Its Time for MetaNFT #3',
      dimension: '1920 X 1080 px',
      size: '650KB',
      contactAddress: '0xdaffanjkbrafman425439ssnf',
      tokenId: '10003000372866',
      likes: 10,
    },
  ];

  return (
    <div>
      {nftData.map((nft, index) => (
        <NFTDetailsimg key={index} nft={nft} />
      ))}
    </div>
  );
};

export default App;
