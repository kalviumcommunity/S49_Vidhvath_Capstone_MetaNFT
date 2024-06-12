import React from 'react';


const AuthorPage = ({ author }) => {
  return (
    <div className={Style.authorPage}>
      <div className={Style.authorProfile}>
        <img src={author.profilePicture} alt={author.name} className={Style.profilePicture} />
        <h1 className={Style.authorName}>{author.name}</h1>
        <p className={Style.authorBio}>{author.bio}</p>
      </div>
      <div className={Style.authorNFTs}>
        <h2>Created NFTs</h2>
        <div className={Style.nftGrid}>
          {author.nfts.map((nft, index) => (
            <div key={index} className={Style.nftCard}>
              <img src={nft.image} alt={nft.title} className={Style.nftImage} />
              <h3 className={Style.nftTitle}>{nft.title}</h3>
              <p className={Style.nftDescription}>{nft.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
