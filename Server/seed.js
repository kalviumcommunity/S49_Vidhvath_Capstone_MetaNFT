// seed.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vidhvathj2005:7EqeWFhDsFbRP6Zr@cluster0.ljaja.mongodb.net/nftMarketplace?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const nftSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
});

const NFT = mongoose.model('NFT', nftSchema);

const seedNFTs = async () => {
  const nftList = [
    { 
      name: 'Moonbird #245', 
      price: '35 ETH', 
      image: 'https://th.bing.com/th/id/OIP.0Pk0hf4B5TyNbAPxlN40dwHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
    },
    { 
      name: 'Invisible Friend #1721', 
      price: '12 ETH', 
      image: 'https://sothebys-md.brightspotcdn.com/4d/12/64062a9c4896afa40a8df714efd8/if4954.gif' 
    },
    { 
      name: 'VeeFriend #88', 
      price: '20 ETH', 
      image: 'https://th.bing.com/th/id/OIP.AaO8l31oRizcI3GP6iuIGAHaHa?rs=1&pid=ImgDetMain' 
    },
    { 
      name: 'World of Women #9023', 
      price: '7 ETH', 
      image: 'https://nftlately.com/wp-content/uploads/2022/03/rainbow-woman-nft-by-world-of-women.jpg' 
    },
    { 
      name: 'Rumble Kong League #5472', 
      price: '15 ETH', 
      image: 'https://openseauserdata.com/files/bf01f1bc6fa1cd0aa35bd978382bb880.gif' 
    },
    { 
      name: 'Creature World #1990', 
      price: '8 ETH', 
      image: 'https://th.bing.com/th/id/OIP.AJXGTD0XzZuBN4gxezZX3AHaHa?rs=1&pid=ImgDetMain' 
    },
    { 
      name: 'Lazy Lions #6902', 
      price: '10.5 ETH', 
      image: 'https://th.bing.com/th/id/OIP.pBg-CK2TVGoPH1zJosI8EAHaHa?rs=1&pid=ImgDetMain' 
    },
    { 
      name: 'DeadFellaz #1468', 
      price: '5 ETH', 
      image: 'https://th.bing.com/th/id/OIP.M-wEIFmvobHsbXogWj1lPAHaHa?rs=1&pid=ImgDetMain' 
    },
    { 
      name: 'Kaiju Kingz #321', 
      price: '18 ETH', 
      image: 'https://th.bing.com/th/id/OIP.-kMEfUAbYSc58a1HCMAZ3AHaHa?rs=1&pid=ImgDetMain0' 
    },
  ];

  await NFT.deleteMany(); // Clear existing data
  await NFT.insertMany(nftList); // Insert new data

  console.log('NFTs seeded successfully!');
  mongoose.connection.close();
};

seedNFTs();
