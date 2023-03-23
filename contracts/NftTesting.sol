// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract NftTesting is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter public _tokenIds;

  constructor() ERC721("nft721Test", "N721") { }

  function awardItem(address receiver, string memory tokenURI) public returns (uint256) {
    uint256 newItemId = _tokenIds.current();
    
    _safeMint(receiver, newItemId);
    _setTokenURI(newItemId, tokenURI);

    _tokenIds.increment();
    return newItemId;
  }
}