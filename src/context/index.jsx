import { createContext, useContext } from "react";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const Connection = createContext();

const ConnectionProvider = ({ children }) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <Connection.Provider value={{ address, isConnected, connect }}>
      {children}
    </Connection.Provider>
  );
};

export const useConnection = () => useContext(Connection);

export default ConnectionProvider;
