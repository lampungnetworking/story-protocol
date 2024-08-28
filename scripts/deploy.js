const { ethers } = require("hardhat");

async function main() {
  const Greetings = await ethers.getContractFactory("Greetings");
  const initialGreeting = "Hello, there!";
  const greetings = await Greetings.deploy(initialGreeting);
  await greetings.waitForDeployment();
  console.log("Greetings Contract Deployed to:", greetings.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
