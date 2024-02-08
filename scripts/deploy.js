const { ethers } = require("hardhat");

async function main() {
  const ChimpzeeCoin = await ethers.getContractFactory("ChimpzeeCoin");
  console.log("Deploying coin contract...");
  const chimpzeeCoin = await ChimpzeeCoin.deploy(
    "ChimpzeeCoin",
    "CHMPZ",
    20000000000
  );
  console.log("Done!");

  console.log("----------------------");
  console.log("Coin: ", chimpzeeCoin.address);
}

main()
  .then(() => {
    console.log("Completed normally.");
    process.exit();
  })
  .catch((err) => {
    console.log("Error exit!");
    console.log(err);
    console.log("-----\nnested error:", { ...err.error });
    process.exit(1);
  });
