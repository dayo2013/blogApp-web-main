import React from "react";
import { FaWineGlassAlt } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <div className="sticky top-0 w-full bg-white">
      <div className="flex justify-between items-center py-5 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">DyPumping</h1>
        <div>
          {/* <button className="bg-primary inline-flex px-3 py-2 rounded-md text-white font-medium">
            Connect Wallet
          </button> */}
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
