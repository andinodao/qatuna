import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.6",
  networks: {
    goerli: {
      accounts: [],
    },
  },
};

export default config;
