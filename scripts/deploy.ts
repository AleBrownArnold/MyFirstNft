import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  // Deployment and awardItem execution of nft contract
  // const Nft = await ethers.getContractFactory("NftTesting");
  // const nft = await Nft.deploy();

  // await nft.deployed();
  // const id = await nft.awardItem(owner.address, "C:/Users/abrown/token15.json");
  // const balance = await nft.balanceOf(owner.address);
  // console.log(
  //   `Contract deployed to ${nft.address}`
  // );

  // Deployment of nft trade contract
  const NftTrade = await ethers.getContractFactory("NftTrade");
  const marketTrans = await NftTrade.deploy();

  await marketTrans.deployed();
  console.log(
    marketTrans.address
  );

  // const marketTrans = await ethers.getContractAt('NftTrade', '0x5BA4DC4cDD52c45707e3AFCD0b5753625EfDB64c');
  // const tokenC = await ethers.getContractAt('IERC20', '0x2B1E9C405db4Bc32fac6eA92fC8068f5B7dBD152');
  // const nft = await ethers.getContractAt('NftTesting', '0x09eD188b4ee1212d169ed1f994DB9cd63Cb78722');
  // const tx = await nft.awardItem(owner.address, "tokentesting");
  // const receipt = await tx.wait();
  // const event = await receipt.events![0].getTransactionReceipt();
  // console.log(event);
  // await nft.approve(marketTrans.address, 4);
  // const allowance = await tokenC.allowance("0x08B1565EaD2768F48dA292BBC569fc5E4E4C15E8", marketTrans.address);
  // const allowanceNft = await nft.getApproved(4);
  // console.log('allowance', allowance);
  // console.log('allowanceNft', allowanceNft);
  
  // const tokens = await tokenC.balanceOf('0x08B1565EaD2768F48dA292BBC569fc5E4E4C15E8');
  // const tokensA = await tokenC.balanceOf('0x6657f6664e4d460A1C0c12fCa8Aed5979418103C');
  // const nfts = await nft.balanceOf('0x6657f6664e4d460A1C0c12fCa8Aed5979418103C');
  // const nfts0 = await nft.ownerOf(4);
  // console.log('tokens', tokens);
  // console.log('tokensA', tokensA);
  // console.log('nfts', nfts);
  // console.log('owner', nfts0);
  
  // await marketTrans.buyNft('0x6657f6664e4d460A1C0c12fCa8Aed5979418103C', '0x08B1565EaD2768F48dA292BBC569fc5E4E4C15E8', 4, 10);
  // const balanceAfter = await nft.balanceOf('0x08B1565EaD2768F48dA292BBC569fc5E4E4C15E8');
  // const ownerAfter = await nft.ownerOf(4);
  
  // console.log('ownerAfter', ownerAfter);
  // console.log('balanceAfter', balanceAfter);
}
// BigNumber.from("20000000000000000")
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
