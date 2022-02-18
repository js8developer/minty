require("@nomiclabs/hardhat-waffle");

const dotenv = require('dotenv');
dotenv.config();

const fs = require("fs");
const deployingWalletPrivateKey = fs.readFileSync(".secret").toString() // Test wallet... no real monies

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [deployingWalletPrivateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [deployingWalletPrivateKey]
    }
  },
};
