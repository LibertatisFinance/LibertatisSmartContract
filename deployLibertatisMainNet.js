const { ethers, upgrades } = require("hardhat");

async function main() {
  const wethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const factoryAdress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

  const Libertatis = await ethers.getContractFactory("Libertatis");
  const libertatis = await upgrades.deployProxy(Libertatis, [wethAddress, factoryAdress], { initializer: 'initialize', redeployImplementation: 'never' });
  await libertatis.waitForDeployment();
  console.log("Libertatis deployed to:", await libertatis.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });