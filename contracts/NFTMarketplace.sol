// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


import "hardhat/console.sol";

contract NFTMarketplace is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    address payable public owner;

    mapping(uint256 => MarketItem) private _idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only owner of the marketplace can change the listing price"
        );
        _;
    }

    constructor() ERC721("NFT Metavarse Token", "MYNFT") {
        owner = payable(msg.sender);
    }

    function updateListingPrice(uint256 /*_ListingPrice*/) public payable onlyOwner() {
        // Implement listing price update logic here
    }
}
