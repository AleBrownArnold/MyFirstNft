// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NftTrade {
  IERC20 public _token;
  IERC721 public _nft;

  constructor() {
    _token = IERC20(0x9553af78aAa02Fb3A7Ed20dCb86b029bCdcDcbfc);
    _nft = IERC721(0xBc1D0ec2889C5765F0880276A94004a90e1bC4d1);
  }

  function buyNft(address seller, address buyer, uint256 tokenId, uint256 amount) public {
    if (_token.balanceOf(buyer) > amount) {
      _token.transferFrom(buyer, seller, amount);
      _nft.transferFrom(buyer, seller, tokenId);
    }
  }
}