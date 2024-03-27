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
    
    uint256 listingPrice = 0.0015 ether;

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

    function updateListingPrice(uint256 _listingPrice) public payable onlyOwner
     {
       listingPrice = _listingPrice;
     }

     function getListingPrice() public view returns (uint256){
        return listingPrice;
     }

     // Let  create "CREATE NFT TOKEN FUNCTION

     function createToken(string memory tokenURI, uint256 price) public payable returns(uint256){
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId, price);

      return newTokenId;

     }
     //CREATING MARKET ITEMS

     function createMarketItem(uint256 tokenId, uint256 price) private{
        require(price > 0, "Price must be al lest 1");
        require(msg.value == listingPrice, "Price  must be equal to listing price" );

       _idMarketItem[tokenId] = MarketItem(
    tokenId,
    payable(msg.sender),
    payable(address(this)),
    price,
    false
);


        _transfer(msg.sender, address(this), tokenId);

        emit MarketItemCreated(tokenId, msg.sender, address(this), price, false);   

     }

     //FUNCTION FOR RESALE TOKEN
     function resellToken(uint256 tokenId, uint256 price) public payable{
        require(_idMarketItem[tokenId].owner == msg.sender, "Only item owner can perform operations" );

        require(msg.value == listingPrice, "Price must be equal to listing price ");

        _idMarketItem[tokenId].sold = false;
        _idMarketItem[tokenId].price = price;
        _idMarketItem[tokenId].seller = payable(msg.sender);
        _idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);

     } 


     //FUNCTION CREATEMARKETSALE

     function createMarketSale(uint256 tokenId) public payable{

        uint256 price = _idMarketItem[tokenId].price;

        require(msg.value == price, "Please submit the asking price in order to complete the purchase");

        _idMarketItem[tokenId].owner = payable(msg.sender);
        _idMarketItem[tokenId].sold = true;
        _idMarketItem[tokenId].sold = payable(address(0));

        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(_idMarketItem[tokenId].seller).transfer(msg.value);
     }

     //GETTING UNSOLD NFT DATA
     function fetchMarketItem() public view returns(MarketItem[] memory){
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current(); - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for (uint256 i = 0; i < itemCount; i ++){
            if (_idMarketItem[i + 1].owner == address(this)){
                uint256 currentId = i + 1;

                MarketItem storage currentItem = _idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;


     }
     //PURCHASE ITEM
     function fetchMyNFT() public view returns(MarketItem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++){
            if(_idMarketItem[i + 1].owner == msg.sender){
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++){

            if(_idMarketItem[i + 1].owner == msg.sender){
            uint256 currentId = i + 1;
            MarketItem storage currentIndex = _idMarketItem[currentId];
            items[currentIndex] =  currentItem;
            currentIndex += 1;
            }
        }
        return items;
     }

     //SINGULE USER ITEMS
     function fetchItemsListed() public view return(MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        
        for (uint256 i = 0; i < totalCount; i ++){
         if(_idMarketItem[i + 1].seller == msg.sender){
            itemCount += 1;
         }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i=0; i<itemCount; i++) {
            if(_idMarketItem[i + 1].seller == msg.sender){
                uint256 currentId = i + 1;
                MarketItem storage currentItem = _idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
                }
            }
            returns items;
     }    
}
