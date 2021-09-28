require("babel-register");
require("babel-polyfill");

const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const secrets = JSON.parse(
  fs
    .readFileSync(".secrets.json")
    .toString()
    .trim()
);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    ropsten: {
      networkCheckTimeout: 10000,
      provider: () => {
        return new HDWalletProvider(
          secrets.mnemonic,
          `wss://ropsten.infura.io/ws/v3/${secrets.projectId}`
        );
      },
      host: "http://harsha711.github.io/",
      network_id: "*",
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
