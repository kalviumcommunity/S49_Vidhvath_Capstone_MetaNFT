import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NFTPurchase.css';

const NFTPurchase = () => {
  const [nftList, setNftList] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/nfts');
        setNftList(response.data);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchNFTs();
  }, []);

  const buyNFT = () => {
    if (!selectedNFT) return;

    setLoading(true);
    setTimeout(() => {
      navigate(`/payment-status/success`);
    }, 1000);
  };

  return (
    <div className="nft-purchase-container">
      <h2>Buy an NFT</h2>
      <div className="nft-list">
        {nftList.map((nft) => (
          <div key={nft._id} className={`nft-item ${selectedNFT?._id === nft._id ? 'selected' : ''}`}>
            <img src={nft.image} alt={nft.name} />
            <h3>{nft.name}</h3>
            <p>Price: {nft.price} ETH</p>
            <button onClick={() => setSelectedNFT(nft)}>
              {selectedNFT?._id === nft._id ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>
      <button onClick={buyNFT} disabled={loading || !selectedNFT}>
        {loading ? 'Processing...' : selectedNFT ? `Buy ${selectedNFT.name}` : 'Select an NFT'}
      </button>
    </div>
  );
};

export default NFTPurchase;
