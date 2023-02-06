
const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory("EpicNFT");
    const nftContract = await contractFactory.deploy();
    await nftContract.deployed();

    console.log("Contract deployed to", nftContract.address);// 0xd2061CaB2451d88bDe6d8bd5a3ce3656B91A5DeA
    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #1")
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();