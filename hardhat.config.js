require("@nomiclabs/hardhat-waffle");

require('dotenv').config();


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  console.log("Key: ", process.env.ACCOUNT_KEY);
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/2315cfc3d495488a8f95640d59fa92f3",
      accounts: [`0x${process.env.ACCOUNT_KEY}`]
    }
  }
};
