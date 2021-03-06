
const hre = require("hardhat");

async function main() {
  const Marketplace = await hre.ethers.getContractFactory('Marketplace');
  const marketplace = await Marketplace.deploy();
  await marketplace.deployed();
  console.log('marketplace deployed to: ', marketplace.address);

  const NFT = await hre.ethers.getContractFactory('NFT');
  const nft = await NFT.deploy(marketplace.address)
  await nft.deployed();
  console.log('nft deployed to: ', nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
