const { ethers, upgrades } = require('hardhat');

async function main() {
  // //1. V1 배포를 위한 contract Factory 생성
  // const MyTokenV1 = await ethers.getContractFactory('MyTokenV1');
  
  // //2. uups 명시해서 deploy proxy 호출
  // const proxy = await upgrades.deployProxy(MyTokenV1,{ kind: 'uups' });
  // const proxyAddress = await proxy.getAddress();
  // console.log("Contract address:", proxyAddress);


  //3. V2로 업그레이드
  const MyTokenV2 = await ethers.getContractFactory('MyTokenV2');
  await upgrades.upgradeProxy('0xe7f1725e7734ce288f8367e1bb143e90bb3f0512', MyTokenV2);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// async function main() {
//   // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   // const unlockTime = currentTimestampInSeconds + 60;

//   // const lockedAmount = ethers.parseEther("0.001");

//   // const lock = await ethers.deployContract("Lock", [unlockTime], {
//   //   value: lockedAmount,
//   // });

//   // await lock.waitForDeployment();

//   // console.log(
//   //   `Lock with ${ethers.formatEther(
//   //     lockedAmount
//   //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   // );
 
  
//   //1. original deploy
//   // const token = await ethers.deployContract("OriginalContract");

//   // console.log("Contract address:", await token.getAddress());

//   //0x5FbDB2315678afecb367f032d93F642f64180aa3

//   //2. original address를 담아서 proxy 배포
//   const proxy = await ethers.deployContract("ProxyContract",['0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9']);

//   console.log("Contract address:", await proxy.getAddress());


//   //3. upgradeContract 배포
//   // const upgradeContract = await ethers.deployContract("UpgradedContract");

//   // console.log("upgradeContract address:", await upgradeContract.getAddress());



// }