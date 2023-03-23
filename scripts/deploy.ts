import { ethers } from "hardhat";

async function main() {
  // const Nft = await ethers.getContractFactory("NftTesting");
  // const nft = await Nft.deploy();

  // await nft.deployed();
  // const id = await nft.awardItem("0xD957fFCAC4d6E0DC941B44B6316527e3CCA4ef5B", "C:/Users/abrown/token7.json");
  // console.log(
  //   id
  // );

  const NftTrade = await ethers.getContractFactory("NftTrade");
  const nftTrade = await NftTrade.deploy();

  await nftTrade.deployed();
  const id = await nftTrade.buyNft("0xD957fFCAC4d6E0DC941B44B6316527e3CCA4ef5B", "0xdE7F9087CfD6B3239E0F5c598847c2009c8FeF33", 0, 10);
  console.log(
    id
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
