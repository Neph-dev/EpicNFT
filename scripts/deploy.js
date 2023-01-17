const main = async () => {
    const getNFTContractFactory = await hre.ethers.getContractFactory("EpicNFT")
    const nftContract = await getNFTContractFactory.deploy()
    await nftContract.deployed()

    console.log("Contract deployed to:", nftContract.address)

    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #1")
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

runMain()