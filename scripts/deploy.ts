import { ethers } from "hardhat";

async function main() {

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  const Nft = await ethers.getContractFactory("NftTesting");
  const nft = await Nft.deploy();

  await nft.deployed();
  const id = await nft.awardItem("0x9c4201F39CeB69E27B03C5B526c973038361aC2A", "C:/Users/abrown/token13.json");
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
