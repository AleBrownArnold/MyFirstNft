// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NftTrade {
  IERC20 public _token;
  IERC721 public _nft;

  constructor() {
    _token = IERC20(0x2B1E9C405db4Bc32fac6eA92fC8068f5B7dBD152);
    _nft = IERC721(0xC311A53C4a648337Ba63408fd17EAE9E59265B97);
  }

  function buyNft(address seller, address buyer, uint256 tokenId, uint256 amount) public {
    _token.transferFrom(buyer, seller, amount);
    _nft.safeTransferFrom(seller, buyer, tokenId);
  }
}