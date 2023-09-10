import { ethers } from "ethers";
import { createContext, useState, useEffect } from "react";

const ForwardContext = createContext();

const contractAbi = [
  "function MintForwardQuick() public view returns (uint256)",
  "function LongFShareAddressesOwned() public view returns (uint256)",
  "function ShortFShareAddressesOwned() public view returns (uint256)",
];

const callContract = async (forwardDetails) => {
  try {
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");

    const contractAddress = "0xFC628dd79137395F3C9744e33b1c5DE554D94882";

    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      provider
    );

    console.log("contract: ", contract);

    const value = await contract.MintForwardQuick(
      forwardDetails.owner,
      forwardDetails.oTokenLong,
      forwardDetails.oTokenShort,
      forwardDetails.collateralAsset,
      forwardDetails.collateralAmount,
      forwardDetails.oTokenAmount
    );

    console.log(`The value returned from the contract is: ${value}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
};

const ForwardContextProvider = ({ children }) => {
  const [forwardDetails, setForwardDetails] = useState({
    owner: "0x0000000",
    oTokenLong: "0x0000000",
    oTokenShort: "0x0000000",
    collateralAsset: "USDC",
    collateralAmount: 5,
    oTokenAmount: 5,
  });

  useEffect(() => {
    callContract(forwardDetails);
  }, []);

  return (
    <ForwardContext.Provider
      value={{
        callContract,
      }}
    >
      {children}
    </ForwardContext.Provider>
  );
};

export { ForwardContext, ForwardContextProvider };
