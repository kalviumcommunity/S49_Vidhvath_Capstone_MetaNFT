// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
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

// API endpoint to get NFTs
app.get('/api/nfts', async (req, res) => {
  try {
    const nfts = await NFT.find();
    res.json(nfts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
