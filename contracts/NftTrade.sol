// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NftTrade {
  IERC20 public _token;
  IERC721 public _nft;

  constructor() {
    _token = IERC20(0x1b5d50493c85dE2F8D7825A38c5A0E9C78cE649C);
    _nft = IERC721(0x001DCA988bbC3852D78d5575FbD85B55C240EC53);
  }

  function _buyNft(address seller, address buyer, uint256 tokenId) public {
    _token.transfer(seller, 1);
    _nft.transferFrom(buyer, seller, tokenId);
  }
}