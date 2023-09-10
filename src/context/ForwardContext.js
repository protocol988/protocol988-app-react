import { ethers } from "ethers";
import { createContext, useState } from "react";

const ForwardContext = createContext();

const contractAbi = [
  "function MintForwardQuick() public view returns (uint256)",
  "function LongFShareAddressesOwned() public view returns (uint256)",
  "function ShortFShareAddressesOwned() public view returns (uint256)",
];

const mintForward = async (details) => {
  console.log(details);
  try {
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");
    const contractAddress = "0xFC628dd79137395F3C9744e33b1c5DE554D94882";

    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      provider
    );

    const value = await contract.MintForwardQuick(
      details.owner,
      details.oTokenLong,
      details.oTokenShort,
      details.collateralAsset,
      details.collateralAmount,
      details.oTokenAmount
    );

    console.log(`The value returned from the contract is: ${value}`);
    return value;
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
};

const ForwardContextProvider = ({ children }) => {
  const [address, setAddress] = useState();
  const [forwardDetails, setForwardDetails] = useState({
    owner: address ?? "0x0000000",
    oTokenLong: "0x0000000",
    oTokenShort: "0x0000000",
    collateralAsset: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    collateralAmount: 5,
    oTokenAmount: 5,
  });

  return (
    <ForwardContext.Provider
      value={{
        setAddress,
        mintForward,
        setForwardDetails,
      }}
    >
      {children}
    </ForwardContext.Provider>
  );
};

export { ForwardContext, ForwardContextProvider };
