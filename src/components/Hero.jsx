import React from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import myABI from "../../abi.json";
import { toast } from "react-toastify";
import Modal from "./Modal";

const Hero = () => {
  const { isConnected, address } = useAccount();
  const { data, isError, isLoading } = useContractRead({
    address: myABI.address,
    abi: myABI.abi,
    functionName: "getUser",
    args: [address],
  });
  const { config } = usePrepareContractWrite({
    address: myABI.address,
    abi: myABI.abi,
    functionName: "register",
  });

  const { isSuccess, write } = useContractWrite(config);
  const handleCreateUser = () => {
    write?.();
    if (isSuccess) {
      toast("Successfully created user");
    }
  };

  return (
    <div className="bg-[#F7F7F7]">
      <div className="text-center py-12">
        <h1 className="text-7xl font-bold mb-8 text-primary">
          The home for web3 <br />
          publishing
        </h1>
        {data ? (
          <button
            className={`${
              isConnected ? "bg-primary" : "bg-red-500"
            } inline-flex px-6 py-4 rounded-lg text-white font-medium`}
            disabled={!isConnected}
            data-hs-overlay="#hs-full-screen-modal-below-xl"
          >
            {data ? "Create post" : "Register here"}
          </button>
        ) : (
          <button
            className={`${
              isConnected ? "bg-primary" : "bg-red-500"
            } inline-flex px-6 py-4 rounded-lg text-white font-medium`}
            disabled={!write}
            onClick={handleCreateUser}
          >
            {isConnected ? "Register here" : "Connect to register"}
          </button>
        )}
      </div>
      <Modal />
    </div>
  );
};

export default Hero;
